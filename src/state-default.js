const stateDefault = {
  data: {
    title: "Homepage",
    bookmarks: [],
    td: [],
    notes: [],
  },
  options: {
    forecast: true,
    td: true,
    notes: true,
    showTitle: true,
    showGroupTitles: false,
  },
  compilation: {
    verbose: true,
    clearScreen: true,
    open: true,
  },
}

module.exports = stateDefault
