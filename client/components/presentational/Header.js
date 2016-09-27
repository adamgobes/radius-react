import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
    return (
        <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <Link to="/"><span className="mdl-layout-title">Radius</span></Link>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation">
                    <Link className="mdl-navigation__link" to="about">About</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
