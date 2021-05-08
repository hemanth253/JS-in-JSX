import React from "react";
import ReactDOM from "react-dom";

const fname = "Hemanth";
const lname = "Reddy";

var date = new Date();

ReactDOM.render(
  <div>
    <p>Created by {fname + " " + lname}</p>
    <p>Copyright {date.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
