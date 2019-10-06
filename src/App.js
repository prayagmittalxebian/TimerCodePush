/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TimerPage from "./containers/TimerPage";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <TimerPage />
      </Provider>
    );
  }
}


export default App;
