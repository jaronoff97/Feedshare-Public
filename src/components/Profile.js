import React, { Component } from 'react'
import { Alert, Text, View, StatusBar, Image, Dimensions, ScrollView } from 'react-native'
import { Container, Content, Header, Footer, List, FooterTab, Title, Icon, Button } from 'native-base'
import Theme from '../themes/theme'
import { Actions } from 'react-native-router-flux'
import Item from './Item'

var s = require('../style/style')
var width = Dimensions.get('window').width

export default class Profile extends Component {
  onPressRight() {
    Actions.postview({
      postItem: this.props.addItem,
      user: this.props.user.email
    })
  }
  comingSoon() {
    Alert.alert(
      'Coming Soon!',
      "This feature is coming soon, however it's not quite ready for this version of FeedShare. 'Explore' will allow you to view a real-time map of all food locations in your area."
    )
  }
  renderRow(rowData) {
    return (
      <Item item={ rowData } user={ this.props.user }/>
    )
  }
  render() {
    let items = this.props.user_items
    return (
      <Container theme={ Theme } style={ { backgroundColor: '#f5f5f5' } }>
        <Header style={ { height: 80 } }>
          <Image style={ [s.headerImage, { width: width }] } source={ require('../img/header.png') }>
            <Button transparent>
              <Icon style={ { color: 'transparent' } } name='ios-arrow-back' />
            </Button>
            <View style={ { flexDirection: 'row' } }>
              <Button transparent>
                <Icon style={ [s.headerButtonFirst, { color: 'transparent' }] } name='ios-arrow-back' />
              </Button>
              <Text style={ [{ color: 'white', flex: 4 }, s.headerText] }>
                Profile
              </Text>
              <Button transparent>
                <Icon style={ [s.headerButtonLast, { color: 'transparent' }] } name='ios-arrow-back' />
              </Button>
            </View>
          </Image>
        </Header>
        <Content>
          <Image style={ [s.headerImage, { height: 180 }] } source={ require('../img/add-item-head.png') }>
            <Text style={ [s.addEventTitle, { alignSelf: 'center' }] }>
              { this.props.user.email.substring(0, this.props.user.email.indexOf('@')) }
            </Text>
          </Image>
          <List style={ { backgroundColor: '#f5f5f5' } } dataArray={ items } enableEmptySections={ false } renderRow={ this.renderRow.bind(this) } />
        </Content>
        <Footer style={ s.footer }>
          <FooterTab style={ { flex: 1 } }>
            <Button onPress={ Actions.list } style={ s.footerButton }>
              Home
              <Icon style={ { color: '#e63039' } } name='ios-pizza' />
            </Button>
            <Button onPress={ this.comingSoon.bind(this) } style={ [s.footerButton, { opacity: 0 }] }>
              Explore
              <Icon name='ios-compass' />
            </Button>
            <Button onPress={ this.onPressRight.bind(this) } style={ s.footerButton }>
              Add
              <Icon name='md-add-circle' />
            </Button>
            <Button active style={ [s.footerButton, s.footerActive] }>
              Profile
              <Icon name='ios-contact' />
            </Button>
            <Button onPress={ Actions.rootSettings } style={ s.footerButton }>
              Settings
              <Icon name='md-settings' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
