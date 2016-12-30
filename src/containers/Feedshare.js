import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardListView from '../components/CardListView'
import * as ItemsActions from '../actions/items'

function mapStateToProps(state) {
  return {
    onlineItems: state.items.get('onlineList'),
    offlineItems: state.items.get('offlineList'),
    filteredItems: state.items.get('filteredItems'),
    connectionChecked: state.items.get('connectionChecked'),
    connected: state.items.get('connected'),
    user: state.login.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemsActions, dispatch)
}

const ConnectedFeedshare = connect(mapStateToProps, mapDispatchToProps)(CardListView)

export default ConnectedFeedshare
