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
                                Privacy Policy
                            </Text>
                            <Button transparent>
                                <Icon style={[s.headerButtonLast,{color: 'transparent'}]} name='ios-arrow-back' />
                            </Button>
                        </View>
                    </Image>
                </Header>
                <Content style={{paddingHorizontal: 17, paddingTop: 17, backgroundColor: '#f5f5f5'}}>
                    <View style={[s.listCard,{backgroundColor: 'white', padding: 17}]}>
                        <Text style={s.policyTitle}>PRIVACY POLICY FOR FEEDSHARE</Text>
                        <Text style={s.policyText}>This privacy policy governs your use of the software application FeedShare (“Application”) for mobile devices that was created by Stwest Team. The Application lets users find free food on college campus. Users receive push notifications whenever users post events with free food on to the app.</Text>
                        <Text style={s.policySubTitle}>What information does the Application obtain and how is it used?</Text>
                        <Text style={s.policySubTitle}>User Provided Information</Text>
                        <Text style={s.policyText}>The Application obtains the information you provide when you download and register the Application. Registration with us is optional. However, please keep in mind that you may not be able to use some of the features offered by the Application unless you register with us.</Text>
                        <Text style={s.policyText}>When you register with us and use the Application, you generally provide (a) your name, email address, age, user name, password and other registration information; (b) transaction-related information, such as when you make purchases, respond to any offers, or download or use applications from us; (c) information you provide us when you contact us for help; (d) credit card information for purchase and use of the Application, and; (e) information you enter into our system when using the Application, such as contact information and project management information.</Text>
                        <Text style={s.policyText}>We may also use the information you provided us to contact your from time to time to provide you with important information, required notices and marketing promotions.</Text>
                        <Text style={s.policySubTitle}>Automatically Collected Information</Text>
                        <Text style={s.policyText}>In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.</Text>
                        <Text style={s.policySubTitle}>Does the Application collect precise real time location information of the device?</Text>
                        <Text style={s.policyText}>When you visit the mobile application, we may use GPS technology (or other similar technology) to determine your current location in order to determine the city you are located within and display a location map with relevant advertisements. We will only share your current location with other users or partners when you post an event.</Text>
                        <Text style={s.policyText}>If you do not want us to use your location for the purposes set forth above, you should turn off the location services for the mobile application located in your account settings or in your mobile phone settings and/or within the mobile application.</Text>
                        <Text style={s.policySubTitle}>Do third parties see and/or have access to information obtained by the Application?</Text>
                        <Text style={s.policyText}>Yes. We will share your information with third parties only in the ways that are described in this privacy statement.</Text>
                        <Text style={s.policyText}>We may disclose User Provided and Automatically Collected Information:</Text>
                        <Text style={s.policyText}>- as required by law, such as to comply with a subpoena, or similar legal process;</Text>
                        <Text style={s.policyText}>- when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</Text>
                        <Text style={s.policyText}>- with our trusted services providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</Text>
                        <Text style={s.policyText}>- if Stwest Team is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email and/or a prominent notice on our Web site of any change in ownership or uses of this information, as well as any choices you may have regarding this information.</Text>
                        <Text style={s.policyText}>- to advertisers and third party advertising networks and analytics companies as described in the section below</Text>
                        <Text style={s.policySubTitle}>Automatic Data Collection and Advertising</Text>
                        <Text style={s.policyText}>We may work with analytics companies to help us understand how the Application is being used, such as the frequency and duration of usage. We work with advertisers and third party advertising networks, who need to know how you interact with advertising provided in the Application which helps us keep the cost of the Application low. Advertisers and advertising networks use some of the information collected by the Application, including, but not limited to, the unique identification ID of your mobile device and your mobile telephone number. To protect the anonymity of this information, we use an encryption technology to help ensure that these third parties can’t identify you personally. These third parties may also obtain anonymous information about other applications you’ve downloaded to your mobile device, the mobile websites you visit, your non-precise location information (e.g., your zip code), and other non- precise location information in order to help analyze and serve anonymous targeted advertising on the Application and elsewhere. We may also share encrypted versions of information you have provided in order to enable our partners to append other available information about you for analysis or advertising related use.</Text>
                        <Text style={s.policyText}>If you’d like to opt-out from third party use of this type of information to help serve targeted advertising, please visit the section entitled “Opt-out” below.</Text>
                        <Text style={s.policySubTitle}>What are my opt-out rights?</Text>
                        <Text style={s.policyText}>There are multiple opt-out options for users of this Application:</Text>
                        <Text style={s.policyText}>Opt-out of all information collection by uninstalling the Application: You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network. You can also request to opt-out via email, at feedsharedev@gmail.com.</Text>
                        <Text style={s.policyText}>Opt-out from the use of information to serve targeted advertising by advertisers and/or third party network advertisers: you may at any time opt-out from further allowing us to have access to your location data by disabling location on your phone or uninstalling the app.</Text>
                        <Text style={s.policySubTitle}>Data Retention Policy, Managing Your Information</Text>
                        <Text style={s.policyText}>We will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. We will retain Automatically Collected information for up to 48 months and thereafter may store it in aggregate. If you’d like us to delete User Provided Data that you have provided via the Application, please contact us at feedsharedev@gmail.comand we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly.</Text>
                        <Text style={s.policySubTitle}>Children</Text>
                        <Text style={s.policyText}>We do not use the Application to knowingly solicit data from or market to children under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at feedsharedev@gmail.com. We will delete such information from our files within a reasonable time.</Text>
                        <Text style={s.policySubTitle}>Security</Text>
                        <Text style={s.policyText}>We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our Application. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.</Text>
                        <Text style={s.policySubTitle}>Changes</Text>
                        <Text style={s.policyText}>This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy http://www.feedshare.org/ and informing you via email or text message or push notification. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes. You can check the history of this policy by clicking here.</Text>
                        <Text style={s.policySubTitle}>Your Consent</Text>
                        <Text style={s.policyText}>By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. "Processing,” means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information, all of which activities will take place in the United States. If you reside outside the United States your information will be transferred, processed and stored there under United States privacy standards.</Text>
                        <Text style={s.policySubTitle}>Contact us</Text>
                        <Text style={s.policyText}>If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at feedback@feedshare.org.</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}
