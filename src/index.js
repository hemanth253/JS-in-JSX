import React from "react";
import ReactDOM from "react-dom";

const fname = "Hemanth";
const lname = "Reddy";

var date = new Date();

function getText() {
  return <div>qwerty</div>;
}
function GetYear() {
  return date.getFullYear();
}
function GetFun(props) {
  return <p>{props.name}</p>;
}
function GetFun2(props) {
  return props.name;
}

const count = 0;

const obj = {
  name: "nck",
  roll: 23
};

const arr = [1, 0, 121];

ReactDOM.render(
  <div>
    <p>Created by {fname + " " + lname}</p>
    <p>Copyright {date.getFullYear()}</p>
    <p>Copyright {GetYear()}</p>
    <GetYear />
    <GetFun name="hemanth" />
    <GetFun2 name="reddy" />
    <div>{getText()}</div>
    <div>{count}</div>
    <div>{obj.name}</div>
    <div>{obj.roll}</div>
    <div>{arr}</div>
  </div>,
  document.getElementById("root")
);
