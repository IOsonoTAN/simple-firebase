const env = require('./env')

module.exports = {
  ...env,
  static: require('./static')
}
