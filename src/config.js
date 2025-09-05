const { mergeDeep } = require("./util/obj")
const stateDefault = require("./state-default")
const state = require("../state")

const stateImpl = mergeDeep(stateDefault, state)

module.exports = { data: stateImpl.data, options: stateImpl.options, compilation: stateImpl.compilation }
