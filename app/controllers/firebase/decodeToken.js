let admin

const decodeToken = async (ctx) => {
  try {
    const accessToken = ctx.query.token
    const decodedToken = await admin.auth()
      .verifyIdToken(accessToken)

    ctx.body = decodedToken
  } catch (e) {
    console.log('e ->', e)
    ctx.throw(400, 'Firebase auth is invalid for this user.')
  }
}

module.exports = (_admin) => {
  admin = _admin

  return decodeToken
}
