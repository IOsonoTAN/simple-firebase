const Promise = require('bluebird')
const redis = require('redis')
const config = require('../../config')
const namespace = config.redis.ns

module.exports = () => {
  Promise.promisifyAll(redis.RedisClient.prototype)
  Promise.promisifyAll(redis.Multi.prototype)

  return new Promise((resolve, reject) => {
    const instance = redis.createClient(config.redis.server, { auth_pass: config.redis.auth })
    instance.namespace = namespace
    instance.on('connect', onConnect)
    instance.on('error', err => reject(err))

    function onConnect() {
      return resolve({
        user: require('./user')(instance)
      })
    }
  })
}
