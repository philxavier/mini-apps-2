import React, { Component } from "react";
import Info from "./Info.jsx";
import { Button } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class Infobox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { data } = this.props;
    // console.log("this is props", data);
    return (
      <div>
        {data.map((ele, ind) => {
          return (
            <Info key={ind} date={ele.date} description={ele.description} />
          );
        })}
      </div>
    );
  }
}
