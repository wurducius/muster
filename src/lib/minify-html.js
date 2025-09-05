const { minify } = require("html-minifier-terser")
const { error, success } = require("../util/log")
const { prettySize, prettyTime } = require("../util/compile-util")
const { profiler } = require("../util/profiler")

const minifyHtmlOptions = {
  continueOnParseError: true,
  removeComments: true,
  minifyHTML: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  processScripts: true,
  collapseWhitespace: true,
  collapseInlineTagWhitespace: true,
  collapseBooleanAttributes: true,
  noNewlinesBeforeTagClose: true,
  sortAttributes: true,
  sortClassName: true,
}

const minifyHtml = async (html, pageName, totalSteps, step) => {
  try {
    const { time, result: minified } = await profiler(() =>
      minify(html, minifyHtmlOptions).catch((ex) => {
        console.log(ex)
      }),
    )
    success(
      `[${step}/${totalSteps}] ${pageName} HTML minified successfully in ${prettyTime(time)}: ${prettySize(html.length)} -> ${prettySize(
        minified.length,
      )} (-${prettySize(html.length - minified.length)}, -${((100 * (html.length - minified.length)) / html.length).toFixed(0)} %)`,
    )
    return minified
  } catch (ex) {
    error("Minify error: ", ex)
  }
}

module.exports = minifyHtml
