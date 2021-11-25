import React, { Component } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

export class GameResults extends Component {
  static displayName = GameResults.name;

  constructor(props) {
    super(props);
    this.state = { recentGameResults: [] };
  }

  componentDidMount() {
    const newConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/hubs/games')
      .withAutomaticReconnect()
      .build();

    this.setState({
      connection: newConnection
    });

    newConnection.start()
      .then(result => {
        console.log('Connected!');

        this.state.connection.on('ReceiveGameResult', gameResult => {
          let recentGameResults = this.state.recentGameResults;
          recentGameResults.push(gameResult);

          this.setState({
            recentGameResults: recentGameResults.slice(-10)
          });
        });
      })
      .catch(e => console.log('Connection failed: ', e));
  }

  renderGameResults() {
    return this.state.recentGameResults.map((gameResult, index) => {
      return (
        <div key={index}>
          {gameResult}
        </div>
      );
    });
  }

  render () {
    return (
      <div>
        <h1>Game Results</h1>
        <p>View the most recent game results:</p>
        <div>
          {this.renderGameResults()}
        </div>
      </div>
    );
  }
}
