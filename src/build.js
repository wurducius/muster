const { clear, info } = require("./util/log")
const { compilation } = require("./config")
const { compile, openInBrowser } = require("./scripts/compile")

if (compilation.clearScreen) {
  clear()
}

info("Starting Homepage build...")

compile().then(() => {
  openInBrowser()
})
