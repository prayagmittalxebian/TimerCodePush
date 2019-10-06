import { combineReducers } from 'redux';

import timerReducer from './timerReducer';

const appReducer = combineReducers({
    time: timerReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;