import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Settings from '../components/Settings'
import * as ItemsActions from '../actions/items'

function mapStateToProps(state) {
  return {
    user: state.login.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemsActions, dispatch)
}

const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(Settings)

export default ConnectedSettings
