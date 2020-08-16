import React from "react";

class Child extends React.PureComponent {
  render() {
    return (
      <div className="child">
        <hr />
        Selected Color:
        <ul>
          {this.props.color.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Child;
