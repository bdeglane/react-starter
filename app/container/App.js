import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory} from 'react-router';

import {Provider} from 'react-redux'
import {createStore} from 'redux'

import MainLayout from './MainLayout.jsx';
import Home from './page/Home.jsx';
import Chat from './page/Chat.jsx';

let store = createStore(() => {});

export default class App {
    /**
     * Initial render
     * @return {HTML}
     */
    render() {
        ReactDOM.render(
          <Provider store={store}>
            <Router history={browserHistory}>
                <Route component={MainLayout}>
                    <Route path="/" component={Home}/>
                    <Route path="/chat" component={Chat}/>
                </Route>
            </Router>
        </Provider>, document.getElementById('app'));
    }
}
