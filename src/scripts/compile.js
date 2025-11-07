const clean = require("./clean")
const build = require("./build")
const { success, info } = require("../util/log")
const { prettyTime, dirSize, prettySize } = require("../util/compile-util")
const { buildPath, buildIndexPath } = require("../util/path")
const { compilation } = require("../config")
const openLocal = require("../lib/open-local")

const compile = (isHot) => {
  clean()
  return build(isHot).then(({ time, totalSteps }) => {
    success(`Total build in ${prettyTime(time)} at ${buildPath}`)
    dirSize(buildPath).then((size) => {
      success(`Build size: ${prettySize(size)}`)
      return new Promise(() => {})
    })
  })
}

const openInBrowser = () => {
  const isRelease = process.env.EOFOL_RELEASE === "true"
  if (!isRelease && compilation.open) {
    info("Opening in browser...")
    openLocal(buildIndexPath)
  }
}

module.exports = { compile, openInBrowser }
