import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
export default class Navbar extends Component {

  render() {
    return (
    <div className="side"> 
      <nav className="navbar navbar-dark bg-dark ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div><Link to="/admin" className="navbar-brand">Hireboard</Link></div>
        <div className="collpase navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="navbar-item">
          <Link to="/admin" className="nav-link">Applicants</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin/create" className="nav-link">Create Application</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
      </div> 
    );
  }
}