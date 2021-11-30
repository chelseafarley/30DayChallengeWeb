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
          <li><Link to="/challenges/day/5">Consuming Webscraping API, Configuring Swagger and using Google Maps to map data</Link></li>
          <li><Link to="/challenges/day/6">Flutter App</Link></li>
          <li><Link to="/challenges/day/7">ARKit Swift iOS App</Link></li>
          <li><Link to="/challenges/day/8">Azure Functions, Cosmos DB, Key Vault and Github Actions</Link></li>
          <li><Link to="/challenges/day/9">.NET Bot Framework</Link></li>
          <li><Link to="/challenges/day/10">iOS Sticker Pack App</Link></li>
          <li><Link to="/challenges/day/11">Stripe Payments</Link></li>
          <li><Link to="/challenges/day/12">React TicTacToe</Link></li>
          <li><Link to="/challenges/day/13">iMessage Extension - TicTacToe Game</Link></li>
          <li><Link to="/challenges/day/14">Recharts for React</Link></li>
          <li><Link to="/challenges/day/15">Entity Framework Code First Migrations</Link></li>
          <li><Link to="/challenges/day/16">Gmail API in React to Send Message</Link></li>
          <li><Link to="/challenges/day/17">Rabbit MQ in Docker and Publishing Messages</Link></li>
          <li><Link to="/challenges/day/18">Google Admob Ads for Flutter App</Link></li>
          <li><Link to="/challenges/day/19">Google Tasks API in React</Link></li>
          <li><Link to="/challenges/day/20">TicTacToe Watchkit App</Link></li>
          <li><Link to="/challenges/day/21">Gradient React Components NPM Package</Link></li>
          <li><Link to="/challenges/day/22">Slack App with Slash Command</Link></li>
          <li><Link to="/challenges/day/23">NPM Global Package to Create Git Repos</Link></li>
          <li><Link to="/challenges/day/24">Scrollmarks Chrome Extension</Link></li>
          <li><Link to="/challenges/day/25">SignalR for Realtime React Website Updates</Link></li>
          <li><Link to="/challenges/day/26">Express APIs for Node JS and Google Cloud Buld Deployment to Google Cloud Functions</Link></li>
          <li><Link to="/challenges/day/27">React Native Tab Bar App</Link></li>
          <li><Link to="/challenges/day/28">Firebase Auth for Express APIs and React Frontend</Link></li>
          <li><Link to="/challenges/day/29">Google Admob Ads for Swift (iOS) App</Link></li>
          <li><Link to="/challenges/day/30">Blazor WebAssembly App</Link></li>
        </ol>
      </div>
    );
  }
}
