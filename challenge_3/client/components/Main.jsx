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
      roundTracker: 0
    };
    this.handlePressKey = this.handlePressKey.bind(this);
    this.handleRoundChangeAndScore = this.handleRoundChangeAndScore.bind(this);
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
    if (newRoundTracker % 2 === 0) {
      newRoundTracker++;
      this.setState({
        round: this.state.round + 1,
        score1: score,
        roundTracker: newRoundTracker
      });
    } else {
      newRoundTracker++;
      var reRender = () => {
        this.setState({
          score2: score,
          roundTracker: newRoundTracker,
          board: [[0, 0, 0, 0], [0, 0, 0], [0, 0], [0]]
        });
      };
      setTimeout(reRender, 200);
    }
  }

  render() {
    let { round, score1, score2 } = this.state;

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
        <Scoreboard round={round} score1={score1} score2={score2} />
        <Keypad
          round={round}
          handlePressKey={this.handlePressKey}
          handleRoundChangeAndScore={this.handleRoundChangeAndScore}
        />
      </div>
    );
  }
}
