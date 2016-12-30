import { ADD_COMMENT, ITEM_CHANGED, LIKE_POST_EVENT, CHANGE_POST_VOTES, LIKE_COMMENT_EVENT, UNSUBSRIBE_FROM_POST } from '../actions/itemDetailActions'

const initialState = {
  comments: [],
  starCount: 0,
  user: '',
  direction: "none"
}

export default function itemReducer(state = initialState, action) {
  let list
  switch (action.type) {

  case CHANGE_POST_VOTES:
    return {
      ...state,
      starCount: action.data,
      direction: action.direction
    }
  case ITEM_CHANGED:
    list = state.comments.sort((a, b) => b.time_posted - a.time_posted)
    if (list.filter((e) => e.id == action.item.id).length > 0) {
      list.sort((a, b) => b.time_posted - a.time_posted)
    } else {
      list.push(action.item)
      list.sort((a, b) => b.time_posted - a.time_posted)
    }
    console.log('updated comments '+list.length)
    return {
      ...state,
      comments: list
    }
  case ADD_COMMENT:
    return {
      ...state
    }
  case UNSUBSRIBE_FROM_POST:
    return {
      ...state,
      comments: [],
      starCount: 0
    }
  default:
    return state
  }
}
