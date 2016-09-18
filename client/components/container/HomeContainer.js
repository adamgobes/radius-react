import React from 'react';
import RadiusInput from '../presentational/RadiusInput';
import TypeInput from '../presentational/TypeInput';
import placeTypes from '../../../utils/placeTypes';
import axios from 'axios';

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
            placeType: placeTypes[e.target.innerHTML]
        });
    }

    handleSearch(e) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let queryString = "/placeSearch?" + "radius=" + this.state.radius + "&placeType=" + this.state.placeType + "&lat=" + position.coords.latitude + "&long=" + position.coords.longitude;
            axios.get(queryString).then(function(response) {
                this.context.router.push({
                    pathname: '/results',
                    state: {
                        results: response.data.results,
                        userLat: position.coords.latitude,
                        userLong: position.coords.longitude
                    }
                });
                console.log(response.data.results);
            }.bind(this)).catch(function(error) {
                console.log(error);
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

HomeContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default HomeContainer;
