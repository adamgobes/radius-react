import React from 'react';
import Header from '../presentational/Header';
import RadiusInput from '../presentational/RadiusInput';
import TypeInput from '../presentational/TypeInput';

class HomeContainer extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="mdl-grid">
                    <RadiusInput />
                    <TypeInput />
                </div>

            </div>
        );
    }
}

export default HomeContainer;
