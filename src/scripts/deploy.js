const { deployScriptPath } = require("../util/path")
const { execSync } = require("../util/process")

const deploy = () => execSync(deployScriptPath)

module.exports = deploy
