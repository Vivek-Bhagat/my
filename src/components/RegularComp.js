import React, { Component } from "react";

export class RegularComp extends Component {
  render() {
    console.log("Regular component render");

    return <div>RegularComponent {this.props.name}</div>;
  }
}

export default RegularComp;
