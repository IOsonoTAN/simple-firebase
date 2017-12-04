const Koa = require('koa')
const app = new Koa()
const models = require('./models')
const routes = require('./routes')

app.proxy = true

models().then(models => {
  app.context.models = models
})

app.use(routes.users.routes())
app.use(routes.firebase.routes())

module.exports = app
