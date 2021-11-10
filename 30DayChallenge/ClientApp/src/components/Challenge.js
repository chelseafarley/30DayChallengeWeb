import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Challenge extends Component {
  static displayName = Challenge.name;

  getChallengeInfo(id) {
    let challengeInfo = [
      {
        title: "React Website with Identity Server",
        gitRepo: "https://github.com/chelseafarley/30DayChallengeWeb",
        tech: "C#, .NET Core, Identity Server, SendGrid, React, Web API",
        description: "Setup a very simple react website with identity server. Also incorporate external logins from facebook and google, and include email account support via sendgrid. Future challenges will add to this website.",
        youtube: "https://www.youtube.com/embed/RkAdTsdKpn0"
      },
      {
        title: "SVG Generator/Stacker",
        gitRepo: "https://github.com/chelseafarley/SVGGenerator",
        tech: "node.js, fs, dom-parser",
        description: "This is a tool for taking an infinite number of input folders containing svgs and using though as layers to generate all possible output svg combinations. This is useful for icon makers.",
        youtube: "https://www.youtube.com/embed/n1UD-5qzq64"
      },
      {
        title: "Alexa Skill",
        gitRepo: "https://github.com/chelseafarley/StoryTimeAlexaSkill",
        tech: "Alexa Skill, node.js",
        description: "This is an Alexa skill that tells the user a random story.",
        youtube: "https://www.youtube.com/embed/nQMwiqFtAAI"
      },
      {
        title: "Python Webscraper and Flask API",
        gitRepo: "https://github.com/chelseafarley/Covid19Webscraper",
        tech: "Python, Flask, gunicorn, BeautifulSoup4",
        description: "This is a basic script to web scrape for covid 19 locations of interest and return them via a flask API. The parsing was done by BeautifulSoup4 and gunicorn was used for deployment to Heroku.",
        youtube: "https://www.youtube.com/embed/CzPulkCRz1Y"
      },
      {
        title: "Google Maps",
        gitRepo: "https://github.com/chelseafarley/30DayChallengeWeb",
        tech: "React, Swagger, Google Maps API, Web API",
        description: "React page with Google Map showing Covid-19 locations of interest from Day 4 locations of interest API. If you want this to work locally you will need to run that API while running this website. I also configured swagger as a bit of a bonus ;)",
        youtube: "https://www.youtube.com/embed/4JCswHKn_0Q",
        live: "/challenges/covidlocations"
      },
      {
        title: "Flutter App",
        gitRepo: "https://github.com/chelseafarley/OnTrack",
        tech: "Flutter, Dart, Shared Preferences",
        description: "A simple flutter app to track healthy and unhealthy habits such as glasses of water or number of cigarettes.",
        youtube: "https://www.youtube.com/embed/iBNEad8K43s",
      },
      {
        title: "ARKit Swift iOS App",
        gitRepo: "https://github.com/chelseafarley/Pupuru",
        tech: "Swift, ARKit",
        description: "A memory game using ARKit to project memory cards onto a surface in front of you",
        youtube: "https://www.youtube.com/embed/LwV-XDe59PY"
      },
      {
        title: "Azure Functions, Cosmos DB, Key Vault and Github Actions",
        gitRepo: "https://github.com/chelseafarley/RestaurantSlotsAzureFunction",
        tech: "C#, Azure Functions, Cosmos DB, Key Vault and Github Actions",
        description: "Two simple azure functions to get bookings at a restaurant and reserve a table. Backed by Cosmos DB with the access credentials stored in key vault. Automatically deployed via github actions.",
        youtube: "https://www.youtube.com/embed/e6jChxgOcn4"
      },
      {
        title: ".NET Bot Framework",
        gitRepo: "https://github.com/chelseafarley/RestaurantBookingBot",
        tech: "C#, .NET Bot Framework",
        description: "A bot that uses yesterday's azure functions to interact with a user and gather information required to book a restaurant table for them.",
        youtube: "https://www.youtube.com/embed/alMcbqMsacs"
      },
      {
        title: "iOS Sticker Pack App",
        gitRepo: "https://github.com/chelseafarley/ChristmasCheersStickerPack",
        tech: "Sticker Pack App",
        description: "An iMessage extension to allow you to add stickers from the Christmas Cheers Sticker Pack to your messages.",
        youtube: "https://www.youtube.com/embed/zGuGcmZKigk"
      }
    ];

    return challengeInfo[id - 1];
  }

  render() {
    let challenge = this.getChallengeInfo(this.props.match.params.id);
    return (
      <div>
        <h1>Day {this.props.match.params.id}</h1>
        <h2>{challenge.title}</h2>
        <p>Tech: {challenge.tech}</p>
        <p><a href={challenge.gitRepo}>Github Repo</a></p>
        <p>{challenge.description}</p>
        {challenge.live && (
          <p><Link to={challenge.live}>See it live</Link></p>
        )}
        <iframe width="560" height="315" src={challenge.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    );
  }
}
