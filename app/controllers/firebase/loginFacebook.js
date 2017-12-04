let firebase

const loginFacebook = async (ctx) => {
  const facebookAccessToken = ctx.request.fbtoken
  try {
    const credential = firebase.auth.FacebookAuthProvider.credential(facebookAccessToken)
    const result = await firebase.auth().signInWithCredential(credential)

    ctx.body = result
  } catch (e) {
    console.log('e ->', e)
    ctx.throw(e.code, e.message)
  }
}

module.exports = (_firebase) => {
  firebase = _firebase

  return loginFacebook
}
