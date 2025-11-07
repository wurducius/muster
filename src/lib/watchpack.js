const Watchpack = require("watchpack")

const WATCHPACK_OPTIONS = {
  aggregateTimeout: 1000,
  poll: true,
  followSymlinks: true,
  ignored: "**/.git",
}

const listOfFilesDefault = []
const listOfDirectoriesDefault = ["./src", "./public"]
const listOfNotExistingItemsDefault = []

class MusterWatchpack {
  #wp
  #isWatching = false

  constructor() {
    this.#wp = new Watchpack(WATCHPACK_OPTIONS)
  }

  watch(files, onChange) {
    if (this.#isWatching) {
      throw new Error("Muster watchpack already watching.")
    } else {
      this.#isWatching = true
      this.#wp.watch({
        files: files?.listOfFiles ?? listOfFilesDefault,
        directories: files?.listOfDirectories ?? listOfDirectoriesDefault,
        missing: files?.listOfNotExistingItems ?? listOfNotExistingItemsDefault,
        startTime: Date.now() - 10000,
      })
      this.#wp.on("aggregated", (changes, removals) => {
        onChange(changes, removals)
      })
    }
  }

  close() {
    if (this.#isWatching) {
      this.#isWatching = false
      this.#wp.close()
    } else {
      throw new Error("Muster watchpack not watching.")
    }
  }
}

module.exports = { MusterWatchpack }
