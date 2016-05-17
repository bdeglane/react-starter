import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import MainLayout from './container/MainLayout.jsx';
import Home from './container/page/Home.jsx';
import Chat from './container/page/Chat.jsx';

export default class ReactBootstrap {
    /**
   * Render the main application
   * @return {HTML} on div#app
   */
    render() {
        ReactDOM.render(
            <Router history={browserHistory}>
            <Route component={MainLayout}>
                <Route path="/" component={Home}/>
                <Route path="/chat" component={Chat}/>
            </Route>
        </Router>, document.getElementById('app'));
    }
}
