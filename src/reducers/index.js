import { combineReducers } from 'redux'
import items from './items'
import routes from './routes'
import item from './itemReducer'
import login from './loginReducer'
import main from './mainRouterReducer'

export default combineReducers({
  items,
  item,
  login,
  main,
  routes,
})
