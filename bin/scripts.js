const scriptPath = `${__dirname}/../src/scripts/`

const script = (id) => ({ cmd: id, run: `node ${scriptPath}${id}.js` })

const scriptIds = ["build", "clean", "lighthouse", "reinstall", "serve"]

const SCRIPTS = scriptIds.map(script)

module.exports = SCRIPTS
