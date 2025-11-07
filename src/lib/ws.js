const WebSocket = require("ws")

const MUSTER_DEV_SERVER_MSG = {
  RECOMPILED: "Recompiled",
}

class MusterWebsocket {
  #wss
  #ws

  constructor(port) {
    this.#wss = new WebSocket.Server({ port })
    this.#wss.on("connection", (ws) => {
      this.#ws = ws
      ws.on("close", () => {
        this.#ws = undefined
      })
    })
  }

  sendRecompile() {
    if (this.#ws) {
      this.#ws.send(MUSTER_DEV_SERVER_MSG.RECOMPILED)
    }
  }
}

module.exports = MusterWebsocket
