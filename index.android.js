import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'
import { Provider, connect } from 'react-redux'
import configureStore from './src/store/configureStore'
import App from './src/containers/ConnectedApp'


const store = configureStore()


class Feedshare extends Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Feedshare', () => Feedshare)
