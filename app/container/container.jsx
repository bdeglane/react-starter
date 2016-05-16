import React from 'react';

import Item from '../component/Item/Item.jsx';
import Card from '../component/card/Card.jsx';

export default class Container extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul className="list-group">
                <Item key='1' hello='machin' url='machin'/>
                <Item key='2' hello='machine' url='machine'/>
            </ul>
        )
    }
}
