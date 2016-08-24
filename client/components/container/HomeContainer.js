import React from 'react';
import RadiusInput from '../presentational/RadiusInput';
import TypeInput from '../presentational/TypeInput';

class HomeContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="mdl-grid">
                    <RadiusInput />
                    <TypeInput />
                </div>

            </div>
        );
    }
}

export default HomeContainer;
