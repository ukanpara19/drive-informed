import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Home />
      </div>
    );
  }
}

export default App;
