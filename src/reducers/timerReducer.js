import * as types from './../constants/actionTypes';

const initialState = {
    timerList: [],
    isTimerStarted: false,
    seconds: 0
}

export default timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_TIMER:
            return {
                ...state,
                isTimerStarted: true
            }
        case types.STOP_TIMER:
            return {
                ...state,
                isTimerStarted: false,
                timerList: action.timerList,
                seconds: 0
            }
        case types.RESET_TIMER:
            return {
                ...state,
                isTimerStarted: false,
                timerList: [],
                seconds: 0
            }
        case types.UPDATE:
            return {
                ...state,
                seconds: state.seconds + 1
            }
        default:
            return state;
    }
}