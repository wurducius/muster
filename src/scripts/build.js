const validateHtml = require("../lib/validate-html")
const minifyHtml = require("../lib/minify-html")
const { profiler } = require("../util/profiler")
const { success } = require("../util/log")
const { prettyTime } = require("../util/compile-util")
const { existsSync, mkdirSync, rmSync, cp, writeFile } = require("../util/fs")
const { buildPath, buildIndexPath, buildAboutPath, buildLicensePath, publicSourcePath } = require("../util/path")
const compileHtml = require("../compile/template")
const { style } = require("../compile/views/index")
const muster = require("../../muster")

const { pages } = muster

const touchRm = (path) => {
  if (existsSync(path)) {
    rmSync(path)
  }
}

const touch = () => {
  if (!existsSync(buildPath)) {
    mkdirSync(buildPath)
  }
  ;[buildIndexPath, buildAboutPath, buildLicensePath].forEach(touchRm)
}

const copyPublicDir = () => cp(publicSourcePath, buildPath)

const writeHtml = (path, result) => writeFile(path, result)

const compilePage = async (pagePath, pageStyle, pageScript, pageContent, pageName, pageHead) => {
  const { time: compileTime, result: compiled } = await profiler(() =>
    compileHtml(pageStyle, pageScript, pageContent, pageHead),
  )
  success(`[1/4] ${pageName} HTML compiled successfully in ${prettyTime(compileTime)}`)
  const minified = await minifyHtml(compiled, pageName)
  const validated = await validateHtml(minified, pageName)
  const { time: writeTime } = await profiler(() => writeHtml(pagePath, validated))
  return writeTime
}

const buildPage = async (args) => {
  return await compilePage(args.path, style, args.script, args.content, args.name, args.head)
}

const build = async () => {
  const start = new Date()
  touch()
  const times = await Promise.all(pages.map(buildPage))
  await copyPublicDir()
  success(`[4/4] Bundle written and public directory copied in ${prettyTime(Math.max(...times))}`)
  const end = new Date()
  return end - start
}

module.exports = build
