import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to my 30 day tech challenge:</p>
        <ol>
          <li><Link to="/challenges/day/1">Identity Server and React Website with SendGrid and External Logins</Link></li>
          <li><Link to="/challenges/day/2">SVG Generator</Link></li>
          <li><Link to="/challenges/day/3">Amazon Alexa skill to tell a random story</Link></li>
          <li><Link to="/challenges/day/4">Webscraping Covid-19 Locations and Exposing via Flask API</Link></li>
          <li>Consuming Webscraping API, Configuring Swagger and using Google Maps to map data</li>
        </ol>
      </div>
    );
  }
}
