const config = require('../../config')
const firebase = require('firebase')
const admin = require('firebase-admin')
const serviceAccount = require('../../keys/firebase/firebaseServiceAccountKey.json')

const databaseURL = config.firebase.databaseURL

/**
 * Connect to Firebase Admin
 */
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL
})

/**
 * Connect to Firebase SDK
 */
firebase.initializeApp({
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.messagingSenderId
})

module.exports = {
  decodeToken: require('./decodeToken')(admin),
  logout: require('./logout')(firebase),
  login: require('./login')(firebase),
  loginFacebook: require('./loginFacebook')(firebase),
  register: require('./register')(firebase)
}
