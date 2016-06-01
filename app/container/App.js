import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import MainContainer from './MainContainer.jsx';

let store = createStore(() => {});

/**
 * App class wrap the application on redux provider
 */
export default class App {
    /**
     * Initial render
     * @return {HTML}
     */
    render() {
        ReactDOM.render(
          <Provider store={store}>
            <MainContainer />
          </Provider>,
          document.getElementById('app'));
      }
}
