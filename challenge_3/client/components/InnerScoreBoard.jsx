import React, { Component } from "react";

export default class InnerScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score1: null,
      score2: null,
      total: null,
      totalScore: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    //there has to be a link between the round and the right innerscoreboard
    let {
      controlNumber,
      round,
      score1,
      score2,
      roundTracker,
      totalScore
    } = this.props;

    if (controlNumber === round) {
      if (prevProps.roundTracker !== this.props.roundTracker) {
        if (roundTracker % 2 !== 0) {
          this.setState({
            score1: score1
          });
        } else {
          var finalResult = score1 + score2;
          if (finalResult > 10) {
            finalResult = 10;
          }
          this.setState({
            score2: score2,
            totalScore: totalScore
          });
        }
      }
    }

    let reRenderInnerScore = () => {
      this.setState({
        score1: null,
        score2: null,
        totalScore: null
      });
    };

    if (roundTracker === 20) {
      setTimeout(reRenderInnerScore, 200);
    }
  }

  render() {
    let { score1, score2, totalScore } = this.state;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderLeft: "solid 1px black"
          //   margin: "2%",
        }}
      >
        <div>{score1 ? score1 : null}</div>
        <div>{score2 ? score2 : null}</div>
        <div>{totalScore ? totalScore : null}</div>
      </div>
    );
  }
}
