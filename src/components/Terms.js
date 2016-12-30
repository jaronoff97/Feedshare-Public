import React, { Component } from 'react'
import { NetInfo, StyleSheet, Text, TextInput, View, StatusBar, Image, Dimensions, ScrollView, Animated, Easing, TouchableOpacity } from 'react-native'
import { Container, Content, InputGroup, Input, List, Header, Footer, FooterTab, Title, Icon, Button } from 'native-base'
import Theme from '../themes/theme'
import { Actions, ActionConst } from 'react-native-router-flux'

var s = require('../style/style')
var width = Dimensions.get('window').width

export default class PrivacyPolicy extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
    }
    onPressBack() {
        Actions.pop({ type: ActionConst.BACK_ACTION })
    }
    render() {
        return (
            <Container>
                <Header style={{height: 80}}>
                    <Image style={[s.headerImage,{width: width}]} source={require('../img/header.png')}>
                        <Button transparent>
                            <Icon style={{color: 'transparent'}} name='ios-arrow-back' />
                        </Button>
                        <View style={{flexDirection: 'row'}}>
                            <Button onPress={this.onPressBack.bind(this)} transparent style={s.headerButtonFirst}>
                                <Icon style={{color: 'white'}} name='ios-arrow-back' />
                            </Button>
                            <Text style={[{color: 'white',flex:4},s.headerText]}>
                                Terms of Service
                            </Text>
                            <Button transparent>
                                <Icon style={[s.headerButtonLast,{color: 'transparent'}]} name='ios-arrow-back' />
                            </Button>
                        </View>
                    </Image>
                </Header>
                <Content style={{paddingHorizontal: 17, paddingTop: 17, backgroundColor: '#f5f5f5'}}>
                    <View style={[s.listCard,{backgroundColor: 'white', padding: 17}]}>
                        <Text style={s.policyTitle}>FeedShare Terms of Service</Text>
                        <Text style={s.policyText}>This privacy policy governs your use of the software application FeedShare (“Application”) for mobile devices that was created by Stwest Team. The Application lets users find free food on college campus. Users receive push notifications whenever users post events with free food on to the app.</Text>
                        <Text style={s.policyText}>These FeedShare Terms of Service (the “Terms”) are a legal contract between you and FeedShare, Inc. (“FeedShare”, “we” or “us”). These Terms explain how you are permitted to use the FeedShare mobile application and services, as well as the FeedShare website located at http://feedshare.org (the “Site”) and any content therein (collectively, the “Services”). Unless otherwise specified, all references to the Services include the services available through the FeedShare mobile application (the “App”) and the Site, as well as any software that FeedShare provides to you that allows you to access the Services from a mobile device and any other Materials (as defined below). By using the Services, you are agreeing to all of the Terms; if you do not agree with any of these Terms, do not access or otherwise use the Services.</Text>
                        <Text style={s.policySubTitle}>Changes</Text>
                        <Text style={s.policyText}>FeedShare may make changes to the Services at any time. FeedShare can change, update, or add or remove provisions of these Terms at any time by posting the updated Terms on the App or the Site, by posting a notice on the Services or by notifying you via the App. By using the Services after FeedShare has updated the Terms, you are agreeing to all the updated Terms; if you do not agree with any of the updated Terms, you must stop using Services.</Text>
                        <Text style={s.policySubTitle}>General Use</Text>
                        <Text style={s.policyText}>The Services may not be available in all locations, and we reserve the right to block access to the Services based on device geolocation information. We may add or remove the areas in which Services are available at any time, without notice.</Text>
                        <Text style={s.policyText}>We may, in our sole discretion, refuse to offer the Services to any person or entity. We may, without notice and in our sole discretion, terminate your right to use the Services, or any portion thereof, and block or prevent your future access to and use of the Services.</Text>
                        <Text style={s.policySubTitle}>Services</Text>
                        <Text style={s.policyText}>You may use the App for one registered account on one mobile device owned or leased solely by you. You may not: (i) modify, disassemble, decompile, or reverse engineer the App, except to the extent that such restriction is expressly prohibited by law; (ii) rent, lease, loan, resell, sublicense, distribute, or otherwise transfer the App to any third-party; (iii) make any copies of the app; or (iv) remove, circumvent, disable, damage, or otherwise interfere with security-related features of the App, features that prevent or restrict the use or copying of any content accessible through the App, or features that enforce limitations on use of the app. You acknowledge that FeedShare may from time to time issue upgraded versions of the App, and may automatically upgrade the version of the app that you are using on your mobile device. </Text>
                        <Text style={s.policySubTitle}>Privacy</Text>
                        <Text style={s.policyText}>Please review the FeedShare privacy policy which explains how we use and disclose information that we collect from and about you. By using our services, you agree that we may use and disclose information we collect from and about you as stated in the Privacy Policy. Without limiting the foregoing, you expressly acknowledge that any Submissions (defined below) or other information you submit to the Services may be viewable by all other users of the Services and any third party.</Text>
                        <Text style={s.policySubTitle}>Submissions</Text>
                        <Text style={s.policyText}>You are responsible for any information, profiles, statuses, opinions, messages, comments, photos, graphics, and other content or material that you submit, upload, post, or otherwise make available on, through or in connection with the Services (each a “Submission”). When you provide Submissions you agree that those Submissions shall not be in violation of the “Unauthorized Activities” section below. Although FeedShare may, in its sole discretion, monitor, screen, modify, refuse, remove, or edit Submissions for any reason, FeedShare is not obligated to do so. You have full responsibility for each Submission you make, including its legality, reliability, and appropriateness and will be solely liable for any damage or harm resulting from your Submissions.</Text>
                        <Text style={s.policyText}>We may retain your Submissions, even after they have expired from view within the Services or even after you have deleted them. Unless otherwise explicitly stated herein or in the Privacy Policy, you agree that any Submission provided by you in connection with the Services is provided on a non-proprietary and non-confidential basis. You hereby grant to FeedShare a non-exclusive, perpetual, irrevocable, royalty-free, fully paid-up, worldwide license (including the right to sublicense through multiple tiers) to use, reproduce, process, adapt, publicly perform, publicly display, modify, prepare derivative works, publish, transmit and distribute each of your Submissions, or any portion thereof, in any form, medium or distribution method now known or hereafter existing, known or developed, and authorize others to do the same (“Submission License”). Without limiting the foregoing, you agree that the Submission License gives FeedShare the right to sublicense Submissions to third parties in connection with the syndication, broadcast, distribution, promotion, or publication of Submissions in any and all media or distribution methods, now known or later developed. No use of Submissions in accordance with the Submission License shall entitle you to any compensation from FeedShare, or any third party. You agree to pay for all royalties, fees, damages and any other monies owing any person by reason of any Submissions posted by you to or through the Services.</Text>
                        <Text style={s.policySubTitle}>Unauthorized Activities</Text>
                        <Text style={s.policyText}>When using the Services, you agree not to:
                        -	Create a handle for the purpose of preventing others from using that account.
                        -	Sell or buy accounts.
                        -	Impersonate another person in a manner that is intended to or does mislead, confuse or deceive others.
                        -	Post or share another individual’s private information without their express authorization and permission.
                        -	Defame, abuse, bully, harass, stalk, threaten, or otherwise violate the legal rights of others.
                        -	Use racially or ethnically offensive language.
                        -	Discuss or incite illegal activity.
                        -	Post or share Submissions that contain pornography or graphic violence.
                        -	Post or share anything that exploits children or minors or that depicts cruelty to animals.
                        -	Post or share Submissions that violate any third party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity or any other intellectual property or proprietary right.
                        -	Disseminate any unsolicited or unauthorized advertising, promotional materials, 'junk mail', 'spam', 'chain letters', 'pyramid schemes', or any other form of such solicitation.
                        -	Use any robot, spider, crawler, scraper or other automated means to access the Services.
                        -	Take any action that imposes an unreasonable or disproportionately large load on our infrastructure.
                        -	Use or develop any third party applications that interact with the Services or Submissions without our prior written consent.
                        -	Alter the opinions or comments posted by others on the Services.
                        -	Post or share any image or language that is obscene, vulgar or offensive or that threatens, disparages or demeans any individual or group.
                        -	Attempt to circumvent any of our content-filtering techniques.
                        -	Post or share anything inappropriate or disruptive to the Services.
                        -	Disrupt, negatively affect or inhibit users from having a positive experience with the Services.
                        -	Use the Services in violation of these Terms and/or for any unlawful purposes.
                        -	Post or share anything contrary to our public image, goodwill or reputation.</Text>
                        <Text style={s.policyText}>This list of prohibitions provides examples and is not exhaustive or exclusive. FeedShare reserves the right to (a) suspend or terminate access to your account and your ability to post to the Services (or otherwise use the Services), (b) delete, remove or refuse to distribute any Submissions and/or (c) reclaim handles, all with or without cause and with or without notice, for any reason or no reason without liability to you. If FeedShare believes a Submission violates these Terms, it may make that Submission invisible to other users without notifying you. Your Submission will be visible to you, but will not appear for any other user. FeedShare may report to law enforcement authorities any actions that may be illegal, and any reports it receives of such conduct.  When legally required or at FeedShare’s discretion, FeedShare will cooperate with law enforcement agencies in any investigation of alleged illegal activity on the Services or on the Internet.</Text>
                        <Text style={s.policySubTitle}>Disclaimer of Warranties</Text>
                        <Text style={s.policyText}>Your use of the Services is at your own risk. The Materials may not have been verified or authenticated in whole or in part by FeedShare, and they may include inaccuracies or typographical or other errors. FeedShare does not warrant the accuracy of timeliness of the Materials contained on the Services. FeedShare has no liability for any loss of, or errors or omissions in Submissions, or for any errors or omissions in the Materials or any other portion of the Services, whether provided by FeedShare, our licensors or suppliers or other users.</Text>
                        <Text style={s.policySubTitle}>Feedback</Text>
                        <Text style={s.policyText}>If you send or transmit any communications, comments, questions, suggestions, or related materials regarding FeedShare or the Services, whether by email otherwise (collectively, “Feedback”), such Feedback is, and will be treated as, non-confidential and non-proprietary. You hereby assign all right, title, and interest in, and FeedShare is free to use, without any attribution or compensation to you, any and all Feedback for any purpose whatsoever. You understand and agree that FeedShare is not obligated to use, display, reproduce, or distribute any such ideas, know-how, concepts, or techniques contained in the Feedback, and you have no right to compel such use, display, reproduction, or distribution.</Text>
                        <Text style={s.policySubTitle}>Contact Us</Text>
                        <Text style={s.policyText}>For all feedback including but not limited to bugs, errors, broken views, incorrect post operations, or items that do not load properly, submit a report with a screenshot and description of the error to bugs@feedshare.org. </Text>
                        <Text style={s.policyText}>If you have found any evidence of violation of our Terms of Service aforementioned, please send a report to feedback@feedshare.org with a screenshot(s) of the violation and a description of the event. Any and all suggestions, improvements, or overall feedback you may have should also be forwarded to feedback@feedshare.org.</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}
