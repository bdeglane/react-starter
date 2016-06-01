import React from 'react';

import {Router, Route, browserHistory} from 'react-router';

import MainLayout from './MainLayout.jsx';
import Home from './page/Home.jsx';
import Chat from './page/Chat.jsx';

export default class Container extends React.Component {
    constructor() {
        super();
    }

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
