import React, { Component } from 'react'

export default class child extends Component {
  constructor(props) {
    super(props);


  }

  add = 125;
  adc = 125;


  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((numbers) =>
      <li>{numbers}</li>
    );
    return <div>
      {this.props.data}
      {this.adc}
      {this.add}
      <button onClick={() => alert('谢谢')}>点我</button>
      <ul>{listItems}</ul>,
          </div>

  }
}

