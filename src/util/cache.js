const purgeCache = (moduleName) => {
  searchCache(moduleName, (mod) => {
    delete require.cache[mod.id]
  })

  Object.keys(module.constructor._pathCache).forEach((cacheKey) => {
    if (cacheKey.indexOf(moduleName) > 0) {
      delete module.constructor._pathCache[cacheKey]
    }
  })
}

const searchCache = (moduleName, callback) => {
  let mod = require.resolve(moduleName)
  if (mod && (mod = require.cache[mod]) !== undefined) {
    ;(function traverse(mod) {
      mod.children.forEach((child) => {
        traverse(child)
      })
      callback(mod)
    })(mod)
  }
}

module.exports = { purgeCache }
