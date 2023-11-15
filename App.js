import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Body } from "./src/components/Body";
import Header from "./src/components/Header";


const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);
