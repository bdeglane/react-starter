import '../public/bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container/container.jsx';

let hello = 'Name';
let items = ['Roger', 'Simon', 'Françoise'];

ReactDOM.render(
    <Container hello={hello} items={items}/>, document.getElementById('app'));
