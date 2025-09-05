const deploy = require("./scripts/deploy")
const { info, error, success, clear } = require("./util/log")
const build = require("./scripts/build")
const { prettyTime, prettySize, dirSize } = require("./util/compile-util")
const { buildPath } = require("./util/path")
const { compilation } = require("./config")

if (compilation.clearScreen) {
  clear()
}
info("Starting Homepage build...")
build().then((time) => {
  success(`Total build in ${prettyTime(time)} at ${buildPath}`)
  dirSize(buildPath).then((size) => {
    success(`Build size: ${prettySize(size)}`)

    info("Deploying project...")
    const resultCode = deploy()
    if (!resultCode) {
      success("Successfully deployed project.")
    } else {
      error("Deployment of project failed.")
    }
  })
})
