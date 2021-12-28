import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './stores/createStore';
import checkCurrentUser from './utils/checkCurrentUser';
import WakaTime from './../assets/js/components/WakaTime.jsx';

const container = document.getElementById('wakatime');

const store = createStore('WakaTime-Options');
checkCurrentUser(store)(30 * 1000);

const openOptions = async (): Promise<void> => {
  await browser.runtime.openOptionsPage();
};

ReactDOM.render(
  <Provider store={store}>
    <WakaTime />
  </Provider>,
  container,
);
