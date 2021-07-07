import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
export default class Navbar extends Component {

  render() {
    return (
    <div className="sidebar"> 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
      <nav className="navbar navbar-dark bg-dark" id="collapsibleNavbar">
        <div><Link to="/admin" className="navbar-brand">Applyboard</Link></div>
        <div className="collpase navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="navbar-item">
          <Link to="/admin/create" className="nav-link">Create Application</Link>
          </li>
        </ul>
        </div>
      </nav>
    </div> 
    );
  }
}