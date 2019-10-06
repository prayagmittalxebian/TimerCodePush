import * as types from './../constants/actionTypes';

export function startTimer() {
    return dispatch => {
        dispatch({ type: types.START_TIMER })
    }
}

export function stopTimer(timerList) {
    return dispatch => {
        dispatch({ type: types.STOP_TIMER, timerList })
    }
}


export function resetTimer() {
    return dispatch => {
        dispatch({ type: types.RESET_TIMER })
    }
}

export function updateTimer() {
    return dispatch => {
        dispatch({ type: types.UPDATE })
    }
}