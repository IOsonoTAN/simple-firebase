const config = require('../../../config')
const userSchema = require('./schema')
const limit = config.static.limit.collection
let _User

const find = async(options = {}, page = 1) => {
  const result = await _User.paginate(options, {
    page,
    limit
  })

  return result
}

const findById = async(_id) => {
  const result = await _User.findOne({
    _id
  })

  return result
}

module.exports = _mongoose => {
  _User = _mongoose.model('_User', userSchema)

  return {
    find,
    findById
  }
}
