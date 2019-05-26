import React, { Component } from "react";
import Key from "./Key.jsx";

export default class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keypad: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
    };
  }

  render() {
    let { handlePressKey, handleRoundChangeAndScore, roundTracker } = this.props;

    return (
      <div
        style={{
          top: "75%",
          right: "5%",
          marginRight: "5%",
          position: "absolute"
        }}
      >
        <div>
          {this.state.keypad[0].map((ele, ind) => {
            return (
              <Key
                handleRoundChangeAndScore={handleRoundChangeAndScore}
                handlePressKey={handlePressKey}
                num={ele}
                key={ind}
                roundTracker={roundTracker}
              />
            );
          })}
        </div>
        <div>
          {this.state.keypad[1].map((ele, ind) => {
            return (
              <Key
                handleRoundChangeAndScore={handleRoundChangeAndScore}
                handlePressKey={handlePressKey}
                num={ele}
                key={ind}
                roundTracker={roundTracker}
              />
            );
          })}
        </div>
        <div>
          {this.state.keypad[2].map((ele, ind) => {
            return (
              <Key
                handleRoundChangeAndScore={handleRoundChangeAndScore}
                handlePressKey={handlePressKey}
                num={ele}
                key={ind}
                roundTracker={roundTracker}
              />
            );
          })}
        </div>
        <div>
          {this.state.keypad[3].map((ele, ind) => {
            return (
              <Key
                handleRoundChangeAndScore={handleRoundChangeAndScore}
                handlePressKey={handlePressKey}
                num={ele}
                key={ind}
                roundTracker={roundTracker}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
