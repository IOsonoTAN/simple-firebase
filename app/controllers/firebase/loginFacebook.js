let firebase

const loginFacebook = async (ctx) => {
  const { token } = ctx.request.query
  try {
    const provider = new firebase.auth.FacebookAuthProvider()
    provider.addScope('email')
    provider.addScope('public_profile')
    firebase.auth().languageCode = 'th_TH'
    provider.setCustomParameters({
      'display': 'popup'
    })
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const accessToken = result.credential.accessToken
      console.log('accessToken ->', accessToken)
      // // The signed-in user info.
      // var user = result.user;
      // ...
    }).catch(error => {
      console.log('error ->', error)
      // // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    })

    // const credential = firebase.auth.FacebookAuthProvider.credential(token)
    // const result = await firebase.auth().signInWithCredential(credential)

    // ctx.ok(result)
  } catch (e) {
    ctx.badRequest({
      error: e.message,
      stack: e.stack
    })
  }
}

module.exports = (_firebase) => {
  firebase = _firebase

  return loginFacebook
}
