import React, { Component } from 'react'
import { AppState, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Scene, Router, ActionConst, Switch } from 'react-native-router-flux'
import { connect } from 'react-redux'
import ConnectedFeedshare from './Feedshare'
import ConnectedLoginSignup from './LoginSignUp'
import ConnectedDetailView from './ConnectedDetailView'
import NewItem from '../components/NewItem'
import ConnectedProfile from './ConnectedProfile'
import ConnectedSettings from './ConnectedSettings'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Terms from '../components/Terms'
import { bindActionCreators } from 'redux'
import FCM from 'react-native-fcm'
import * as mainRouterActions from '../actions/mainRouterActions'

var navBarImage = require('../img/greasy-fast-food.jpg')
var s = require('../style/style')

const RouterWithRedux = connect()(Router);
function mapStateToProps(state) {
  return {
    authenticated: state.main.authenticated
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(mainRouterActions, dispatch)
}
class CustomSwitch extends Component {
  constructor(props) {
    super(props);
    this.props.userLoggedIn()
  }
  render() {
    return (
      <Switch {...this.props}/>
    )
  }
}
const ConnectedSwitch = connect(mapStateToProps, mapDispatchToProps)(CustomSwitch)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    FCM.requestPermissions(); // for iOS
    FCM.getFCMToken().then(token => {
      console.log(token)
    // store fcm token in your server
    });
    this.notificationUnsubscribe = FCM.on('notification', (notif) => {
      // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
      if (notif.local_notification) {
        //this is a local notification
      }
      if (notif.opened_from_tray) {
        //app is open/resumed because user clicked banner
      }
    });
    this.refreshUnsubscribe = FCM.on('refreshToken', (token) => {
      console.log(token)
    // fcm token may not be available on first load, catch it here
    });
    FCM.subscribeToTopic('items');
    AppState.addEventListener('change', this.handleAppStateChange.bind(this))
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange.bind(this))
    this.refreshUnsubscribe()
    this.notificationUnsubscribe()
  }
  handleAppStateChange(appState) {
    if (appState === 'background') {
      console.log('app is in background now')
    }
  }

  render() {
    return (
      <RouterWithRedux>
        <Scene key="root" direction={ 'horizontal' } tabs={ true } component={ ConnectedSwitch } selector={ props => {
                                                                                                              return props.authenticated ? "mainview" : "landing"
                                                                                                            } }>
          <Scene key="landing" component={ ConnectedLoginSignup } hideNavBar={ true } titleStyle={ s.titleStyle } title="FeedShare" />
          <Scene key="mainview">
            <Scene key="list" initial={ true } hideNavBar={ true } component={ ConnectedFeedshare } direction={ 'horizontal' } type={ ActionConst.REPLACE }
              title="Feedshare" />
            <Scene key="itemview" component={ ConnectedDetailView } direction={ 'horizontal' } title="Feedshare" />
            <Scene key="postview" component={ NewItem } hideNavBar={ true } direction={ 'vertical' } title="Feedshare" />
            <Scene key="profileview" component={ ConnectedProfile } hideNavBar={ true } direction={ 'vertical' } title="Feedshare" type={ ActionConst.REPLACE } />
            <Scene key="rootSettings" title="Settings" type={ ActionConst.REPLACE }>
              <Scene key="settingsview" hideNavBar={ true } component={ ConnectedSettings } type={ ActionConst.REPLACE } />
              <Scene key="policyview" component={ PrivacyPolicy } hideNavBar={ true } title="Privacy Policy" />
              <Scene key="termsview" component={ Terms } hideNavBar={ true } title="Terms of Service" />
            </Scene>
          </Scene>
        </Scene>
      </RouterWithRedux>
      );
  }
}


export default App
