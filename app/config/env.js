module.exports = {
  nodeEnv: process.env.NODE_ENV || 'development',
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  port: process.env.PORT || 3000,
  sessionKey: process.env.SESSION_KEY || 'xxxxxx',
  mongodb: {
    server: process.env.DB_MONGO_URL || 'mongodb://localhost:27017/seven'
  },
  redis: {
    server: process.env.DB_REDIS_URL || 'redis://localhost:6379',
    auth: process.env.DB_REDIS_AUTH,
    ns: process.env.DB_REDIS_NAMESPACE || 'seven'
  },
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  }
}
