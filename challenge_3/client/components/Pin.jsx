import React, { Component } from "react";

export default class Pin extends Component {
  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            background: "black",
            margin: "2px",
            borderRadius: "100%"
            //   display: "inline"
          }}
        />
      </div>
    );
  }
}
