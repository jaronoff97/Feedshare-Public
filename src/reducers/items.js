import {
  ADD_ITEM,
  REMOVE_ITEM,
  OFFLINE_ITEMS_LOADED,
  CONNECTION_CHECKING,
  CONNECTION_CHECKED,
  CONNECTION_ONLINE,
  CONNECTION_OFFLINE,
  GET_INITIAL_STATE,
  SIGN_OUT,
  FILTER_ITEMS,
  ITEM_CHANGED
} from '../actions/items'
import { Map } from 'immutable';

const initialState = Map({
  onlineList: [],
  offlineList: [],
  filteredItems: [],
  connectionChecked: false,
  user: ''
})
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

export default function reducer(state = initialState, action) {
  const init = []
  switch (action.type) {
  case ADD_ITEM:
    action.itemData.comments = []
    if(state.get('onlineList').filter((e) => e.id == action.itemData.id).length > 0){
      list = state.get('onlineList').sort((a, b) => b.time_posted - a.time_posted)
    } else {
      list = state.get('onlineList').concat([action.itemData]).sort((a, b) => b.time_posted - a.time_posted)
    }
    return state.set('onlineList',  list)
                .set('offlineList', list)
  case REMOVE_ITEM:
    list = state.get('onlineList').slice(0)
    const index = list.map(i => i.id).indexOf(action.id)
    list.splice(index, 1)

    return state.set('onlineList',  list)
                .set('offlineList', list)
  case FILTER_ITEMS:
    let filtered_items = state.get('onlineList').filter((e) => (e.title.contains(action.filter_text)) || (e.category.contains(action.filter_text)))
    return state.set('filteredItems', filtered_items)
  case ITEM_CHANGED:
    list = state.get('onlineList')
    if(state.get('onlineList').filter((e) => e.id == action.item.id).length > 0){
      let index = state.get('onlineList').findIndex(item => item.id === action.item.id);
      list[index] = action.item
      list = list.sort((a, b) => b.time_posted - a.time_posted)
    }
    return state.set('onlineList',  list)
                .set('offlineList', list)
  case OFFLINE_ITEMS_LOADED:
    return state.set('offlineLoaded', true)
                .set('offlineList', action.items)
  case CONNECTION_CHECKING:
    return state.set('connectionChecked', false)
  case CONNECTION_CHECKED:
    return state.set('connectionChecked', true)
  case CONNECTION_ONLINE:
    return state.set('connectionChecked', true)
                .set('connected', true)
  case CONNECTION_OFFLINE:
    return state.set('connectionChecked', true)
                .set('connected', false)
  case GET_INITIAL_STATE:
    return state.set('user', action.user)
  case SIGN_OUT:
    return state.set('user', '')
  default:
    return state
  }
}
