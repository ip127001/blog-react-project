import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      color: 'red'
    }
  }

  render() {
    console.log('[Parent] rendered');

    return (
      <div className="container">
          <div>Counter:  {this.state.counter}</div>

          <button onClick={() => this.setState({counter: this.state.counter + 1})}>Click me to change counter</button>
          <select defaultValue="red" onChange={(e) => this.setState({color: e.target.value})}>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="grey">grey</option>
          </select>

          <Child color={this.state.color} />
      </div>
    )
  }
}

export default Parent;