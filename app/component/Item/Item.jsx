import React from 'react';
import './item.scss';

/**
 * A simple reusable abstract view component for react
 *
 * @param hello
 * @param url
 * @returns {XML}
 * @constructor
 */
const Item = ({hello, url})=> {
    return (
        <li className="list-group-item">
            <a className="card" href={ '/' + url + '#'}><span className="glyphicon glyphicon-heart" aria-hidden="true"></span> {hello}</a>
        </li>
    );
};
export default Item;