import React, { Component } from 'react';
import { Provider } from 'react-redux';
import client from './helpers/ApiClient';
import createStore from './redux/create';
import AppRouter from './routes';
const store = createStore(client);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
