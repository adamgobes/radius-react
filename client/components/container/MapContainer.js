import React from 'react';

class MapContainer extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map, {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }

    render() {
        return (
            <div>
                <div ref="map" style={{height: "100%"}}></div>
            </div>

        );
    }
}

export default MapContainer;
