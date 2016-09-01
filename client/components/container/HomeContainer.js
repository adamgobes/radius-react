import React from 'react';
import RadiusInput from '../presentational/RadiusInput';
import TypeInput from '../presentational/TypeInput';

class HomeContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            radius: 100,
            type: ""
        }
        this.handleRadiusChange = this.handleRadiusChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleRadiusChange(e) {
        this.setState({
            radius: e.target.value
        });
    }

    handleTypeChange(e) {
        $('.type-div').not(e.target).css("background", "#F44336");
        $(e.target).parent().parent().css("background", "white");
        this.setState({
            type: e.target.innerHTML
        });
    }

    handleSearch(e) {
        console.log(this.state.radius, this.state.type);
    }

    render() {
        return (
            <div className="home-container">
                <RadiusInput radius={this.state.radius} onRadiusChange={this.handleRadiusChange} />
                <TypeInput type={this.state.type} onTypeChange={this.handleTypeChange} />
                <div className="submit-btn-container">
                    <button
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                        onClick={this.handleSearch}>Find</button>
                </div>
            </div>
        );
    }
}

export default HomeContainer;
