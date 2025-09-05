const build = require("./scripts/build")
const clean = require("./scripts/clean")
const openLocal = require("./lib/open-local")
const { prettyTime, prettySize, dirSize } = require("./util/compile-util")
const { success, clear, info } = require("./util/log")
const { buildPath, buildIndexPath } = require("./util/path")
const { compilation } = require("./config")

if (compilation.clearScreen) {
  clear()
}
info("Starting Homepage build...")
clean()
build().then(({ time, totalSteps }) => {
  success(`Total build in ${prettyTime(time)} at ${buildPath}`)
  dirSize(buildPath).then((size) => {
    success(`Build size: ${prettySize(size)}`)
    if (compilation.open) {
      info("Opening in browser...")
      openLocal(buildIndexPath)
    }
  })
})
