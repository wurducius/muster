const validateHtml = require("../lib/validate-html")
const minifyHtml = require("../lib/minify-html")
const { profiler } = require("../util/profiler")
const { success } = require("../util/log")
const { prettyTime } = require("../util/compile-util")
const { existsSync, mkdirSync, rmSync, cp, writeFile } = require("../util/fs")
const { buildPath, buildIndexPath, buildAboutPath, buildLicensePath, publicSourcePath, CWD } = require("../util/path")
const compileHtml = require("../compile/template")
const { join } = require("path")
const muster = require(join(CWD, "muster"))

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

const compilePage = async (pagePath, pageStyle, pageScript, pageContent, pageName, pageHead, totalSteps, step) => {
  const { time: compileTime, result: compiled } = await profiler(() =>
    compileHtml(pageStyle, pageScript, pageContent, pageHead),
  )
  success(`[${step}/${totalSteps}] ${pageName} HTML compiled successfully in ${prettyTime(compileTime)}`)
  const minified = await minifyHtml(compiled, pageName, totalSteps, step + 1)
  const validated = await validateHtml(minified, pageName, totalSteps, step + 2)
  const { time: writeTime } = await profiler(() => writeHtml(pagePath, validated))
  return writeTime
}

const buildPage = (totalSteps) => async (args, step) => {
  return await compilePage(args.path, args.style, args.script, args.content, args.name, args.head, totalSteps, step)
}

const build = async () => {
  const start = new Date()
  touch()
  const totalSteps = 3 * pages.length + 1
  const times = await Promise.all(pages.map((page, i) => buildPage(totalSteps)(page, i * 3 + 1)))
  await copyPublicDir()
  success(`[4/${totalSteps}] Bundle written and public directory copied in ${prettyTime(Math.max(...times))}`)
  const end = new Date()
  return { time: end - start, totalSteps }
}

module.exports = build
