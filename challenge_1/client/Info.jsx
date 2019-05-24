import React, { Component } from "react";
import { Button } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Axios from "axios";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textArea: false,
      date: this.props.date,
      granularity: this.props.granularity,
      category: this.props.category,
      lang: this.props.lang,
      description: this.props.description
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.setState({
      textArea: !this.state.textArea
    });
  }

  handleSave(description) {
    Axios.request({
      method: "get",
      url: `/events?description=${description}`,
      data: {
        limit: 10
      }
    }).then(data => {
      console.log(data);
    });

    //   GET /posts?title=json-server&author=typicode
  }

  render() {
    let { date, description, granularity, category, lang } = this.props;

    return (
      <div>
        <div id="cardInfo">
          <h3>Date</h3>
          <p>{date}</p>
          <h3>Granularity</h3>
          <p>{granularity}</p>
          <h3>Category</h3>
          <p>{category}</p>
          <h3>Language</h3>
          <p>{lang}</p>
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
          {!this.state.textArea ? null : (
            <Form>
              <FormGroup>
                <Label for="Date">Date</Label>
                <Input
                  type="textArea"
                  name="text"
                  id="exampleDate"
                  placeholder="date placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Granularity">Granularity</Label>
                <Input
                  type="textArea"
                  name="text"
                  id="exampleGranularity"
                  placeholder="insert a new granularity"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Category">Category</Label>
                <Input
                  type="textArea"
                  name="text"
                  id="exampleGranularity"
                  placeholder="insert a new Category"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Language">Language</Label>
                <Input
                  type="textArea"
                  name="text"
                  id="exampleGranularity"
                  placeholder="insert a new Language"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input
                  value={description}
                  type="textarea"
                  name="text"
                  id="exampleText"
                />
              </FormGroup>
              <Button color="secondary">Submit</Button>
            </Form>
          )}
        </div>
      </div>
    );
  }
}
