import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./components/Welcome";
import Time from "./components/Time";

import "./styles.css";

const element = <Welcome name="Liam" />;

function App() {
  return (
    <React.Fragment>
      <Welcome />
      <Time className="time" />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
