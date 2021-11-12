import React, { Component } from 'react';
import '../css/tictactoe.css';

export class TicTacToe extends Component {
  static displayName = TicTacToe.name;

  constructor(props) {
    super(props);
    this.state = {
      gridValues: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      currentPlayer: "X",
      message: "",
      playerWon: false,
      matrixSize: 3,
      matrixSizeInput: 3
    };
  }

  squareClicked(row, col) {
    if (this.state.playerWon) {
      // player has already won! No need to do anything.
      return;
    }

    if (this.state.gridValues[row][col] !== "") {
      this.setState({
        message: "Please select an empty square."
      });
    } else {
      let updatedValues = this.state.gridValues;
      updatedValues[row][col] = this.state.currentPlayer;

      let playerWon = this.checkForWin(row, col, updatedValues);

      this.setState({
        gridValues: updatedValues,
        currentPlayer: this.getOpposition(),
        message: playerWon ? "Well done! Game is over." : "",
        playerWon: playerWon
      });
    }
  }

  // 00, 01, 02, 03, 04
  // 10, 11, 12, 13, 14
  // 20, 21, 22, 23, 24
  // 30, 31, 32, 33, 23
  // 40, 41, 42, 43, 44
  checkForWin(row, col, values) {
    let checkForwardsDiagonal = row === col;
    let checkBackwardsDiagonal = row + col + 1 === values.length;
    let checkRow = true;
    let checkCol = true;
    for (let i = 0; i < values.length; i++) {
      if (checkForwardsDiagonal) {
        checkForwardsDiagonal = this.checkSquare(values[i][i]);
      }

      if (checkBackwardsDiagonal) {
        checkBackwardsDiagonal = this.checkSquare(values[i][values.length - i - 1]);
      }

      if (checkRow) {
        checkRow = this.checkSquare(values[row][i]);
      }

      if (checkCol) {
        checkCol = this.checkSquare(values[i][col]);
      }
    }

    return checkForwardsDiagonal || checkBackwardsDiagonal || checkRow || checkCol;
  }

  checkSquare(valEncountered) {
    return valEncountered === this.state.currentPlayer;
  }

  getOpposition() {
    if (this.state.currentPlayer === "X") {
      return "O";
    } else {
      return "X";
    }
  }

  getRows() {
    return this.state.gridValues.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className="row">
          {this.getSquares(row, rowIndex)}
        </div>
      );
    });
  }

  getSquares(row, rowIndex) {
    return row.map((colValue, colIndex) => {
      let key = "row" + rowIndex + "_col" + colIndex;
      return (
        <div key={key} className="square" onClick={() => this.squareClicked(rowIndex, colIndex)}>
          {colValue}
        </div>
      );
    });
  }

  getGrid(matrixSize) {
    let grid = [];
    for (let i = 0; i < matrixSize; i++) {
      grid[i] = [];
      for (let j = 0; j < matrixSize; j++) {
        grid[i].push("");
      }
    }

    return grid;
  }

  restartGame(matrixSize) {
    this.setState({
      gridValues: this.getGrid(matrixSize),
      currentPlayer: "X",
      message: "",
      playerWon: false
    });
  }

  isInt(value) {
    return !isNaN(value) &&
      parseInt(Number(value)) == value &&
      !isNaN(parseInt(value, 10));
  }

  handleMatrixSizeChange(event) {
    let inputValue = event.target.value;
    this.setState({
      matrixSizeInput: inputValue
    });

    let intValue = parseInt(inputValue);
    if (this.isInt(inputValue) && intValue > 2 && intValue <= 10) {
      this.setState({
        matrixSize: intValue
      });

      this.restartGame(intValue);
    } else {
      this.setState({
        message: "Please enter an number between 3 and 10."
      })
    }
    this.setState({ value: event.target.value });
  }

  render () {
    return (
      <div className="game">
        <div className="message">{this.state.message}</div>
        <input type="text" placeholder="Matrix Size" value={this.state.matrixSizeInput} onChange={this.handleMatrixSizeChange.bind(this)} />
        <div className="grid">
          {this.getRows()}
        </div>
        <button className="btn btn-primary" onClick={() => { this.restartGame(this.state.matrixSize) }}>Restart Game</button>
      </div>
    );
  }
}
