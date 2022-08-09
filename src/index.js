import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const cssStyle = {};

let curr_date = new Date();
curr_date = curr_date.getHours();

let greeting = "";

if (curr_date > 1 && curr_date < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curr_date >= 12 && curr_date < 17) {
  greeting = "Good AfterNoon";
  cssStyle.color = "Orange";
} else if (curr_date >= 17 && curr_date < 20) {
  greeting = "Good Evening";
  cssStyle.color = "Brown";
} else {
  greeting = "Good night";
  cssStyle.color = "Black";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Hello sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
