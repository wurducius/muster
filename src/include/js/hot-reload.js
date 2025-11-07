const reload = () => {
  window.location.reload()
}

const ws = new WebSocket("ws://localhost:8080")

ws.onmessage = (event) => {
  const payload = event.data
  if (payload === "Recompiled") {
    console.log("Received recompiled message from the development server. Reloading page...")
    reload()
  } else {
    console.log("Received unexpected message from the development server.")
  }
}

ws.onopen = () => {
  console.log("Connected to the development server.")
}

ws.onclose = () => {
  console.log("Disconnected from the development server.")
}

ws.onerror = (error) => {
  const errorMsg = error.message
  console.log("Received error from development server: ", errorMsg)
}
