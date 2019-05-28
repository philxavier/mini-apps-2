import React, { Component } from "react";
import InnerScoreBoard from "./InnerScoreBoard.jsx";
import { green } from "@material-ui/core/colors";

export default class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { score1, score2, round, roundTracker, totalScore } = this.props;
    let rows = [];
    for (let i = 0; i < 10; i++) {
      rows.push(
        <InnerScoreBoard
          roundTracker={roundTracker}
          round={round}
          score1={score1}
          score2={score2}
          key={i}
          controlNumber={i + 1}
          totalScore={totalScore}
        />
      );
    }

    return (
      <div
        style={{
          width: "50%",
          height: "10%",
          border: "solid 1px black",
          marginLeft: "3%",
          display: "flex",
          position: "absolute",
          left: "0",
          top: "75%"
        }}
      >
        {rows}
      </div>
    );
  }
}
