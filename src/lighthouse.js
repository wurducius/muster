const lighthouse = require("./scripts/lighthouse")
const { info } = require("./util/log")

const argUrl = process.env.EOFOL_LIGHTHOUSE_URL

info("lighthouse")
if (argUrl) {
  lighthouse(argUrl)
}
