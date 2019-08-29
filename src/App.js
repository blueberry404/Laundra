import React, {Fragment} from 'react';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  View,
  StatusBar
} from 'react-native';

import store from './store';
import Router from './routes';
import { colorStatusBar } from './constants/colors';
import * as NavigatorService from './helpers/NavigatorService';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={colorStatusBar} barStyle="dark-content" />
        <Router
          ref={(navRef) => {
            NavigatorService.setContainer(navRef);
          }} />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
