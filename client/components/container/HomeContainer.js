import React from 'react';
import RadiusInput from '../presentational/RadiusInput';
import TypeInput from '../presentational/TypeInput';

class HomeContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            radius: 100,
            placeType: ""
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
            placeType: e.target.innerHTML
        });
    }

    handleSearch(e) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $.get("/places?" + "radius=" + this.state.radius + "&placeType=" + this.state.placeType + "&lat=" + position.coords.latitude + "&long=" + position.coords.longitude, function(data) {
                console.log(data);
            });
        }.bind(this));
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
