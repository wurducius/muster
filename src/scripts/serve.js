const { execSync, spawn } = require("../util/process")
const { CWD } = require("../util/path")

const serveOptions = {
  open: true,
  port: 8080,
  root: "./build",
}

const serveSync = (port, isSilent) => {
  execSync(
    `npx ${CWD}/node_modules/http-server ${serveOptions.root} -p ${port ?? serveOptions.port}${serveOptions.open ? " -o" : ""}${isSilent ? " -s" : ""}`,
  )
}

const serveAsync = (port, isSilent) => {
  spawn(
    `npx ${CWD}/node_modules/http-server ${serveOptions.root} -p ${port ?? serveOptions.port}${serveOptions.open ? " -o" : ""}${isSilent ? " -s" : ""}`,
  )
}

module.exports = { serveSync, serveAsync }
