import * as React from "react";
import * as ReactDOM from "react-dom";

let root = document.getElementById("root");
let props = { className: "title" };
let element = React.createElement("div", props, "hello");
console.log(1312312);
ReactDOM.render(element, root);
