let firebase

const logout = async (ctx) => {
  firebase.auth().signOut()

  ctx.redirect('/')
}

module.exports = (_firebase) => {
  firebase = _firebase

  return logout
}
