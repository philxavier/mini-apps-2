import React, { Component } from "react";
import Info from "./Info.jsx";

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
            <Info
              key={ind}
              lang={ele.lang}
              granularity={ele.granularity}
              category={ele.category1}
              date={ele.date}
              description={ele.description}
            />
          );
        })}
      </div>
    );
  }
}
