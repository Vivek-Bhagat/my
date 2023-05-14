import React from 'react';
import ChildComponent from './childComponent';
import { Component } from 'react';
class ParentComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this);
  }
  greetParent() {
    alert(`Hello ${this.state.parentName}`)
  }
  render() {
    return (
      <div> < ChildComponent greetHandler={this.greetParent} /></div>
    )
  }
}

export default ParentComponent