import '../public/bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory} from 'react-router';

import {Provider} from 'react-redux'
import {createStore} from 'redux'

import MainLayout from './container/MainLayout.jsx';
import Home from './container/page/Home.jsx';
import Chat from './container/page/Chat.jsx';

let store = createStore(() => {});

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home}/>
            <Route path="/chat" component={Chat}/>
        </Route>
    </Router>
</Provider>, document.getElementById('app'));
