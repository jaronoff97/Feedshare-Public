import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
    NetInfo,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import { Container, Content, InputGroup, Input, List, Header } from 'native-base';

export default class SplashPage extends Component {
    componentWillMount () {

    }
    
    render () {
        return (
            <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
                <Text> Something </Text>
            </View>
        );
    }
}