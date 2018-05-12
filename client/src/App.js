import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="container">
           <Routes />
        </div>
      </div>
    );
  }
}

export default App;
