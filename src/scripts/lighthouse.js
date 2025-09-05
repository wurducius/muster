const openLocal = require("../lib/open-local")

const lighthouse = (url) => {
  openLocal(`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`)
}

module.exports = lighthouse
