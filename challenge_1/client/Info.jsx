import React, { Component } from "react";
import { Button } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Axios from "axios";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textArea: false
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.setState({
      textArea: !this.state.textArea
    });
  }

  handleSave(description) {
    alert("oooi");
    //   Axios.get(`/events?description=${this.state.inputValue}&_page=1`')
    //   GET /posts?title=json-server&author=typicode
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
              this.handleEdit(description);
            }}
            id="buttonEdit"
            color="danger"
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              this.handleSave(description);
            }}
            id="buttonSave"
            color="info"
          >
            Save!
          </Button>
          {!this.state.textArea ? null : (
            <Form>
              <FormGroup>
                <Label for="exampleText">Edit the Description</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  value={description}
                />
              </FormGroup>
            </Form>
          )}
        </div>
      </div>
    );
  }
}
