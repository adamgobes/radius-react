import React from 'react';
import RadiusInput from '../presentational/RadiusInput';
import TypeInput from '../presentational/TypeInput';

class HomeContainer extends React.Component {
    render() {
        return (
            <div className="home-container">
                <RadiusInput />
                <TypeInput />
                <div className="submit-btn-container">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Find</button>
                </div>
            </div>
        );
    }
}

export default HomeContainer;
