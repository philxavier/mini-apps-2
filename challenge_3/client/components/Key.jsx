import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class Key extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { number } = this.props;
    return (
      <Button variant="contained" href="#contained-buttons">
        {number}
      </Button>
    );
  }
}
