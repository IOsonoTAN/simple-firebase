let firebase

const login = async (ctx) => {
  try {
    const {
      email,
      password
    } = ctx.request.query

    ctx.validateQuery('email')
      .optional()
      .isString()
      .trim()
      .isEmail('Invalid email format')

    const accessToken = await firebase.auth()
      .signInWithEmailAndPassword(email, password)

    ctx.ok(accessToken)
  } catch (e) {
    ctx.badRequest({
      error: e.message,
      stack: e.stack
    })
  }
}

module.exports = (_firebase) => {
  firebase = _firebase

  return login
}
