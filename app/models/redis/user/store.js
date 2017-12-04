module.exports = redis => {
  return (data) => {
    return redis.setAsync('allmember:user:test', JSON.stringify(data))
      .then(result => result)
  }
}
