import React, { Component } from "react";
import { Button } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Axios from "axios";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textArea: false,
      date: "",
      granularity: "",
      category: "",
      lang: "",
      description: ""
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(e) {
    let targetProperty = e.target.name;
    let value = e.target.value;
    this.setState({
      [targetProperty]: value
    });
  }

  handleEdit() {
    this.setState({
      textArea: !this.state.textArea
    });
  }

  handleSave(description) {
    let paramsForRequest = {};

    for (let key in this.state) {
      if (key.toString() === "textArea") {
        continue;
      }
      if (this.state[key] === "") {
        paramsForRequest[key] = this.props[key];
      } else {
        paramsForRequest[key] = this.state[key];
      }
    }

    // Axios.request({
    //   method: "get",
    //   url: `/events?description=${description}`,
    //   data: {
    //     limit: 10
    //   }
    // }).then(data => {
    //   console.log(data);
    // });
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
                  onChange={e => {
                    this.handleChange(e);
                  }}
                  type="textArea"
                  name="date"
                  id="exampleDate"
                  placeholder={date}
                  value={this.state.date}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Granularity">Granularity</Label>
                <Input
                  onChange={e => {
                    this.handleChange(e);
                  }}
                  type="textArea"
                  name="granularity"
                  id="exampleGranularity"
                  placeholder={granularity}
                  value={this.state.granularity}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Category">Category</Label>
                <Input
                  onChange={e => {
                    this.handleChange(e);
                  }}
                  type="textArea"
                  name="category"
                  id="exampleGranularity"
                  placeholder="insert a new Category"
                  value={this.state.category}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Language">Language</Label>
                <Input
                  onChange={e => {
                    this.handleChange(e);
                  }}
                  type="textArea"
                  name="language"
                  id="exampleGranularity"
                  placeholder="insert a new Language"
                  value={this.state.lang}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Text Area</Label>
                <Input
                  onChange={e => {
                    this.handleChange(e);
                  }}
                  value={description}
                  type="textarea"
                  name="description"
                  id="exampleText"
                />
              </FormGroup>
              <Button onClick={this.handleSave} color="warning">
                Submit
              </Button>
            </Form>
          )}
        </div>
      </div>
    );
  }
}
