const lighthouse = require("./scripts/lighthouse")
const { info } = require("./util/log")

const argv = process.argv
let argUrl = false
if (argv.length >= 2) {
  argUrl = argv[2]
}

info("lighthouse")
if (argUrl) {
  lighthouse(argUrl)
}
