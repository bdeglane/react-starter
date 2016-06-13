import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import ReactRouter from './ReactRouter.jsx';

export default class ReactRedux {

    constructor() {
        this.store = createStore(()=> {
        });
    }

    /**
     * Render the main application
     * @return {HTML}
     */
    render() {
        ReactDOM.render(
            <Provider store={this.store}>
                <ReactRouter/>
            </Provider>,
            document.getElementById('app'));
    }
}