import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class Key extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { handlePressKey, num, handleRoundChangeAndScore } = this.props;
    return (
      <Button
        onClick={() => {
          handlePressKey(num);
          handleRoundChangeAndScore(num);
        }}
        variant="contained"
        href="#contained-buttons"
      >
        {num}
      </Button>
    );
  }
}
