const { execSync } = require("../util/process")

const openLocal = (path) => {
  execSync(`start ${path}`)
}

module.exports = openLocal
