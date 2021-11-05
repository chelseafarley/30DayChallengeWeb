﻿import React, { Component } from 'react';

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
        <iframe width="560" height="315" src={challenge.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
  }
}
