import React, { Component } from "react";
import Pin from "./Pin.jsx";
import Keypad from "./Keypad.jsx";
import HelperFuncs from "../../HelperFuncs.js";
import Scoreboard from "../components/Scoreboard.jsx";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[0, 0, 0, 0], [0, 0, 0], [0, 0], [0]],
      round: 0,
      score1: null,
      score2: null,
      roundTracker: 0,
      totalScore: 0
    };
    this.handlePressKey = this.handlePressKey.bind(this);
    this.handleRoundChangeAndScore = this.handleRoundChangeAndScore.bind(this);
    this.handleRestartGame = this.handleRestartGame.bind(this);
  }

  handlePressKey(num) {
    let newBoard = this.state.board.slice();
    newBoard = HelperFuncs.removePins(num, newBoard);
    this.setState({
      board: newBoard
    });
  }

  handleScoreInsertion(score) {
    this.setState({
      currentValue: score
    });
  }

  handleRoundChangeAndScore(score) {
    var newRoundTracker = this.state.roundTracker;
    var newTotalScore = this.state.totalScore + score;

    if (newRoundTracker % 2 === 0) {
      newRoundTracker++;
      this.setState({
        round: this.state.round + 1,
        score1: score,
        roundTracker: newRoundTracker,
        totalScore: newTotalScore
      })
    } else {
      newRoundTracker++;
      console.log('im hereeeeeeeeeeeeee')
      var reRender = () => {
        this.setState({
          score2: score,
          roundTracker: newRoundTracker,
          totalScore: newTotalScore,
          board: [[0, 0, 0, 0], [0, 0, 0], [0, 0], [0]]
        }, () => {
          if (this.state.roundTracker === 20) {
            console.log(this.state.totalScore)
            setTimeout(() => {
              alert("Game Over! The total score is " + this.state.totalScore);
              this.handleRestartGame()
            },300)
          }
        })
      }
      setTimeout(reRender, 300)  
    };
  }

  handleRestartGame() {
    this.setState({
      board: [[0, 0, 0, 0], [0, 0, 0], [0, 0], [0]],
      round: 0,
      score1: null,
      score2: null,
      roundTracker: 0,
      totalScore: 0
    });
  }


  render() {
    let { round, score1, score2, roundTracker } = this.state;

    return (
      <div style={{ textAlign: "center", margin: "0" }}>
        <h1>Start Bowling</h1>
        <div style={{ width: "200px", margin: "0 auto", marginTop: "80px" }}>
          <div>
            {this.state.board[0].map((ele, ind) => {
              return <Pin value={ele} key={ind} />;
            })}
          </div>
          <div style={{ marginLeft: "2px" }}>
            {this.state.board[1].map((ele, ind) => {
              return <Pin value={ele} key={ind} />;
            })}
          </div>
          <div style={{ marginLeft: "3px" }}>
            {this.state.board[2].map((ele, ind) => {
              return <Pin value={ele} key={ind} />;
            })}
          </div>
          <div style={{ marginLeft: "4px" }}>
            {this.state.board[3].map((ele, ind) => {
              return <Pin value={ele} key={ind} />;
            })}
          </div>
        </div>
        <Scoreboard
          round={round}
          score1={score1}
          score2={score2}
          roundTracker={roundTracker}
        />
        <Keypad
          roundTracker={roundTracker}
          handlePressKey={this.handlePressKey}
          handleRoundChangeAndScore={this.handleRoundChangeAndScore}
        />
      </div>
    );
  }
}
