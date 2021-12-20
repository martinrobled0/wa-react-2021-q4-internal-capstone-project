import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import ShopApp from "./ShopApp";

ReactDOM.render(
  <>
    <Router>
      <ShopApp />
    </Router>
  </>,
  document.getElementById("root")
);
