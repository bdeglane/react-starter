import React from 'react';

/**
 * A simple reusable abstract view component for react
 *
 * @param img
 * @param title
 * @param text
 * @returns {XML}
 * @constructor
 */
const Card = ({img, title, text})=> {
    return (
        <div className="thumbnail">
            <img src={img} className="img-responsive" alt="Responsive image"/>
            <div className="caption">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};
export default Card;