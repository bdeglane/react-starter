import '../style/style.scss';

import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import MainLayout from './container/MainLayout.jsx';
import Home from './container/page/Home.jsx';
import Chat from './container/page/Chat.jsx';

export default class ReactRouter extends React.Component {
    /**
     * @return {HTML} on div#app
     */
    render() {
        return (
            <Router history={browserHistory}>
                <Route component={MainLayout}>
                    <Route path="/" component={Home}/>
                    <Route path="/chat" component={Chat}/>
                </Route>
            </Router>
        );
    }
}
