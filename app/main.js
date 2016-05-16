import '../public/bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../style/style.scss';

// import 'file?name=[name].[ext]!./index.html';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Container from './container/container.jsx';
import MainLayout from './container/MainLayout.jsx';
import User from './component/user/User.jsx';

// let hello = 'Name';
// let items = ['Roger', 'Simon', 'Françoise'];

// ReactDOM.render(
//     <Container hello={hello} items={items}/>, document.getElementById('app'));

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Container}>
        <Route path="user/:name" component={User}/>
      </Route>
    </Route>
  </Router>
  , document.getElementById('app')
);
