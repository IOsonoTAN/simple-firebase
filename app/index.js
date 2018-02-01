const Koa = require('koa')
const app = new Koa()
const respond = require('koa-respond')
const bouncer = require('koa-bouncer')
const bodyParser = require('koa-bodyparser')
// const models = require('./models')
const routes = require('./routes')

app.proxy = true

app.use(bodyParser())
app.use(respond())
app.use(bouncer.middleware())

// models().then(models => {
//   app.context.models = models
// })

app.use(routes.users.routes())
app.use(routes.firebase.routes())

module.exports = app
