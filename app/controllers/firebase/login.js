let firebase

const login = async (ctx) => {
  try {
    const {
      email,
      password
    } = ctx.request.query
    const accessToken = await firebase.auth()
      .signInWithEmailAndPassword(email, password)

    ctx.body = accessToken
  } catch (e) {
    console.log('e ->', e)
    ctx.throw(e.code, e.message)
  }
}

module.exports = (_firebase) => {
  firebase = _firebase

  return login
}
