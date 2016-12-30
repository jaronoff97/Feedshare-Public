import React, { Component } from 'react'
import { Alert, NetInfo, StyleSheet, Text, TextInput, View, StatusBar, Image, Dimensions, ScrollView, Animated, Easing, TouchableOpacity } from 'react-native'
import { Container, Content, InputGroup, Input, List, Header, Footer, FooterTab, Title, Icon, Button } from 'native-base'
import Theme from '../themes/theme'
import { Actions } from 'react-native-router-flux'

var s = require('../style/style')
var width = Dimensions.get('window').width

export default class Settings extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
    }
    onPressPolicy() {
        Actions.policyview()
    }
    signOut() {
        this.props.signOut()
    }
    comingSoon() {
        Alert.alert(
            'Coming Soon!',
            "This feature is coming soon, it's not quite ready for this version of FeedShare. 'Explore' will allow you to view a real-time map of all food locations in your area."
        )
    }

    render() {
        return (
            <Container theme={Theme} style={{backgroundColor: '#f5f5f5'}}>
                <Header style={{height: 80}}>
                    <Image style={[s.headerImage,{width: width}]} source={require('../img/header.png')}>
                        <Button transparent>
                            <Icon style={{color: 'transparent'}} name='ios-arrow-back' />
                        </Button>
                        <View style={{flexDirection: 'row'}}>
                            <Button transparent>
                                <Icon style={[s.headerButtonFirst,{color: 'transparent'}]} name='ios-arrow-back' />
                            </Button>
                            <Text style={[{color: 'white',flex:4},s.headerText]}>
                                Settings
                            </Text>
                            <Button transparent>
                                <Icon style={[s.headerButtonLast,{color: 'transparent'}]} name='ios-arrow-back' />
                            </Button>
                        </View>
                    </Image>
                </Header>
                <Content style={{paddingHorizontal: 17, paddingTop: 17, backgroundColor: '#f5f5f5'}}>
                    <StatusBar barStyle="light-content" />
                    <View style={s.settingsDiv}>
                        <Text style={s.policySubTitle}>Important Information</Text>
                        <View style={[s.listCard,{backgroundColor: '#fff'}]}>
                            <TouchableOpacity onPress={Actions.policyview} style={s.fullscreenButton}>
                                <Text>Privacy Policy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Actions.termsview} style={s.fullscreenButton}>
                                <Text>Terms of Service</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={s.settingsDiv}>
                        <Text style={s.policySubTitle}>Personal Profile</Text>
                        <View style={[s.listCard,{backgroundColor: '#fff'}]}>
                            <TouchableOpacity onPress={this.signOut.bind(this)} style={[s.fullscreenButton,{flexDirection: 'row'}]}>
                                <Text style={{flex: 1}}>Sign Out</Text>
                                <Icon style={{fontSize: 16, flex: 0, justifyContent: 'flex-end'}} name='ios-log-out' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
                <Footer style={s.footer}>
                    <FooterTab style={{flex:1}}>
                        <Button onPress={Actions.list} style={s.footerButton}>
                            Home
                            <Icon style={{color: '#e63039'}} name='ios-pizza' />
                        </Button>
                        <Button onPress={this.comingSoon.bind(this)} style={s.footerButton}>
                            Explore
                            <Icon name='ios-compass' />
                        </Button>
                        <Button onPress={Actions.postview} style={s.footerButton}>
                            Add
                            <Icon name='md-add-circle' />
                        </Button>
                        <Button onPress={Actions.profileview} style={s.footerButton}>
                            Profile
                            <Icon name='ios-contact' />
                        </Button>
                        <Button active onPress={Actions.rootSettings} style={[s.footerButton,s.footerActive]}>
                            Settings
                            <Icon name='md-settings' />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}
