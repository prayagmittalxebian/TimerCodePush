import React, { Component } from 'react';
import { Text, FlatList, Stylesheet, View } from 'react-native';

class TimerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeFormatList: this.convertList(this.props.timerList)
        }
    }
    convertList(timerList) {
        let formattedTimerList = [];
        timerList.forEach(element => {
            let seconds = element % 60;
            let minutes = Math.round(element / 60);
            let hours = Math.round(minutes / 60);

            let format = hours + ":" + minutes + ":" + seconds;
            formattedTimerList.push(format);
        });

        return formattedTimerList
    }

    render() {

        let timeFormatList = this.convertList(this.props.timerList);
        console.log("timeFormatList", timeFormatList)
        return (
            <View>
                <FlatList data={timeFormatList}
                    renderItem={({ item }) => <Text>{item}</Text>} />
            </View>
        );
    }
}

export default TimerList;