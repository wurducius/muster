const { join } = require("./fs")

const CWD = process.cwd()
const DIRNAME = __dirname

const buildPath = join(CWD, "build")
const buildIndexPath = join(buildPath, "index.html")
const buildLicensePath = join(buildPath, "license.html")
const buildAboutPath = join(buildPath, "about.html")
const publicSourcePath = join(CWD, "public")
const deployScriptPath = join(DIRNAME, "..", "..", "deploy.bat")

const scriptPaths = [join(DIRNAME, "..", "include", "js", "init.js")]

const stylePaths = [
  join(DIRNAME, "..", "include", "css", "theme.css"),
  join(DIRNAME, "..", "include", "css", "base.css"),
  join(DIRNAME, "..", "include", "css", "font.css"),
  join(DIRNAME, "..", "include", "css", "typography.css"),
  join(DIRNAME, "..", "include", "css", "components.css"),
  join(DIRNAME, "..", "include", "css", "custom.css"),
  join(DIRNAME, "..", "include", "css", "custom-components.css"),
]

module.exports = {
  CWD,
  buildPath,
  buildIndexPath,
  buildAboutPath,
  buildLicensePath,
  publicSourcePath,
  deployScriptPath,
  scriptPaths,
  stylePaths,
}
