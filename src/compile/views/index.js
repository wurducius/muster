const { readFileSync } = require("../../util/fs")
const { scriptPaths, stylePaths } = require("../../util/path")
const { div, h1, h2, img } = require("../ui/simple")

const readResources = (resourcesPath) =>
  resourcesPath
    .map((path) => readFileSync(path))
    .map((buffer) => buffer.toString())
    .join("\n")

const style = readResources(stylePaths)

const indexScript = readResources(scriptPaths)

const indexContent = [
  div({ class: "col center content gap" }, [
    h1({ class: "text-align-center" }, "Muster"),
    img({ src: "./logo512.png", alt: "Muster logo", height: 256, width: 256 }),
    h2({ class: "text-align-center" }, "Hello world !!"),
    div({}, "Lorem ipsum dolor sit amet"),
  ]),
]

module.exports = { style, indexScript, indexContent }
