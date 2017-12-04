const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const schema = new mongoose.Schema({
  _id: {
    type: String
  }
}, {
  versionKey: false,
  collection: '_User'
})

mongoose.model('_User', schema)
schema.plugin(mongoosePaginate)

module.exports = schema
