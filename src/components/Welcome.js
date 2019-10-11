import React, { Component } from "react";

//It is {new Date().toLocaleTimeString()}.

export default class Welcome extends Component {
  render() {
    const time = <h2>It is {new Date().toLocaleTimeString()}.</h2>;
    return (
      <React.Fragment>
        <h1>Welcome</h1>
      </React.Fragment>
    );
  }
}
