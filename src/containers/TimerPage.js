import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux'
import TimerList from './../components/TimerList/TimerList';
import * as timerActionCreator from './../actions/timerAction';

class TimerPage extends Component {

    constructor(props) {
        super(props);
    }

    startTimer = () => {
        this.props.dispatch(timerActionCreator.startTimer())
        this.timerInterval = setInterval(() => { this.props.dispatch(timerActionCreator.updateTimer()); }, 1000)
    }

    stopTimer = () => {
        let timerList = this.props.time.timerList;
        console.log(":timerList", timerList)
        timerList.push(this.props.time.seconds);
        console.log("update", timerList)
        this.props.dispatch(timerActionCreator.stopTimer(timerList))
        clearInterval(this.timerInterval);
    }

    resetTimer = () => {
        this.props.dispatch(timerActionCreator.resetTimer())
        clearInterval(this.timerInterval);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.actionContainer}>
                    <View style={styles.buttonView}>
                        {
                            this.props.time.isTimerStarted ?
                                <Button title="Stop" onPress={this.stopTimer}></Button> :
                                <Button title="Start" onPress={this.startTimer}></Button>
                        }
                    </View>
                    <View style={styles.timer}>
                        <Text>{this.props.time.seconds}</Text>
                    </View>
                    <View style={[styles.buttonView]}>
                        <Button title="Reset" onPress={this.resetTimer}></Button>
                        <Button title="Record"></Button>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <TimerList timerList={this.props.time.timerList} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    time: state.time
});

export default connect(mapStateToProps)(TimerPage)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgrey"
    },
    actionContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-between"
    },
    listContainer: {
        flex: 1
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resetButtonContainer: {
        marginTop: 10
    },
    timer: {
        justifyContent: 'center',
        alignItems: "center"
    }
});