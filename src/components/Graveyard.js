<List style={[s.cardInput,{flexDirection: 'row'}]}>
    <ListItem style={[s.removeBotBorder,{flex: 1, alignSelf: 'flex-start', height: 60}]}>
        <DatePicker
            style={{width:400}}
            date={this.state.date}
            mode="datetime"
            placeholder="When"
            format="MMMM D, h:mm a"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateInput: {
                    borderWidth: 0,
                    marginLeft: 10,
                    alignItems: 'flex-start'
                },
                placeholderText: {
                    textAlign: 'left',
                    color: '#bebebe',
                    alignSelf: 'flex-start'
                },
                dateIcon: {
                    opacity: 0
                },
                btnTextConfirm: {
                    color: '#e63039'
                }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
            />
    </ListItem>
</List>


<Text note>
    { "Starting: " + this.props.item.event_time }
</Text>


<View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
    <TouchableOpacity onPress={ this.changeStatus.bind(this, "up") }>
        <Image source={require('../img/up-arrow.png')} style={s.upDownArrow} />
    </TouchableOpacity>
    <Text style={[s.cardText,{fontSize:16,padding:2}]}>
        { this.props.item.starCount }
    </Text>
    <TouchableOpacity onPress={ this.changeStatus.bind(this, "down") }>
        <Image source={require('../img/up-arrow.png')} style={[s.upDownArrow,{transform: [{rotate: '180deg'}]}]} />
    </TouchableOpacity>
</View>
