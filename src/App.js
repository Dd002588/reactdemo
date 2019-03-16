import React, { Component } from 'react';
import Child from './child'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>这是首页</p>
        <Child data="123"/>
      </div>
    );
  }
}

export default App;
