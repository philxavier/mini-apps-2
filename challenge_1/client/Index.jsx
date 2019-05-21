/* eslint-disable no-undef */
import ReactDOM from "react-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
// eslint-disable-next-line import/no-named-as-default
import Searchbox from "./Searchbox";

ReactDOM.render(<Searchbox perPage={10} />, document.getElementById("App"));
