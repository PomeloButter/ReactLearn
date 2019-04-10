import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Person  from './Person/Person';

class App extends Component {
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
         <Person name="Pomelobutter" count="30"/>
         <Person name="Yuuko" count="20"/>
         <Person name="Jesse" count="10">大家好，一起来学习React吧</Person>
        </header>
    
      </div>
    );
  }
}

export default App;
