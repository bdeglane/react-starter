import React from 'react';
import { Link } from 'react-router'
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
            <Link to={ '/user/' + url } className="card">
              <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> {hello}
            </Link>
        </li>
    );
};
export default Item;
