const path = require("path")
const fs = require("fs")

const join = path.join

const readdir = (directory) => fs.promises.readdir(directory, { recursive: true })

const stat = fs.promises.stat

const existsSync = fs.existsSync

const readFileSync = fs.readFileSync

const mkdirSync = fs.mkdirSync

const rmSync = fs.rmSync

const cp = (source, target) => fs.promises.cp(source, target, { recursive: true })

const writeFile = fs.promises.writeFile

module.exports = {
  join,
  stat,
  readdir,
  readFileSync,
  existsSync,
  mkdirSync,
  rmSync,
  cp,
  writeFile,
}
