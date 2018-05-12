import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">
        React App
      </Link>
      <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/home" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/counter" className="navbar-link">
              Counter
            </Link>  
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;