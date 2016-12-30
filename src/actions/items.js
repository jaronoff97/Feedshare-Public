import offline from 'react-native-simple-store'
import { Actions, ActionConst } from 'react-native-router-flux'
import { firebaseApp, googleProvider } from '../../config'

const itemsRef = firebaseApp.database().ref('items')
const commentsRef = firebaseApp.database().ref('comments')
const connectedRef = firebaseApp.database().ref('.info/connected')

var counter = 0;

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const OFFLINE_ITEMS_LOADED = 'OFFLINE_ITEMS_LOADED'
export const CONNECTION_CHECKING = 'CONNECTION_CHECKING'
export const CONNECTION_CHECKED = 'CONNECTION_CHECKED'
export const CONNECTION_ONLINE = 'CONNECTION_ONLINE'
export const CONNECTION_OFFLINE = 'CONNECTION_OFFLINE'
export const GET_INITIAL_STATE = 'GET_INITIAL_STATE'
export const SIGN_OUT = 'SIGN_OUT'
export const FILTER_ITEMS = 'FILTER_ITEMS'
export const ITEM_CHANGED = 'ITEM_CHANGED'
export const LIKE_POST_EVENT = 'LIKE_POST_EVENT'

export function likePostEvent(data) {
  const uid = data.user.uid
  const post = itemsRef.child(data.post_id).transaction(function(post) {
    if (post) {
      var upStars = 0
      var downStars = 0
      if (!post.upvotes) {
        post.upvotes = {}
      }
      if (!post.downvotes) {
        post.downvotes = {}
      }
      if (!post.starCount) {
        post.starCount = 0
      }
      if (data.direction == "up" && post.upvotes[uid] == null) {
        post.upvotes[uid] = true;
        delete post.downvotes[uid];
      } else if (data.direction == "down" && post.downvotes[uid] == null) {
        post.downvotes[uid] = true;
        delete post.upvotes[uid];
      } else {
        delete post.downvotes[uid];
        delete post.upvotes[uid];
      }

      upStars = Object.keys(post.upvotes).length;
      downStars = Object.keys(post.downvotes).length;
      post.starCount = upStars - downStars;
    }
    return post
  });
  console.log('POST')
  console.log(post)
  console.log('POST')
  return {
    type: LIKE_POST_EVENT,
    data: post
  }
}

export function signOut() {
  return dispatch => {
    firebaseApp.auth().signOut().then(function() {

      Actions.root({ type: ActionConst.RESET })
      dispatch({
          type: SIGN_OUT
      })
    }, function(error) {
      // An error happened.
      alert("Whoops! Contact Support")
    });
  }
}

export function getInitialState(closure_list) {
  itemsRef.on('child_removed', (snapshot) => {
    closure_list.removeItem(snapshot.val().id)
  })
  itemsRef.on('child_added', (snapshot) => {
    closure_list.addItem(snapshot.val())
  })

  itemsRef.on('child_changed', (snapshot) => {
    closure_list.itemChanged(snapshot.val())
  })

  connectedRef.on('value', snap => {
    if (snap.val() === true) {
      closure_list.goOnline()
    } else {
      closure_list.goOffline()
    }
  })
  return {
    type: GET_INITIAL_STATE,
    connected: true
  }
}

export function itemChanged(item) {
  return {
    type: ITEM_CHANGED,
    item: item
  }
}

export function addItem(itemData) {
  const itemRef = itemsRef.child(itemData.id)

  itemRef.set(itemData).then(function() {
    console.log('Item added')
  })
    .catch(function(error) {
      console.log('- - - - - error')
      console.log(error)
      console.log('- - - - - error')
      alert("Something went wrong with your post")
    });

  return {
    type: ADD_ITEM,
    itemData: itemData
  }
}

export function filterItems(text) {
  return {
    type: FILTER_ITEMS,
    filter_text: text
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id: id
  }
}

function offlineItemsLoaded(items) {
  return {
    type: OFFLINE_ITEMS_LOADED,
    items: items
  }
}

export function loadOfflineItems() {
  return dispatch => {
    offline.get('items').then(items => {
      dispatch(offlineItemsLoaded(items || []))
    })
  }
}

export function checkConnection() {
  return dispatch => {
    dispatch({
      type: CONNECTION_CHECKING
    })
    setTimeout(() => dispatch({
      type: CONNECTION_CHECKED
    }), 5000)
  }
}

export function goOnline() {
  return {
    type: CONNECTION_ONLINE
  }
}

export function goOffline() {
  return {
    type: CONNECTION_OFFLINE
  }
}
