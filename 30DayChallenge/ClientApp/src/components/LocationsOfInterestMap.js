import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerClusterer } from '@react-google-maps/api';
import Geocode from "react-geocode";
import { LocationMarker } from './LocationMarker';

const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: -36.851,
  lng: 174.764
};

export class LocationsOfInterestMap extends Component {
  static displayName = LocationsOfInterestMap.name;

  constructor(props) {
    super(props);
    this.state = { locations: [], loading: true };
  }

  componentDidMount() {
    this.populateLocationsData();
  }

  renderLocationsMap(locations) {
    return (
      <LoadScript googleMapsApiKey="">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
            {clusterer =>
              this.state.locations.map((location, index) => (
                <LocationMarker key={index} location={location} clusterer={clusterer} />
              ))
            }
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderLocationsMap(this.state.locations);

    return (
      <div>
        <h1 id="tabelLabel" >Locations of Interest</h1>
        {contents}
      </div>
    );
  }

  async updateLocationWithCoords(location, locations) {
    const response = await Geocode.fromAddress(location.address);
    const { lat, lng } = response.results[0].geometry.location;
    location.coords = {
      lat: lat,
      lng: lng
    };
    locations.push(location);

    if (locations.length % 20 === 20) {
      this.setState({ locations: locations, loading: false });
    }
  }

  async populateLocationsData() {
    Geocode.setApiKey("");
    const response = await fetch('covid');
    const data = await response.json();
    // This could be improved for sure
    const locations = [];
    for (const location of data) {
      this.updateLocationWithCoords(location, locations);
      this.setState({ locations: locations, loading: false });
    }
  }
}
