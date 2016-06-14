import React from 'react';
import Header from '../component/header/Header.jsx';

export default class Container extends React.Component {
    constructor() {
        super();
    }

    /**
    * Main layout of the application
    * @return {HTMl}
    */
    render() {
        return (
            <div className='main' id='main'>
                <header>
                    <Header/>
                </header>
                <main className='main' id='main'>
                    <div className='container-fluid'>
                        {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
}
