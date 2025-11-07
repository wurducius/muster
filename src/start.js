const { prettyTime } = require("./util/compile-util")
const { clear, info } = require("./util/log")
const { musterPath } = require("./util/path")
const { compilation } = require("./config")
const { purgeCache } = require("./util/cache")
const { MusterWatchpack } = require("./lib/watchpack")
const { compile } = require("./scripts/compile")
const MusterWebsocket = require("./lib/ws")
const { serveAsync } = require("./scripts/serve")

const DEVELOPMENT_SERVER = {
  port: 8080,
  listOfDirectories: ["./src", "./public"],
}

const ws = new MusterWebsocket(DEVELOPMENT_SERVER.port)

const wp = new MusterWatchpack()

const recompile = () => {
  info("Detected file change! Recompiling...")
  const start = Date.now()
  purgeCache(musterPath)
  compile(true).then(() => {
    ws.sendRecompile()
    info(`Recompiled in ${prettyTime(Date.now() - start)}.`)
  })
}

const onDevServerShutdown = () => {
  info("Shutting down Muster development server...")
  wp.close()
  process.abort()
}

const onDevServerInit = () => {
  if (compilation.clearScreen) {
    clear()
  }
  info("Starting Muster development server...")
  compile(true).then(() => {
    serveAsync(DEVELOPMENT_SERVER.port, true)
    wp.watch({ listOfDirectories: DEVELOPMENT_SERVER.listOfDirectories }, recompile)
  })
}

onDevServerInit()

process.on("SIGINT", onDevServerShutdown)
process.on("SIGTERM", onDevServerShutdown)
