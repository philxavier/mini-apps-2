import React, { Component } from "react";
import { Button } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(description) {
    console.log(description);
  }

  handleSave() {}
  render() {
    let { data } = this.props;
    // console.log("this is props", data);
    return (
      <div>
        {this.props.data.map((ele, ind) => {
          return (
            <div key={ind} id="cardInfo">
              <h3>Date</h3>
              <p>{ele.date}</p>
              <h3>Description</h3>
              <p ref={this.myRef}>{ele.description}</p>
              <Button
                onClick={() => {
                  this.handleEdit(ele.description);
                }}
                id="buttonEdit"
                color="danger"
              >
                Edit
              </Button>
              <Button id="buttonSave" color="info">
                Save!
              </Button>
            </div>
          );
        })}
      </div>
    );
  }
}
