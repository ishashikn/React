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

/*
const heading = (
    <div id="container" className="container">
    <h1 id="heading" className = "heading"> Hello JSX Welcome</h1>
    <h2 id="heading2" className = "heading2"> Hello JSX Welcome</h2>
    </div>
)

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

*/



import React from "react";
import ReactDOM from "react-dom/client";



//react component
const title = (
    <h1>hello title</h1>
);

// functional components

const Heading = () =>(
    <div>
        {title}
        <h1>hello heading </h1>
        
    </div>
    
);

const Tail = () =>(
    <div>
        <Heading/>
        <h2>{100+100}</h2>
        <h3>I am Shashi</h3>
        <h1>Hello tailleee</h1>
        <p>Welcome to show Bother</p>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Tail/>);