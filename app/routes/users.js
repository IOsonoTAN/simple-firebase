const Router = require('koa-router')
const router = new Router({
  prefix: '/users'
})
const koaBody = require('koa-body')

router.get('/', async(ctx, next) => {
  const result = await ctx.models.mongodb.user.findById('3XKU7zekCH')
  ctx.body = result
})

router.post('/', koaBody(), (ctx, next) => {
  ctx.body = ctx.request.body
})

module.exports = router
