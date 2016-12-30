// See https://firebase.google.com/docs/web/setup#project_setup

import { initializeApp, auth } from 'firebase'

const firebase_config = {
  API_KEY: "Xxxxxxxxxxxxxxxxxxxxxxxxx",
  AUTH_DOMAIN: "Xxxxxxxxxxxxxxxxxxxxxxxxx",
  DATABASE_URL: "Xxxxxxxxxxxxxxxxxxxxxxxxx",
  STORAGE_BUCKET: "Xxxxxxxxxxxxxxxxxxxxxxxxx"
}
const firebaseApp = initializeApp({
  apiKey: firebase_config.API_KEY,
  authDomain: firebase_config.AUTH_DOMAIN,
  databaseURL: firebase_config.DATABASE_URL,
  storageBucket: firebase_config.STORAGE_BUCKET
})

var googleProvider = new auth.GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/plus.login');
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');
googleProvider.addScope('https://www.googleapis.com/auth/plus.me');
export { googleProvider, firebaseApp }