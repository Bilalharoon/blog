import React, { Component } from 'react';
import './App.css';
import Hero from './components/hero/hero'
import About from './components/AboutSection/About'


class App extends Component {
  render() {
    console.log("rendered")
    return (
      <div className="App">
        <Hero />
        <About />
      </div>
    );
  }
}

export default App;
