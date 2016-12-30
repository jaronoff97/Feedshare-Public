import React, { Component} from 'react'
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Button, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'
import { StyleSheet, Image, View, Dimensions, StatusBar, TextInput } from 'react-native'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var logow = (width*0.8);

export default class LandingScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
      };
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.authenticated){
            Actions.list()
        }
    }
    onLoginPress() {
        this.props.loginUser(this.state)
    }
    onSignupPress() {
        this.props.signupUser(this.state)
    }
    focusNextField = (nextField) => {
        this.refs[nextField].focus()
    }
    onGoogleLoginPress() {
        this.props.loginUserWithGoogle(this.state)
    }
    render() {
        return (
            <Image source={require('../img/onboard.png')} style={{height: height, width: width, flex: 1, resizeMode: 'contain'}} >
                <Container style={{marginTop: 65,width: width, justifyContent: 'center'}}>
                    <Content style={{flex: 1}} scrollEnabled={false}>
                        <View style={{width: width, height: 200, alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={require('../img/logo.png')} style={styles.canvas} />
                            <StatusBar barStyle="light-content" />
                        </View>
                        <List style={{width: width-20}}>
                            <ListItem>
                                <InputGroup>
                                    <Input ref="1" returnKeyType='done' blurOnSubmit={false} style={styles.placeHolding} placeholder='Email .edu domain only' placeholderTextColor='#eee' keyboardType="email-address" autoCapitalize={'none'} onChangeText={(email) => this.setState({email: email})} value={this.state.email}/>
                            </InputGroup>
                            </ListItem>
                            <ListItem>
                                <InputGroup>
                                    <Input ref="pass" returnKeyType='done' style={styles.placeHolding} placeholder='Password' placeholderTextColor='#eee' secureTextEntry={true} onChangeText={(password) => this.setState({password: password})} value={this.state.password}/>
                                </InputGroup>
                            </ListItem>
                        </List>
                        <View style={{flex: 1,flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
                            <Button rounded style={styles.signup} onPress={this.onSignupPress.bind(this)}> <Text style={{fontSize: 14,color:'#fff'}}>SIGN UP</Text> </Button>
                            <Button rounded style={styles.login} onPress={this.onLoginPress.bind(this)}> <Text style={{fontSize: 14,color:'#e63039'}}>LOGIN</Text> </Button>
                        </View>
                    </Content>
                </Container>
            </Image>
        );
    }
}
var styles = StyleSheet.create({
    login: {flex: 1, marginTop: 30, marginRight: 40, marginLeft: 5,backgroundColor: '#fff',},
    signup: {flex: 1, marginTop: 30, marginLeft: 40, marginRight: 5,backgroundColor: 'transparent', borderWidth: 1, borderColor: '#fff'},
    placeHolding: {color: 'white',marginTop: 30},
    canvas: {width: logow, height: 80}
})
