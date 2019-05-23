import React, { Component } from "react";
import { Button } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { date, description } = this.props;

    return (
      <div>
        <div id="cardInfo">
          <h3>Date</h3>
          <p>{date}</p>
          <h3>Description</h3>
          <p ref={this.myRef}>{description}</p>
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
          {!this.state.textArea ? null : (
            <Form>
              <FormGroup>
                <Label for="exampleText">Edit the Description</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </Form>
          )}
        </div>
      </div>
    );
  }
}
