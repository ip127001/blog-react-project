import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      color: ["red"]
    };
  }

  render() {
    return (
      <div className="container">
        <select
          onChange={(e) => {
            console.log(this.state.color);
            let updatedColor = this.state.color;
            if (Array.isArray(this.state.color)) {
              updatedColor.push(e.target.value);
            }
            return this.setState({ color: updatedColor });
          }}
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="grey">grey</option>
        </select>

        <Child color={this.state.color} />
      </div>
    );
  }
}

export default Parent;
