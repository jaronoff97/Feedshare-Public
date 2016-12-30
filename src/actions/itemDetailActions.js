import offline from 'react-native-simple-store'
import { Actions, ActionConst } from 'react-native-router-flux'
import { firebaseApp, googleProvider } from '../../config'

const itemsRef = firebaseApp.database().ref('items')
const commentsRef = firebaseApp.database().ref('comments')
var user;
var itemRef = itemsRef
var commentRef = commentsRef

export const ADD_COMMENT = 'ADD_COMMENT'
export const ITEM_CHANGED = 'ITEM_CHANGED'
export const LIKE_POST_EVENT = 'LIKE_POST_EVENT'
export const CHANGE_POST_VOTES = 'CHANGE_POST_VOTES'
export const LIKE_COMMENT_EVENT = 'LIKE_COMMENT_EVENT'
export const SUBSRIBE_TO_POST = 'SUBSRIBE_TO_POST'
export const UNSUBSRIBE_FROM_POST = 'UNSUBSRIBE_FROM_POST'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export function subscribeToPost(data) {
  itemRef = itemsRef.child(data.itemid)
  user = data.user
  commentRef = commentsRef.child(data.itemid)
  itemRef.on('value', (snap) => {
    data.changePostVotes(snap.val())
  })
  commentRef.on('child_added', (snapshot) => {
    data.commentAdded(snapshot.val())
  })
  return {
    type: SUBSRIBE_TO_POST
  }
}
export function unsubscribeFromPost() {
  itemRef.off()
  commentRef.off()
  return {
    type: UNSUBSRIBE_FROM_POST
  }

}
export function changePostVotes(data) {
  var direction = "none";
  if (data.downvotes && (user.uid in data.downvotes)) {
    direction = "down";
  } else if (data.upvotes && (user.uid in data.upvotes)) {
    direction = "up";
  }
  return {
    type: CHANGE_POST_VOTES,
    data: data.starCount,
    direction: direction
  }
}
export function likePostEvent(data) {
  const uid = data.user.uid
  const post = itemRef.transaction(function(post) {
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
  return {
    type: LIKE_POST_EVENT,
    data: post
  }
}



export function removeItem(data) {
  if (data.item_username == data.username) {
    itemRef.off()
    commentRef.off()
    itemsRef.child(data.id).remove()
    commentsRef.child(data.id).remove()
    Actions.list()
  }
  return {
    type: REMOVE_ITEM
  }
}

export function addComment(data) {
  commentRef.child(data.id).set(data).then(function() {
    console.log('User Commented')
  }).catch(function(error) {
    console.log('- - - - - error')
    console.log(error)
    console.log('- - - - - error')
    alert("Something went wrong with your comment")
  })
  return {
    type: ADD_COMMENT
  }

}

export function commentAdded(item) {
  return {
    type: ITEM_CHANGED,
    item: item
  }
}
