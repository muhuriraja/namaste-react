import React from "react";
import  ReactDOM  from "react-dom";

{
  /* <div id="parent">
  <div id="child">
    <h1>I'm H1 tag</h1>
    <h2>I'm H2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm H1 tag inside child2</h1>
    <h2>I'm H2 tag inside child2</h2>
  </div>
</div>; */
}

// React.createElement => ReactElement-Js Object => HTMLElement ( render)

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm H1 Tag"),
//     React.createElement("h2", {}, "I'm H2 Tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm H1 tag inside child2"),
//     React.createElement("h2", {}, "I'm H2 tag inside child2"),
//   ])
// ]
// );

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React"
// );

// JSX => Babel React.createElement => ReactElement - JS Object => HTMLElement ( render)

// const jsxHeading = (
// <h1 className="head"> 
// Namasthe javascript inside JSX
// </h1>
// );

// console.log(jsxHeading);

const Title =() => (
    <h1 className="head"> Welcome to Namasthe javascript from 1st fn component</h1>
)

const FunctionalComponent2 = () =>(
    <div className="container">
        <Title/>
       <Title></Title>
       
        <h1>Welcome to 2nd fn component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent2/>);