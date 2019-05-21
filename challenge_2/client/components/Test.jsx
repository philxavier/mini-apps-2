import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "Boston",
          "worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ]
      }
    };
  }

  componentDidMount() {
    axios
      .get("/prices")
      .then(data => {
        console.log("this is data", data);
      })
      .catch(err => {
        console.log("there was an error", err);
      });
  }

  render() {
    return <Line data={this.state.data} options={{ responsive: true }} />;
  }
}
