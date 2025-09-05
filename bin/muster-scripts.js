const SCRIPTS = require("./scripts")
const { spawnSync, arrayCombinator } = require("./util")

const allowedCmd = SCRIPTS.map((script) => script.cmd)

const runTask = (taskRun) => {
  spawnSync(taskRun)
}

const eofolScripts = () => {
  const cmd = process.env.EOFOL_CMD
  if (!allowedCmd.includes(cmd)) {
    console.log(`Command "${cmd}" not recognized. Allowed commands are: ${allowedCmd.join(", ")}.`)
    process.exit()
  }
  const script = SCRIPTS.find((script) => script.cmd === cmd)
  arrayCombinator(script.run, runTask)
}

eofolScripts()
