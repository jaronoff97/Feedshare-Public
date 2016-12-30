import { LOGGED_IN } from '../actions/mainRouterActions'

const initialState = {
  authenticated: false
}

export default function mainRouterReducer(state = initialState, action) {
  switch (action.type) {
  case LOGGED_IN:
    return {
      ...state,
      authenticated: action.logged_in
    }
  default:
    return state
  }

}