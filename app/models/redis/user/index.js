module.exports = instance => {
  return {
    store: require('./store')(instance)
  }
}
