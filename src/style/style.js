'use strict';

import React, { Component } from 'react'
import { StyleSheet, Dimensions, Platform } from 'react-native'

var width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    headerMain: {
        padding: 20
    },
    mainFont: {
        color: '#fff'
    },
    cardTitle: {
        fontFamily: 'AvenirLTStd-Roman',
        color: '#323232',
        fontSize: 24,
        lineHeight: 24
    },
    cardText: {
        fontFamily: 'AvenirLTStd-Light',
        color: '#585858',
        fontSize: 14,
    },
    oneThird: {
        flex: 1,
        justifyContent: 'center'
    },
    twoThird: {
        flex: 2
    },
    cardInput: {
        backgroundColor: 'white',
        marginBottom: 20
    },
    removeBotBorder: {
        borderBottomWidth: 0,
        borderWidth: 0
    },
    postButton: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        width: 60,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fixedButton: {
        position: 'absolute',
        borderRadius: 25,
        width: 50,
        height: 50,
        bottom: 10,
        right: 10,
        marginTop: -50,
        backgroundColor: 'red'
    },
    fixedButtonText: {
        color: 'white',
        fontSize: 24
    },
    navBar: {
        backgroundColor: '#cf4f4f',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0
    },
    titleStyle: {
        fontFamily: 'AvenirLTStd-Book'
    },
    headerImage: {
        marginTop: -20,
        height: 100,
        width: width,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        alignItems:'flex-start',
        marginLeft: (Platform.OS === 'ios' ) ? 0 : -30
    },
    headerButtonFirst: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        flex: 0,
        marginHorizontal: 20
    },
    headerButtonLast: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        flex: 0,
        marginHorizontal: 20
    },
    headerText: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 16
    },
    headerButtonText: {
        color: '#e63039',
        height: 18,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 12
    },
    addEventTitle: {
        backgroundColor: 'transparent',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 28,
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
        color: 'white',
        marginLeft: 20,
        paddingTop: 80,
        paddingBottom: 4
    },
    addEventPara: {
        backgroundColor: 'transparent',
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 16,
        lineHeight: 16,
        color: 'white',
        marginHorizontal: 20,
        marginBottom: 20
    },
    listItem: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        margin: 17,
        marginBottom: 5,
        marginLeft: 17,
        padding: 0,
        borderBottomWidth: 0
    },
    listCard: {
        borderWidth: 0,
        borderRadius: 0,
        flex: 0,
        shadowColor: 'black',
        shadowOffset: {height: 1,width: 1},
        shadowRadius: 2,
        shadowOpacity: 0.1
    },
    cardImageView: {
        flex: 1,
        backgroundColor: 'red',
        height: 200
    },
    cardImage: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 200
    },
    cardIcon: {
         color: '#e63039',
         fontSize: 14
    },
    upDownArrow: {
        margin: 10,
        width: 24,
        height: 14
    },
    detailViewCard: {
        backgroundColor: 'white',
        marginTop: -20,
        marginHorizontal: 20
    },
    footerButton: {
        backgroundColor: 'white',
        opacity: 0.3
    },
    footerActive: {
        opacity: 1
    },
    commentText: {
        color: '#aaa',
        fontSize: 14
    },
    searchBar: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 4,
        borderColor: "#e3e3e3"
    },
    fullscreenButton: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    policyTitle: {
        fontSize: 24,
        fontFamily: 'AvenirLTStd-Roman',
        paddingVertical: 6,
        color: 'black',
        fontWeight: 'bold'
    },
    policySubTitle: {
        fontSize: 18,
        fontFamily: 'AvenirLTStd-Book',
        paddingTop: 8,
        paddingBottom: 6,
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'space-between'
    },
    policyText: {
        color: '#444',
        paddingVertical: 3
    },
    footer: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: {height: -1,width: 1},
        shadowRadius: 2,
        shadowOpacity: 0.1
    },
    settingsDiv: {
        backgroundColor:'#f5f5f5',
        paddingBottom: 16
    }
})
