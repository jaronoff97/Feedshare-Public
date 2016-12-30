import { Actions, ActionConst } from 'react-native-router-flux'
import { firebaseApp, googleProvider } from '../../config'

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