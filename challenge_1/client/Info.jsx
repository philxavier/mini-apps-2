import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Info extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { data } = this.props;
    console.log("this is props", data);
    return (
      <div>
        {this.props.data.map((ele, ind) => {
          return (
            <div key={ind} id="cardInfo">
              <h3>Date</h3>
              <p>{ele.date}</p>
              <h3>Description</h3>
              <p>{ele.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
