let firebase

const login = async (ctx) => {
  try {
    const {
      email,
      password
    } = ctx.request.query
    await firebase.auth()
      .createUserWithEmailAndPassword(email, password)

    ctx.body = 'Welcome to Firebase!'
  } catch (e) {
    console.log('e ->', e)
    ctx.throw(e.code, e.message)
  }
}

module.exports = (_firebase) => {
  firebase = _firebase

  return login
}
