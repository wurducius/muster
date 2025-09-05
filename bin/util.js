const { spawnSync: spawnSyncImpl } = require("child_process")

const arrayCombinator = (items, mapper) => {
  if (Array.isArray(items)) {
    return items.forEach(mapper)
  } else if (items) {
    return [mapper(items)]
  } else {
    return undefined
  }
}

const spawnOptions = {
  encoding: "utf8",
  cwd: process.cwd(),
  env: process.env,
  shell: process.platform === "win32",
  stdio: "inherit",
}

const spawnSync = (cmd, args) => spawnSyncImpl(cmd, args ?? [], spawnOptions)

module.exports = { arrayCombinator, spawnSync }
