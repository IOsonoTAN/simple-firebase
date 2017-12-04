const mongoose = require('mongoose')
const config = require('../../config')

module.exports = async() => {
  mongoose.Promise = global.Promise
  const instance = await mongoose.createConnection(config.mongodb.server)

  return {
    user: require('./user')(instance)
  }
}
