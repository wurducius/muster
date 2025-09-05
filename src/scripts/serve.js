const { execSync } = require("../util/process")
const { info } = require("../util/log")
const { CWD } = require("../util/path")

const serveOptions = {
  open: true,
  port: 8080,
  root: "./build",
}

const serve = () => {
  info("serve")
  execSync(
    `npx ${CWD}/node_modules/http-server ${serveOptions.root} -p ${serveOptions.port}${serveOptions.open ? " -o" : ""}`,
  )
}

module.exports = serve
