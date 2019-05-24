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
    return (
      <div
        style={{
          marginTop: "17%",
          float: "right",
          marginRight: "5%"
        }}
      >
        <div>
          {this.state.keypad[0].map((ele, ind) => {
            return <Key number={ele} key={ind} />;
          })}
        </div>
        <div>
          {this.state.keypad[1].map((ele, ind) => {
            return <Key number={ele} key={ind} />;
          })}
        </div>
        <div>
          {this.state.keypad[2].map((ele, ind) => {
            return <Key number={ele} key={ind} />;
          })}
        </div>
        <div>
          {this.state.keypad[3].map((ele, ind) => {
            return <Key number={ele} key={ind} />;
          })}
        </div>
      </div>
    );
  }
}
