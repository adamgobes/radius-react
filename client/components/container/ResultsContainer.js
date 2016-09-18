import React from 'react';
import { Link } from 'react-router';

class ResultsContainer extends React.Component {
    constructor() {
        super();
    }

    directionsRedirect(destLat, destLong) {
        this.context.router.push({
            pathname: "/directions",
            state: {
                userLat: this.props.location.state.userLat,
                userLong: this.props.location.state.userLong,
                destLat,
                destLong
            }
        });
    }

    render() {
        return (
            <div className="mdl-grid">
                {this.props.location.state.results.map((place, i) => {
                    return (
                        <div key={i} className="demo-card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col">
                            <div className="mdl-card__title">
                                <h2 className="mdl-card__title-text">{place.name}</h2>
                            </div>
                            <div className="mdl-card__supporting-text">{place.vicinity}</div>
                            <div className="mdl-card__actions mdl-card--border">
                                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                                    onClick={this.directionsRedirect.bind(this, place.geometry.location.lat, place.geometry.location.lng)}>
                                    Directions
                                </a>
                            </div>
                            <div className="mdl-card__menu">
                                <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                                    <i className="material-icons">add</i>
                                </button>
                            </div>
                        </div>
                    );
                })};
            </div>
        );
    }
}

ResultsContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default ResultsContainer
