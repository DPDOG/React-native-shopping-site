import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
));
