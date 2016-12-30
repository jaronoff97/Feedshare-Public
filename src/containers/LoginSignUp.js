import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LandingScreen from '../components/LandingScreen'
import * as LoginActions from '../actions/loginActions'

function mapStateToProps(state) {
  return {
    authenticated: state.login.authenticated,
    logged_in: state.login.logged_in
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch)
}

const ConnectedLoginSignUp = connect(mapStateToProps, mapDispatchToProps)(LandingScreen)

export default ConnectedLoginSignUp

