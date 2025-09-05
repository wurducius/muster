const chalk = require("chalk")
const { compilation } = require("../config")

const primary = chalk.cyan
const success = chalk.green
const error = chalk.red

const logInfo = (msg) => {
  if (compilation.verbose) {
    console.log(primary(msg))
  }
}

const logSuccess = (msg) => {
  if (compilation.verbose) {
    console.log(success(msg))
  }
}

const logError = (msg) => {
  console.error(error(msg))
}

const clear = console.clear

module.exports = { info: logInfo, success: logSuccess, error: logError, clear }
