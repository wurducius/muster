const { w3cHtmlValidator } = require("w3c-html-validator")
const { error, success } = require("../util/log")
const { profiler } = require("../util/profiler")
const { prettyTime } = require("../util/compile-util")

const validate = async (html, pageName) => {
  try {
    const { time } = await profiler(() =>
      w3cHtmlValidator.validate({ html }).catch((ex) => {
        console.log(ex)
      }),
    )
    success(`[3/4] ${pageName} HTML validatated successfully in ${prettyTime(time)}`)
    return html
  } catch (ex) {
    error("HTML invalid: ", ex)
  }
}

module.exports = validate
