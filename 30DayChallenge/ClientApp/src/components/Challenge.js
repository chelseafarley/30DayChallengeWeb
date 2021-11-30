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
      },
      {
        title: "Stripe Payments",
        gitRepo: "https://github.com/chelseafarley/30DayChallengeWeb",
        tech: "Stripe API, React, C#, web api",
        description: "Get checkout session for Stripe API and make payment.",
        youtube: "https://www.youtube.com/embed/bRBcpcBaSLc",
        live: "/supportus"
      },
      {
        title: "React TicTacToe",
        gitRepo: "https://github.com/chelseafarley/30DayChallengeWeb",
        tech: "React",
        description: "A react based TicTacToe game.",
        youtube: "https://www.youtube.com/embed/jh45U-C7go8",
        live: "/tictactoe"
      },
      {
        title: "iMessage Extension - TicTacToe game",
        gitRepo: "https://github.com/chelseafarley/TicTacToe",
        tech: "Swift, iMessage Extension",
        description: "A swift based TicTacToe game played with a friend through iMessage.",
        youtube: "https://www.youtube.com/embed/hkVue3b3Rj8",
      },
      {
        title: "Recharts",
        gitRepo: "https://github.com/chelseafarley/30DayChallengeWeb",
        tech: "recharts, React",
        description: "Using the recharts package to create beautiful charts.",
        youtube: "https://www.youtube.com/embed/VKD8qAazTdI",
        live: "/recharts"
      },
      {
        title: "Entity Framework Code First Migrations",
        gitRepo: "https://github.com/chelseafarley/30DayChallengeWeb",
        tech: "Entity Framework",
        description: "Add mailing models to my database using EF code first migrations.",
        youtube: "https://www.youtube.com/embed/plWleV73p5k",
        live: "/mailer/home"
      },
      {
        title: "Gmail API in React to Send Message",
        gitRepo: "https://github.com/chelseafarley/30DayChallengeWeb",
        tech: "Gmail API, React",
        description: "Add mailing models to my database using EF code first migrations.",
        youtube: "https://www.youtube.com/embed/EbbWmk8AfRI",
        live: "/mailer/send"
      },
      {
        title: "Rabbit MQ in Docker and Publishing Messages",
        gitRepo: "https://github.com/chelseafarley/30DayChallengeWeb",
        tech: "RabbitMQ, .netcore, C#",
        description: "Running rabbitmq in docker and publishing a message to a queue.",
        youtube: "https://www.youtube.com/embed/EWkjWbUfDBQ"
      },
      {
        title: "Google Admob Ads for Flutter App",
        gitRepo: "https://github.com/chelseafarley/OnTrack",
        tech: "Admob, Dart, Flutter",
        description: "Monetise your apps with admob ads on your Flutter App",
        youtube: "https://www.youtube.com/embed/DbdnrSnRSJI"
      },
      {
        title: "Google Tasks API in React",
        gitRepo: "https://github.com/chelseafarley/30DayChallengeWeb",
        tech: "Google Tasks API, React",
        description: "Create a simple todo list tool using Google Tasks.",
        youtube: "https://www.youtube.com/embed/sgQyP4R8ufo",
        live: "/todo"
      },
      {
        title: "TicTacToe Watchkit App",
        gitRepo: "https://github.com/chelseafarley/TicTacToe",
        tech: "Watchkit, Swift",
        description: "Play TicTacToe on your Apple Watch.",
        youtube: "https://www.youtube.com/embed/3jA-Yieck2Y"
      },
      {
        title: "Gradient React Components NPM Package",
        gitRepo: "https://github.com/chelseafarley/react-gradient-ui",
        tech: "npm, React, Babel",
        description: "A set of gradient components for React.",
        youtube: "https://www.youtube.com/embed/3SGg5CavOcM"
      },
      {
        title: "Slack App with Slash Command",
        gitRepo: "https://github.com/chelseafarley/QuoteSlackCommand",
        tech: "Azure Functions, Slack App, C#",
        description: "A slash command slack app to retrieve an inspirational quote.",
        youtube: "https://www.youtube.com/embed/JjmKmqFE_bw"
      },
      {
        title: "NPM Global Package to Create Git Repos",
        gitRepo: "https://github.com/chelseafarley/git-start",
        tech: "npm, nodejs, bash",
        description: "A globally installed command to create git repos with relevant gitignore",
        youtube: "https://www.youtube.com/embed/9OhArl-qFCM"
      },
      {
        title: "Scrollmarks Chrome Extension",
        gitRepo: "https://github.com/chelseafarley/git-start",
        tech: "chrome apis, chrome extension, js, html",
        description: "A chrome extension to bookmark your current scroll location on a website.",
        youtube: "https://www.youtube.com/embed/LXzLS2zWo14"
      },
      {
        title: "SignalR for Realtime React Website Updates",
        gitRepo: "https://github.com/chelseafarley/30DayChallengeWeb",
        tech: "signal r, React, C#",
        description: "When playing tictactoe on this react website, if you have the game results page open simultaneously you will see real time result updates.",
        youtube: "https://www.youtube.com/embed/uJ5OCEcgeNA",
        live: "/gameresults"
      },
      {
        title: "Express APIs for Node JS",
        gitRepo: "https://github.com/chelseafarley/google-cloud-functions",
        tech: "Express, nodejs, yaml, google cloud build, google cloud functions",
        description: "Implementing various api endpoints using Express and deploying on push to main branch through google cloud builds.",
        youtube: "https://www.youtube.com/embed/c4DFPHgaTr4"
      },
      {
        title: "React Native Tab Bar App",
        gitRepo: "https://github.com/chelseafarley/xchangr",
        tech: "Expo, React Native, React Context, Async Storage, Tab Bar",
        description: "A tab bar controller app with overall app state shared with the tabs via Context providers. The data is stored in async storage",
        youtube: "https://www.youtube.com/embed/Z4YiKF0Me8Y"
      },
      {
        title: "Firebase Auth",
        gitRepo: "https://github.com/chelseafarley/google-cloud-functions",
        tech: "Firebase Auth, React, Express APIs, nodejs",
        description: "A react frontend to login using Firebase Auth and Express APIs to validate the token.",
        youtube: "https://www.youtube.com/embed/XhjCx__0L88"
      },
      {
        title: "Google Admob Ads for Swift (iOS) App",
        gitRepo: "https://github.com/chelseafarley/SwiftAdmobExample",
        tech: "Google Admob, Swift, iOS, Banner Ads, Interstitial Ads",
        description: "A test app showing how to setup Google Admob Banner and Interstitial Ads in Swift based iOS apps.",
        youtube: "https://www.youtube.com/embed/YZFkpFpSWDQ"
      },
      {
        title: "Blazor WebAssembly App",
        gitRepo: "https://github.com/chelseafarley/Blazor",
        tech: "Blazor, Web API",
        description: "A simple Blazor WebAssembly App demonstrating sharing code between server and client.",
        youtube: "https://www.youtube.com/embed/7Tp82lGqg-U"
      },
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
