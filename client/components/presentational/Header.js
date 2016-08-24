import React from 'react';

const Header = (props) => {
    return (
        <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">Radius</span>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="">About</a>
                    <a className="mdl-navigation__link" href="">Your Places</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
