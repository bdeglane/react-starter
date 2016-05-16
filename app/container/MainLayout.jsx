import React from 'react';

/**
 * A container is non-reusable and contain the model-view logic
 */
export default class Container extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='main' id='main'>
                <header>
                    <h1>coucou</h1>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
