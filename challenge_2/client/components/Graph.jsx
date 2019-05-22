import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: null,
        datasets: null
      }
    };
  }

  componentDidMount() {
    axios
      .get("/prices")
      .then(data => {
        // console.log("this is data", data);
        let targetProperty = data.data.bpi;
        let labels = Object.keys(targetProperty);
        let prices = Object.values(targetProperty);
        this.setState({
          data: {
            labels: labels,
            datasets: [
              {
                label: "Price of Bitcoin in USD",
                data: prices
              }
            ]
          }
        });
      })
      .catch(err => {
        console.log("there was an error retrieving info from server", err);
      });
  }

  render() {
    return (
      <div
        style={{
          width: "40%",
          height: "40%",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <h1>Price of Bitcon for April/2019</h1>
        <Line data={this.state.data} options={{ responsive: true }} />
      </div>
    );
  }
}
