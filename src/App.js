import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ApplicantList from "./components/applicant-list.component";
import EditApplicant from "./components/edit-applicant.component";
import CreateApplicants from "./components/create-applicant.component";
import CreateUsers from "./components/create-user.component";
import ApplicantDashboard from "./components/ApplicantDashboard";


function App() {
  return (
    <Router>
      <div className="row">
        <div className="header col-md-2 col-sm-3"><Navbar/></div>
        <div className="container col-md-10 col-sm-9">
        <Route path="/" exact component={ApplicantDashboard} />  
        <Route path="/admin" exact component={ApplicantList} />
        <Route path="/edit/:id" exact component={EditApplicant} />
        <Route path="/admin/create" exact component={CreateApplicants} />
        <Route path="/user" exact component={CreateUsers} />
        </div>
      </div>
    </Router> 
  );
}

export default App;
