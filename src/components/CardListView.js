import React, { Component } from 'react'
import { Alert, NetInfo, StyleSheet, Text, TextInput, View, StatusBar, Image, Dimensions, ScrollView, Animated, Easing } from 'react-native'
import { Container, Content, InputGroup, Input, List, Header, Footer, FooterTab, Title, Icon, Button } from 'native-base'
import Item from './Item'
import Theme from '../themes/theme'
import { Actions } from 'react-native-router-flux'
import ActionButton from 'react-native-action-button'

var s = require('../style/style')
var width = Dimensions.get('window').width

export default class CardListView extends Component {

    constructor(props) {
        super(props),
        this.addRotate = new Animated.Value(0),
        this.state = {
            filter_text: '',
        }
    }
    componentWillMount() {
        this.props.getInitialState({
            addItem: this.props.addItem,
            removeItem: this.props.removeItem,
            goOnline: this.props.goOnline,
            goOffline: this.props.goOffline,
            itemChanged: this.props.itemChanged
        })
        if (NetInfo) {
            NetInfo.isConnected.fetch().done(isConnected => {
                if (isConnected) {
                    this.props.checkConnection()
                } else {
                    this.props.checkConnection()
                }
            })
        }
    }

    renderRow(rowData) {
        return (
            <Item item={ rowData } likePostEvent={this.props.likePostEvent} user={ this.props.user } removable={ this.props.connected } />
        )
    }
    onPressMenu() {
        this.props.signOut({
            user: this.props.user
        })
    }
    onPressRight() {
        Actions.postview({
            postItem: this.props.addItem,
            user: this.props.user.email
        })
    }
    onPressSettings() {
        Actions.rootSettings()
    }
    profileView() {
        Actions.profileview({
            user: this.props.user.email
        })
    }
    handleFilter(filter_text) {
        this.props.filterItems(filter_text)
        this.setState({filter_text: filter_text})
    }
    componentWillReceiveProps(nextProps) {
        console.log('New props received')
    }
    comingSoon() {
        Alert.alert(
            'Coming Soon!',
            "This feature is coming soon, however it's not quite ready for this version of FeedShare. 'Explore' will allow you to view a real-time map of all food locations in your area."
        )
    }
    filterComingSoon() {
        Alert.alert(
            'Coming Soon!',
            "This feature is coming soon, however it's not quite ready for this version of FeedShare. 'Filter' will allow you to tailor the FeedShare food view to your liking, down to the toppings on your pizza."
        )
    }
    render() {

        var animateRotate = this.addRotate.interpolate({inputRange: [0, 1],outputRange: ['0deg', '45deg']})

        let items
        if (this.props.connected && this.state.filter_text == "") {
            items = this.props.onlineItems
        } else if (this.props.connected && this.state.filter_text != "") {
            items = this.props.filteredItems
        } else if (this.props.connectionChecked) {
            items = this.props.offlineItems
        } else {
            items = []
        }
        console.log('rerender')
        return (
            <Container theme={Theme} style={{backgroundColor: '#f5f5f5'}}>
                <Header style={{height: 80}}>
                    <Image style={[s.headerImage,{width: width}]} source={require('../img/header.png')}>
                        <Button transparent>
                            <Icon style={{color: 'transparent'}} name='ios-arrow-back' />
                        </Button>
                        <View style={{flexDirection: 'row'}}>
                            <Button transparent style={s.headerButtonFirst} onPress={this.onPressRight.bind(this)}>
                                <Icon style={{ color: 'white', fontSize: 20 }} name='md-camera' />
                            </Button>
                            <Text style={[{color: 'white',flex:4},s.headerText]}>
                                FeedShare
                            </Text>
                            <Button transparent style={s.headerButtonLast}>
                                <Icon style={{ color: 'transparent', fontSize: 20 }} name='ios-search' />
                            </Button>
                        </View>
                    </Image>
                </Header>
                <Content style={{flex: 1}}>
                    <StatusBar barStyle="light-content" />
                    <View style={ s.searchBar }>
                        <Icon style={ { fontSize: 14, color: '#929292', flex: 0 } } name='ios-search' />
                        <InputGroup style={ { flex: 1, borderBottomWidth: 0 } }>
                            <Input style={ { fontSize: 12 } } placeholder="Search for Deliciousness" placeholderTextColor="#ccc" onChangeText={(filter_text) => this.handleFilter(filter_text)} value={ this.state.filter_text }/>
                        </InputGroup>
                        <Button transparent>
                            <Icon onPress={this.filterComingSoon.bind(this)} style={ { fontSize: 16, color: '#727272', flex: 0 } } name='ios-options' />
                        </Button>
                    </View>
                    <List style={ { backgroundColor: '#f5f5f5' } } dataArray={ items } enableEmptySections={ false } renderRow={ this.renderRow.bind(this) } />
                </Content>
                <Footer style={s.footer}>
                    <FooterTab style={{flex:1}}>
                        <Button active style={[s.footerButton,s.footerActive]}>
                            Home
                            <Icon style={{color: '#e63039'}} name='ios-pizza' />
                        </Button>
                        <Button onPress={this.comingSoon.bind(this)} style={[s.footerButton,{opacity:0}]}>
                            Explore
                            <Icon name='ios-compass' />
                        </Button>
                        <Button onPress={this.onPressRight.bind(this)}>
                            Add
                            <Icon name='md-add-circle' />
                        </Button>
                        <Button onPress={this.profileView.bind(this)} style={s.footerButton}>
                            Profile
                            <Icon name='ios-contact' />
                        </Button>
                        <Button onPress={Actions.rootSettings} style={s.footerButton}>
                            Settings
                            <Icon name='md-settings' />
                        </Button>
                    </FooterTab>
                </Footer>
                <ActionButton style={{flex: 0}} buttonColor='#e63039'>
                    <ActionButton.Item buttonColor='#9b59b6' title="New Post" onPress={this.onPressRight.bind(this)}>
                        <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    offline: {
        backgroundColor: '#000000',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white'
    }
})
