/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import Axios from "axios";
import Info from "./Info.jsx";
import ReactPaginate from "react-paginate";
// eslint-disable-next-line react/require-render-returny

export default class Searchbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      data: [],
      pageCount: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleInputChange(e) {
    let newInputValue = e.target.value;
    this.setState({
      inputValue: newInputValue
    });
  }

  handleClick() {
    let query = this.state.inputValue;
    Axios.request({
      method: "get",
      url: `events?q=${this.state.inputValue}&_page=1`,
      data: {
        limit: 10
      }
    })
      .then(data => {
        console.log("this is data", data);
        // prettier-ignore
        let size = Object.values(data.headers).length
        let dataSize = Object.values(data.headers)[size - 2];
        this.setState({
          data: data.data,
          pageCount: Math.ceil(dataSize / 10)
        });
      })
      .catch(err => {
        console.log("there was an error", err);
      });
  }

  handlePageClick(e) {
    let page = e.selected + 1;
    let url = `events?q=${this.state.inputValue}&_page=${page}`;
    Axios.get(url)
      .then(data => {
        this.setState({
          data: data.data
        });
      })
      .catch(err => {
        console.log("there was an error", err);
      });
  }

  render() {
    let { data, pageCount } = this.state;
    return (
      <div id="searchBoxContainer">
        <div id="searchContainer">
          <InputGroup>
            <InputGroupAddon addonType="prepend" />
            <Input
              value={this.state.inputValue}
              onChange={e => {
                this.handleInputChange(e);
              }}
            />
          </InputGroup>
          <Button onClick={this.handleClick}>Find Fact</Button>
        </div>
        <div id="dataContainer">
          {data.length ? <Info data={data} /> : null}
          {!pageCount ? null : (
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          )}
        </div>
      </div>
    );
  }
}
