import { LOGIN_USER, SIGNUP_USER, LOGGED_IN } from '../actions/loginActions'

const initialState = {
  authenticated: false,
  user: ''
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state,
      user: action.data.user,
      should_show_login: action.data.user ? false : true,
      authenticated: action.data.error ? false : true
    }
  case SIGNUP_USER:
    return {
      ...state,
      user: action.data.user,
      should_show_login: action.data.user ? false : true,
      authenticated: action.data.error ? false : true
    }

  case LOGGED_IN:
    return {
      ...state,
      user: action.user || "",
      logged_in: action.logged_in
    }

  default:
    return state
  }

}