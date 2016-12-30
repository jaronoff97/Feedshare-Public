import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import * as ItemsActions from '../actions/items'

function mapStateToProps(state) {
  return {
    user: state.login.user,
    user_items: state.items.get('onlineList').filter((e)=>(e.username == state.login.user.email))
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemsActions, dispatch)
}

const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ConnectedProfile
