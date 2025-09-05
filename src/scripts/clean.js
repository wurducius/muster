const { rimraf } = require("rimraf")
const { error } = require("../util/log")
const { buildPath } = require("../util/path")

const clean = () => {
  try {
    rimraf.rimrafSync(buildPath)
  } catch (e) {
    error("Clean failed")
    throw new Error(e.message)
  }
}

module.exports = clean
