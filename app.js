//const heading = React.createElement("h1",{id:"head"},"hello world from react");
//console.log(heading); //objects
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);






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