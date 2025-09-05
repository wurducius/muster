const clean = require("./scripts/clean")
const { info, success } = require("./util/log")

info("clean")
clean()
success("Successfully cleaned build folder.")
