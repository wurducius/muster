const childProcess = require("child_process")

const spawnOptions = {
  encoding: "utf8",
  cwd: process.cwd(),
  env: process.env,
  shell: process.platform === "win32",
  stdio: "inherit",
}

const execSync = (cmd) => childProcess.execSync(cmd, spawnOptions)

const spawn = (cmd, args) => childProcess.spawn(cmd, args, spawnOptions)

module.exports = { execSync, spawn }
