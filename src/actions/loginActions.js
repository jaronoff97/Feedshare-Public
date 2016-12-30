import { Actions, ActionConst } from 'react-native-router-flux'
import { firebaseApp, googleProvider } from '../../config'

export const LOGIN_USER = 'LOGIN_USER'
export const SIGNUP_USER = 'SIGNUP_USER'

export const LOGGED_IN = 'LOGGED_IN'


export function userLoggedIn() {
  return dispatch => {
    firebaseApp.auth().onAuthStateChanged(function(authData) {
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        dispatch({
          type: LOGGED_IN,
          user: authData,
          logged_in: true
        })
      } else {
        dispatch({
          type: LOGGED_IN,
          logged_in: false
        })
      }
    })
  }
}

export function loginUserWithGoogle(info) {
  firebaseApp.auth().signInWithRedirect(googleProvider);
  return dispath => {
    firebaseApp.auth().getRedirectResult().then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      dispath({
        type: LOGIN_USER,
        data: {
          user: user
        }
      })
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log('- - - - - - Error')
      console.log(error.code)
      console.log('- - - - - - Error')
      alert('No good!')
      dispath({
        type: LOGIN_USER,
        data: {
          error: true
        }
      })
    // ...
    });
  }
}


export function loginUser(info) {
  return dispatch => {
    firebaseApp.auth().signInWithEmailAndPassword(info.email, info.password).then(function(user) {
      if(!user.emailVerified){
        user.sendEmailVerification()  
      }
      dispatch({
        type: LOGIN_USER,
        data: {
          user: user
        }
      })
    }).catch(function(error) {
      console.log("Error: ", error)
      var errorCode = error.code
      var errorMessage = error.message
      alert('No good!')
      dispatch({
        type: LOGIN_USER,
        data: {
          error: true
        }
      })
    })
  }
}

export function signupUser(info) {
  return dispatch => {
    firebaseApp.auth().createUserWithEmailAndPassword(info.email, info.password).then(function(user) {
      Actions.list({
        userData: user
      })
      dispatch({
        type: SIGNUP_USER,
        data: {
          user: user
        }
      })
    }).catch(function(error) {
      console.log("Error: ", error)
      var errorCode = error.code
      var errorMessage = error.message
      alert('No good!')
      dispatch({
        type: SIGNUP_USER,
        data: {
          error: true
        }
      })
    })
  }
}