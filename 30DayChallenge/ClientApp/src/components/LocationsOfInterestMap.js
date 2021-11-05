import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
          {this.getMarkers()}
        </GoogleMap>
      </LoadScript>
    );
  }

  createKey(location) {
    return location.lat + location.lng
  }

  getMarkers() {
    return this.state.locations.map((location) => (
      <LocationMarker key={this.createKey(location.coords)} location={location} />
    ))
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

  async getLocationWithCoords(location) {
    const response = await Geocode.fromAddress(location.address);
    const { lat, lng } = response.results[0].geometry.location;
    location.coords = {
      lat: lat,
      lng: lng
    };

    return location;
    //data.forEach(location => {
    //  Geocode.fromAddress(location.address).then(
    //    (response) => {
    //      const { lat, lng } = response.results[0].geometry.location;
    //      location.coords = {
    //        lat: lat,
    //        lng: lng
    //      };
    //    },
    //    (error) => {
    //      console.error(error);
    //    }
    //  );
    //});
  }

  async populateLocationsData() {
    Geocode.setApiKey("");
    const response = await fetch('covid');
    const data = await response.json();
    const x = await this.getLocationWithCoords(data[0]);
    const y = await this.getLocationWithCoords(data[1]);
    this.setState({ locations: [x, y], loading: false });
  }
}
