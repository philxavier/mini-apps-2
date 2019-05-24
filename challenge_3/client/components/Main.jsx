import React, { Component } from "react";
import Pin from "./Pin.jsx";
import Keypad from "./Keypad.jsx";
import HelperFuncs from "../../HelperFuncs.js";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[0, 0, 0, 0], [0, 0, 0], [0, 0], [0]]
    };
    this.handlePressKey = this.handlePressKey.bind(this);
  }

  handlePressKey(num) {
    let newBoard = this.state.board.slice();
    console.log("this is number", num);
    // newBoard = HelperFuncs.removePins(count, newBoard);
    // this.setState({
    //   board: newBoard
    // });
  }

  render() {
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
        <Keypad handlePressKey={this.handlePressKey} />
      </div>
    );
  }
}
