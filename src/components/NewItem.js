import React, { Component } from 'react'
import { Container, Content, List, ListItem, InputGroup, Input, Button, Icon, Header } from 'native-base'
import { Actions, ActionConst } from 'react-native-router-flux'
import { StyleSheet, View, TouchableOpacity, Text, Image, Navigator } from 'react-native'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import DatePicker from 'react-native-datepicker'
import ImagePicker from 'react-native-image-picker'

var s = require('../style/style');

var moment = require('moment');

var options = {
    title: 'Select Avatar',
    customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class LandingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            category: "",
            title: "",
            date: null,
            avatarSource: null,
            videoSource: null,
            rm_number: "",
            initialPosition: ""
        };
    }

    getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords.longitude);
                console.log(position.coords.latitude);

                var lat = position.coords.latitude;
                var lon = position.coords.longitude;

                console.log("inside post api");
                fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lon)
                .then((response) => response.json())
                .then((responseData) => {
                    const rd = responseData.results[0];
                    var address = rd.formatted_address;
                    console.log(address);
                    this.setState({
                        initialPosition: address
                    });
                }).done();
                /*Geocoder.fallbackToGoogle("AIzaSyD2lyrpyc8B4XK_xOKx5pVOPVYExXUheZc");
                try {
                    const res = Geocoder.geocodePosition(loc);
                    console.log(res);
                }
                catch(err){
                    console.log(err)
                }*/

            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            allowsEditing: true,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                var source;

                // You can display the image using either:
                source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                //Or:
                /*if (Platform.OS === 'android') {
                    source = {uri: response.uri, isStatic: true};
                } else {
                    source = {uri: response.uri.replace('file://', ''), isStatic: true};
                }*/

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    onPressBack() {
        Actions.pop({ type: ActionConst.BACK_ACTION })
    }

    postEvent() {
        const itemData = {
            description: this.state.description,
            category: this.state.category,
            rm_number: this.state.rm_number,
            location: this.state.initialPosition,
            title: this.state.title,
            id: Math.random().toString(36).substring(7),
            time_posted: new Date().getTime()-1,
            username: this.props.user,
            starCount: 0,
            photograph: this.state.avatarSource
        }
        console.log(itemData)
        this.props.postItem(itemData)
        Actions.pop({ type: ActionConst.BACK_ACTION })
    }
    render() {
        return (
            <Container style={ { justifyContent: 'center' } }>
                <View style={ { flex: 1 } }>
                    <KeyboardAwareView animated={ true }>
                        <Header style={{height: 80}}>
                            <Image style={s.headerImage} source={require('../img/header.png')}>
                                <Button transparent>
                                    <Icon style={{color: 'transparent'}} name='ios-arrow-back' />
                                </Button>
                                <View style={{flexDirection: 'row'}}>
                                    <Button onPress={this.onPressBack.bind(this)} transparent style={s.headerButtonFirst}>
                                        <Icon style={{color: 'white'}} name='md-close' />
                                    </Button>
                                </View>
                            </Image>
                        </Header>
                        <Content style={ { padding: 20, flex: 1, backgroundColor: '#f5f5f5' } } scrollEnabled={ true }>
                            <Image style={[s.headerImage,{height: 180,marginLeft:-20}]} source={require('../img/add-item-head.png')}>
                                <Text style={s.addEventTitle}>Add New Food</Text>
                                <Text style={s.addEventPara}>Share your free food across campus with just a bit of information below.</Text>
                            </Image>
                            <List style={[s.cardInput,{marginTop:20}]}>
                                <ListItem style={{height: 60}}>
                                    <InputGroup style={s.removeBotBorder}>
                                        <Input placeholder='Title' placeholderTextColor='#bebebe' autoCapitalize='words' returnKeyType='done' onChangeText={ (title) => this.setState({
                                                title: title
                                            }) } value={ this.state.title } />
                                        </InputGroup>
                                    </ListItem>
                                </List>
                                <List style={s.cardInput}>
                                    <ListItem style={{height: 60}}>
                                        <InputGroup style={s.removeBotBorder}>
                                            <Input placeholder='Room Number (i.e. 201 Ell Hall)' placeholderTextColor='#bebebe' returnKeyType='done' onChangeText={ (rm_number) => this.setState({
                                                    rm_number: rm_number
                                                }) } value={ this.state.rm_number } />
                                            </InputGroup>
                                        </ListItem>
                                    </List>
                                <List style={[s.cardInput,{flexDirection: 'row'}]}>
                                    <ListItem style={{flex: 1, alignSelf: 'center', height: 60}}>
                                        <InputGroup style={s.removeBotBorder}>
                                            <Input placeholder='Location' placeholderTextColor='#bebebe' returnKeyType='done' onChangeText={ (location) => this.setState({
                                                    initialPosition: location
                                                }) } value={ this.state.initialPosition } />
                                            </InputGroup>
                                        </ListItem>
                                        <Button transparent onPress={ this.getCurrentLocation.bind(this) } style={{height: 60, width: 60, borderRadius: 0, backgroundColor: '#e63039', flex: 0, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                            <Icon style={{color: '#fff', alignSelf: 'center'}} name='md-locate' />
                                        </Button>
                                    </List>
                                    <List style={s.cardInput}>
                                        <ListItem style={{height: 60}}>
                                            <InputGroup style={s.removeBotBorder}>
                                                <Input placeholder='Type of Food' placeholderTextColor='#bebebe' returnKeyType='done' onChangeText={ (category) => this.setState({
                                                        category: category
                                                    }) } value={ this.state.category } />
                                                </InputGroup>
                                            </ListItem>
                                        </List>
                                        <List style={s.cardInput}>
                                            <ListItem style={{height:60}}>
                                                <InputGroup style={s.removeBotBorder}>
                                                    <Input placeholder='Description' placeholderTextColor='#bebebe' returnKeyType='done' onChangeText={ (description) => this.setState({
                                                            description: description
                                                        }) } value={ this.state.description } />
                                                    </InputGroup>
                                                </ListItem>
                                            </List>
                                            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                                                <View style={{marginBottom: 20}}>
                                                    { this.state.avatarSource === null ? <View style={{backgroundColor: '#e63039', height: 150, alignItems: 'center', justifyContent: 'center'}}><Text style={{color: 'white',textAlign: 'center',fontSize: 20}}>Add a Photo</Text><View><Icon style={{color: '#fff', alignSelf: 'center'}} name='md-camera' /></View></View> :
                                                        <Image style={{width:150,height:150,backgroundColor: 'red'}} source={this.state.avatarSource} />
                                                    }
                                                </View>
                                            </TouchableOpacity>
                                            <View style={ { flexDirection: 'row' } }>
                                                <Button rounded block style={ styles.login } onPress={ this.postEvent.bind(this) }> Post </Button>
                                            </View>
                                            <View style={{paddingTop: 30}}>
                                                <Text style={{fontFamily: 'AvenirLTStd-Book',fontSize:13,lineHeight: 16,color:'#aaa'}}>Make smart posts. FeedShare will automatically ban users who are found in violation of our terms of service.</Text>
                                            </View>
                                        </Content>
                                    </KeyboardAwareView>
                                </View>
                            </Container>
                        );
                    }
                }
                var styles = StyleSheet.create({
                    login: {
                        flex: 1,
                        marginTop: 30,
                        marginLeft: 5,
                        marginRight: 5,
                        backgroundColor: '#e63039'
                    }
                })
