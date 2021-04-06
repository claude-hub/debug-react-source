// import { React, Component } from "../CONST";
import * as React from "react";
import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return <div className="class border">{this.props.name}</div>;
  }
}

function FunctionComponent({ name }) {
  return (
    <div className="function border">
      {name}
      <button onClick={() => console.log("omg")}>click</button>
    </div>
  );
}

const jsx = (
  <div className="box border">
    <FunctionComponent name="函数组件" />
    <ClassComponent name="class组件" />
  </div>
);

export default jsx;
