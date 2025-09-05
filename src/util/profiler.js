const profiler = async (handler) => {
  const start = new Date()
  const result = await handler()
  const time = new Date() - start
  return { time, result }
}

module.exports = { profiler }
