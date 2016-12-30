import React, { Component } from 'react'
import { Animated, PanResponder, View, Image, TouchableOpacity  } from 'react-native'
import { Card, CardItem, Text, ListItem, Icon, Button } from 'native-base'
import { Actions } from 'react-native-router-flux'
var s = require('../style/style')
var moment = require('moment');


export default class Item extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {}
  pushDetailView() {
    console.log('SHOULD SEGUE')
    Actions.itemview({
      item: this.props.item
    })
  }
    render() {
        return (
            <ListItem style={s.listItem} onPress={ () => {console.log('pressed'); this.pushDetailView.bind(this)}} >
                <Card style={s.listCard}>
                    <CardItem onPress={this.pushDetailView.bind(this)} header style={{padding: 0}}>
                        <View overflow='hidden' style={s.cardImageView}>
                            <Image source={this.props.item.photograph} resizeMode='cover' style={s.cardImage}/>
                        </View>
                    </CardItem>
                    <CardItem onPress={this.pushDetailView.bind(this)} button style={{flexDirection: 'row',borderBottomWidth: 0}}>
                        <View style={{paddingLeft: 10, flex: 3, justifyContent:'flex-end'}}>
                            <View style={{overflow: 'visible', paddingVertical: 10}}>
                                <Text style={s.cardTitle}>{this.props.item.title}</Text>
                            </View>
                            <Text style={[s.cardText, {paddingBottom: 4}]}>
                                <Icon style={s.cardIcon} name='ios-pin' /> {this.props.item.rm_number}, {this.props.item.location}
                            </Text>
                            <Text style={{fontFamily: 'AvenirLTStd-Light', color: '#e63039', paddingVertical: 4, fontSize: 14}}>
                                <Icon style={s.cardIcon} name='md-time' /> Posted {moment(this.props.item.time_posted).fromNow()}
                            </Text>
                        </View>
                    </CardItem>
                </Card>
            </ListItem>
        )
    }
}
