import React, { Component } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';

export class LocationMarker extends Component {
  static displayName = LocationMarker.name;

  constructor(props) {
    super(props);
    this.state = {
      mapMarker: null,
      isOpen: false
    };
  }

  onToggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLoad(mapMarker) {
    this.setState({
      mapMarker: mapMarker
    });
  };

  render() {
    return (
      <Marker position={this.props.location.coords} onLoad={this.onLoad.bind(this)} onClick={this.onToggleOpen.bind(this)}>
        {this.state.isOpen && (
          <InfoWindow
            anchor={this.state.mapMarker}
            position={this.props.location.coords}
            onClose={this.onToggleOpen.bind(this)}>
            <div>
              <h3>{this.props.location.name}</h3>
              <p>{this.props.location.address}</p>
              <ul>
                {this.props.location.exposureEvents.map((exposureEvent) => (
                  <li>{exposureEvent.day} - {exposureEvent.times}</li>
                ))}
              </ul>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}
