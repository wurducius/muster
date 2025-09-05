const { join, rmSync, existsSync } = require("../util/fs")
const { CWD } = require("../util/path")
const { error, info, success } = require("../util/log")
const { execSync, spawn } = require("../util/process")
const { getArgv } = require("../util/compile-util")

const packageLockPath = join(CWD, "package-lock.json")
const nodeModulesPath = join(CWD, "node_modules")

const argForce = getArgv({ short: "-f", long: "--force" })
const steps = argForce ? 4 : 3

const reinstall = () => {
  info("reinstall")

  if (existsSync(packageLockPath)) {
    rmSync(packageLockPath)
    success(`[1/${steps}] Deleted package-lock.json`)
  }

  if (existsSync(nodeModulesPath)) {
    rmSync(nodeModulesPath, { recursive: true })
    success(`[2/${steps}] Deleted node_modules`)
  }

  if (argForce) {
    execSync("npm cache clean --force")
    success(`[3/${steps}] Cleaned forcefully npm cache`)
  }

  const install = spawn("npm i", [])

  install.on("error", (data) => {
    error(`ERROR: ${data}`)
  })
  install.on("close", () => {
    success(`[${steps}/${steps}] Installed dependencies`)
    success("Reinstalled successfully.")
    process.exit(0)
  })
}

module.exports = reinstall
