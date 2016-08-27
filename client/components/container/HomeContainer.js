import React from 'react';
import RadiusInput from '../presentational/RadiusInput';
import TypeInput from '../presentational/TypeInput';

class HomeContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            radius: 100,
            type: "restaurant"
        }
        this.handleRadiusChange = this.handleRadiusChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleRadiusChange(e) {
        this.setState({
            radius: e.target.value
        });
    }

    handleTypeChange(e) {
        console.log(e.target.innerHTML);
    }

    render() {
        return (
            <div className="home-container">
                <RadiusInput radius={this.state.radius} onRadiusChange={this.handleRadiusChange} />
                <TypeInput type={this.state.type} onTypeChange={this.handleTypeChange} />
                <div className="submit-btn-container">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Find</button>
                </div>
            </div>
        );
    }
}

export default HomeContainer;
