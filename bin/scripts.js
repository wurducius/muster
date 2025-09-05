const { join } = require("path")

const scriptPath = join(__dirname, "..", "src")

const script = (id) => ({ cmd: id, run: `node ${join(scriptPath, `${id}.js`)}` })

const scriptIds = ["build", "clean", "lighthouse", "reinstall", "serve"]

const SCRIPTS = scriptIds.map(script)

module.exports = SCRIPTS
