const { indexScript, indexContent } = require("./src/compile/views/index")
const { buildIndexPath } = require("./src/util/path")

const head = { icon: "./logo512.png", url: "https://eofol.com/muster", theme: "#d4d4d4" }

const indexHead = { ...head, title: "Website made in Muster", description: "Website made in Muster" }

const pages = [{ name: "Index", path: buildIndexPath, script: indexScript, head: indexHead, content: indexContent }]

const muster = { pages }

module.exports = muster
