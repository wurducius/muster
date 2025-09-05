const openLocal = require("../lib/open-local")

const projectUrl = encodeURIComponent("https://eofol.com/homepage")

const lighthouse = () => {
  openLocal(`https://pagespeed.web.dev/analysis?url=${projectUrl}`)
}

module.exports = lighthouse
