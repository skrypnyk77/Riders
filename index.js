import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import Navigator from './routes/drawer';
import {Provider} from 'react-redux';
// import {thunk} from 'redux-thunk';
import reducers from './reducers';
import {createStore} from 'redux';

const store = createStore(reducers);

console.log(store);

const RidersApp = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default RidersApp;

AppRegistry.registerComponent(appName, () => RidersApp);
