import React from "react";

class Child extends React.Component {
  delay() {
    console.log("[Delay] function called");

    for (let i = 0; i < 800000000; i++) {
      i++;
    }
    return "delayed text";
  }

  /* remove this function to observe the delayed change in counter value*/
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color === nextProps.color) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log("[Child] rendered");

    return (
      <div className="child">
        <hr />
        <div>{this.delay()}</div>
        Selected Color: {this.props.color}
      </div>
    );
  }
}

export default Child;
