import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Person  from './Person/Person';

class App extends Component {
state={
  Persons: [
    { name:"QQ",count:123},
    { name:"wechat",count:213},
    { name:"sina",count:321},
  ]
}

switchNameHander=()=>{
  // alert(123);

  this.setState({
    Persons: [
      { name:"QQ1",count:1231},
      { name:"wechat1",count:2131},
      { name:"sina1",count:3211},
    ]
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.switchNameHander}>更改状态</button>
         <Person name={this.state.Persons[0].name} count={this.state.Persons[0].count}/>
         <Person name={this.state.Persons[1].name} count={this.state.Persons[1].count}/>
         <Person name={this.state.Persons[2].name} count={this.state.Persons[2].count}>大家好，一起来学习React吧</Person>
        </header>
    
      </div>
    );
  }
}

export default App;
