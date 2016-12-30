import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {ListView} from 'react-native';
import ItemDetailView from '../components/ItemDetailView'
import * as itemDetailActions from '../actions/itemDetailActions'

const commentSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id,
});

function mapStateToProps(state) {
	let commentDataSource = commentSource.cloneWithRows(state.item.comments)
  return {
    comments: commentDataSource,
    starCount: state.item.starCount,
    user: state.login.user,
    userDirection: state.item.direction
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(itemDetailActions, dispatch)
}

const ConnectedDetailView = connect(mapStateToProps, mapDispatchToProps)(ItemDetailView)

export default ConnectedDetailView
