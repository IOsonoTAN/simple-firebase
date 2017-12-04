const Router = require('koa-router')
const router = new Router({
  prefix: '/firebase'
})

const controller = require('../controllers/firebase')

router.get('/', controller.decodeToken)
router.get('/register', controller.register)
router.get('/login', controller.login)
router.get('/login/facebook', controller.loginFacebook)
router.get('/logout', controller.logout)

module.exports = router
