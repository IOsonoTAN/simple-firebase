module.exports = async() => {
  let [redis, mongodb] = await Promise.all([
    require('./redis')(),
    require('./mongodb')()
  ])

  return {
    redis,
    mongodb
  }
}
