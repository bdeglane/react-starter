import React from 'react';
import Header from '../component/header/Header.jsx';

export default class Container extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='main' id='main'>
                <header>
                  <Header/>
                </header>
                <main>
                  <div className='container-fluid'>
                    {this.props.children}
                  </div>
                </main>
            </div>
        )
    }
}
