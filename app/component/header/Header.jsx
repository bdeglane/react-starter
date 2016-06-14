import React from 'react';
import { Link } from 'react-router'
import './header.scss';

const Header = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div classNameName="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">React Bootstrap</Link>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/" activeClassName="active">Home</Link>
                        </li>
                        <li>
                            <Link to="/chat" activeClassName="active">Chat</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      )
}
export default Header;
