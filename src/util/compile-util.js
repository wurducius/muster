const { join, stat, readdir } = require("./fs")

const prettySize = (size) => {
  const i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024))
  return `${(size / Math.pow(1024, i)).toFixed(2) * 1} ${["B", "kB", "MB", "GB", "TB"][i]}`
}

const prettyTime = (ms) => {
  let seconds = (ms / 1000).toFixed(1)
  let minutes = (ms / (1000 * 60)).toFixed(1)
  let hours = (ms / (1000 * 60 * 60)).toFixed(1)
  let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1)
  if (seconds < 1) return `${ms} Milliseconds`
  if (seconds < 60) return `${seconds} Seconds`
  else if (minutes < 60) return `${minutes} Minutes`
  else if (hours < 24) return `${hours} Hours`
  else return `${days} Days`
}

const dirSize = async (directory) => {
  const files = await readdir(directory)
  const stats = files.map((file) => stat(join(directory, file)))
  return (await Promise.all(stats)).reduce((accumulator, { size }) => accumulator + size, 0)
}

const getArgv = (args) => {
  const argv = process.argv
  let argForce = false
  if (argv.length >= 2) {
    argv.forEach((a, i) => {
      if (i >= 2) {
        if (a === args.short || a === args.long) {
          argForce = true
        }
      }
    })
  }
  return argForce
}

module.exports = {
  prettySize,
  prettyTime,
  dirSize,
  getArgv,
}
