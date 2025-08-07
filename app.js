//const heading = React.createElement("h1",{id:"head"},"hello world from react");
//console.log(heading); //objects
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);





/*
const parent = React.createElement(
    "div",
    {id:"parent"}, 
    React.createElement(
        "div",
        {id:"child"}, 
        React.createElement("h1",{},"I am h1 Tag")));

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

import React from "react";
import ReactDOM from "react-dom/client";

/*
const heading = React.createElement(
    "div",
    {id:"heading"},
    [
        React.createElement("h1",{id:"h1Tag"},"Hello H1 tag"),
        React.createElement("h2",{id:"h2Tag"},"Hello H2 tag")

    ]
);
*/


const heading = (
    <div id="container" className="container">
    <h1 id="heading" className = "heading"> Hello JSX Welcome</h1>
    <h2 id="heading2" className = "heading2"> Hello JSX Welcome</h2>
    </div>
)

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);