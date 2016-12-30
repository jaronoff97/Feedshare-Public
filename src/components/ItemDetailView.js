import React, { Component } from 'react'
import { Container, Header, Content, Button, Card, CardItem, Text, Icon, Input, InputGroup, List } from 'native-base'
import { Actions, ActionConst } from 'react-native-router-flux'
import { View, StyleSheet, ScrollView, ListView, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'

var s = require('../style/style');
var moment = require('moment');

export default class ItemDetailView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _comment: '',
            upDirect: 0.3,
            downDirect: 0.3
        }
        this.props.subscribeToPost({
            itemid: this.props.item.id,
            changePostVotes: this.props.changePostVotes,
            commentAdded: this.props.commentAdded,
            user: this.props.user
        })
    }
    componentWillMount() {
    }
    componentWillReceiveProps(nextProps) {
        console.log("new props")
        const opac = 0.3
        if (nextProps.userDirection == "up") {
            this.setState({
                upDirect: 1,
                downDirect: opac
            })
        } else if (nextProps.userDirection == "down") {
            this.setState({
                upDirect: opac,
                downDirect: 1
            })
        } else {
            this.setState({
                upDirect: opac,
                downDirect: opac
            })
        }
    }
    changeStatus(direction) {
        this.props.likePostEvent({
            user: this.props.user,
            post_id: this.props.item.id,
            direction: direction
        })
    }
    componentWillUnmount() {
        console.log('UNMOUNTING')
        this.props.unsubscribeFromPost()
    }
    componentWillUpdate() {
        console.log('updating')
    }
    newComment() {
        const comment = {
            itemid: this.props.item.id,
            comment_text: this.state._comment,
            id: Math.random().toString(36).substring(7),
            time_posted: new Date().getTime(),
            username: this.props.user.email
        }
        this.props.addComment(comment)
        this.setState({
            _comment: ''
        })
    }
    onPressBack() {
        Actions.pop({ type: ActionConst.BACK_ACTION })
    }

    onDeleteButtonAction() {
        const data = {
            id: this.props.item.id,
            username: this.props.user.email,
            item_username: this.props.item.username
        }
        this.props.removeItem(data)
    }

    renderRow(rowData) {
        return (
            <Card style={s.listCard}>
                <CardItem style={{padding: 20}}>
                    <View style={ { flexDirection: 'column', justifyContent: 'space-between' } }>
                        <Text>
                            { rowData.comment_text }
                        </Text>
                        <Text style={s.commentText}>
                            { rowData.username.substring(0, rowData.username.indexOf('@')) }
                        </Text>
                        <Text style={s.commentText}>
                            <Icon style={s.commentText} name='md-time' /> Posted {moment(rowData.time_posted).fromNow()}
                        </Text>
                    </View>
                </CardItem>
            </Card>
        )
    }



    render() {
        let items = this.props.comments

        return (
            <Container>
                <View style={ { flex: 1 } }>
                    <KeyboardAwareView animated={ true }>
                        <Header style={{height: 80}}>
                            <Image style={s.headerImage} source={require('../img/header.png')}>
                                <Button transparent>
                                    <Icon style={{color: 'transparent'}} name='ios-arrow-back' />
                                </Button>
                                <View style={{flexDirection: 'row'}}>
                                    <Button onPress={this.onPressBack.bind(this)} transparent style={s.headerButtonFirst}>
                                        <Icon style={{color: 'white'}} name='ios-arrow-back' />
                                    </Button>
                                </View>
                            </Image>
                        </Header>
                        <Content style={{backgroundColor: '#f5f5f5'}}>
                            <View overflow='hidden' style={{flex: 0, overflow: 'hidden'}}>
                                <Image source={this.props.item.photograph} resizeMode='cover' style={{height: 200,backgroundColor: 'blue'}}/>
                            </View>
                            <View>
                                <Card style={[{marginHorizontal: 20, marginTop: -20, padding: 10},s.listCard]}>
                                    <CardItem style={{flexDirection: 'row', borderBottomWidth: 0}}>
                                        <View style={{flex: 1}}>
                                            <Text style={s.cardTitle}>
                                                { this.props.item.title }
                                            </Text>
                                            <Text style={[s.cardText, {paddingBottom: 4}]}>
                                                <Icon style={s.cardIcon} name='ios-home' /> {this.props.item.rm_number}
                                            </Text>
                                            <Text style={[s.cardText, {paddingBottom: 4}]}>
                                                <Icon style={s.cardIcon} name='ios-pin' /> {this.props.item.location}
                                            </Text>
                                            <Text style={{fontFamily: 'AvenirLTStd-Light', color: '#e63039', paddingVertical: 4, fontSize: 14}}>
                                                <Icon style={s.cardIcon} name='md-time' /> Posted {moment(this.props.item.time_posted).fromNow()}
                                            </Text>
                                        </View>
                                        <View style={{flex:0,justifyContent:'center', alignItems: 'center'}}>
                                            <TouchableOpacity style={ [styles.side_button, {opacity: this.state.upDirect } ] } onPress={ this.changeStatus.bind(this, "up") }>
                                                <Image source={require('../img/up-arrow.png')} style={s.upDownArrow} />
                                            </TouchableOpacity>
                                            <Text>
                                                { this.props.starCount }
                                            </Text>
                                            <TouchableOpacity style={ [styles.side_button, {opacity: this.state.downDirect }] } onPress={ this.changeStatus.bind(this, "down") }>
                                                <Image source={require('../img/up-arrow.png')} style={[s.upDownArrow,{transform: [{rotate: '180deg'}]}]} />
                                            </TouchableOpacity>
                                        </View>
                                    </CardItem>
                                    <CardItem cardBody style={ styles.card_body }>
                                        <Text>
                                            { this.props.item.description }
                                        </Text>
                                        <TouchableOpacity onPress={ this.onDeleteButtonAction.bind(this) }>
                                            <Icon name='md-trash'/>
                                        </TouchableOpacity>
                                    </CardItem>
                                </Card>
                            </View>
                            <Card style={{marginHorizontal: 20,marginTop: 20}}>
                                <Text style={[{padding: 20,borderBottomWidth:1,borderColor:'#384850'},s.cardTitle]}>
                                    Comments
                                </Text>
                                <ListView dataSource={items} enableEmptySections={true} renderRow={(rowData) => this.renderRow(rowData)} />
                            </Card>
                        </Content>
                        <View style={ [s.listCard,{ flex: 0, flexDirection: 'row',shadowOffset: {height: -1, width: 0}}] }>
                            <InputGroup style={ { flex: 1, height: 60 } }>
                                <Input placeholder='Comment. Be Nice.' maxLength={140} onChangeText={ (comment) => this.setState({
                                        _comment: comment
                                    }) } value={ this.state._comment } />
                                </InputGroup>
                                <Button style={{height: 60, borderRadius: 0, backgroundColor: '#e63039'}} onPress={ this.newComment.bind(this) }>
                                    <Text style={ { color: '#FFFFFF' } }> Send </Text>
                                </Button>
                            </View>
                        </KeyboardAwareView>
                    </View>
                </Container>
            )
        }
    }
    var styles = StyleSheet.create({
        card_body: {
            flexDirection: 'row',
            borderBottomWidth: 0
        },
        side_button: {
            margin: 5
        }
    });
