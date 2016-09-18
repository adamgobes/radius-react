import React from 'react';

class MapContainer extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

        let userLocation = {
            lat: this.props.location.state.userLat,
            lng: this.props.location.state.userLong
        }

        let destination = {
            lat: this.props.location.state.destLat,
            lng: this.props.location.state.destLong
        }
        let map = new google.maps.Map(this.refs.map, {
            center: userLocation,
            zoom: 16
        });



        var directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        });
        // Set destination, origin and travel mode.
        var request = {
            destination: destination,
            origin: userLocation,
            travelMode: google.maps.TravelMode.WALKING
        };
        // Pass the directions request to the directions service.
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                // Display the route on the map.
                directionsDisplay.setDirections(response);
            }
        });
    }

    render() {
        return (
            <div className="map-container">
                <div ref="map" style={{height: "75%"}}></div>
            </div>
        );
    }
}

export default MapContainer;
