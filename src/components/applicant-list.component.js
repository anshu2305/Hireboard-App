import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import '../App.css';

//import { response } from 'express';
const Applicant = props =>(
    <tr>
        <td>{props.applicant.username}</td>
        <td>{props.applicant.post}</td>
        <td>{props.applicant.email}</td>
        <td>{props.applicant.contact}</td>
        <td>{props.applicant.createdAt.substring(0,10)}</td>
        <td>
            <Link to = {"/edit/" + props.applicant._id}>Review</Link>
        </td>
        <td>{props.applicant.rating}</td>
        <td>{props.applicant.clearedRound}</td>
        <td>{props.applicant.status}</td>
    </tr>

)

export default class ApplicantList extends Component {
    constructor(props){
        super(props);

        this.state={
            applicants: []
        };

    }

    componentDidMount(){
        axios.get("http://localhost:3001/applicants")
        .then(response => {
            this.setState({applicants : response.data})
        })
        .catch((err) => {
            console.log(err) ;
        })
    }

    applicantList(){
        return( this.state.applicants.map(currentapplicant => {
            return <Applicant applicant={currentapplicant}  key={currentapplicant._id} />;
        })
        );
    }

    render() {
      return (
            <div>
                <h3>Applicant Log</h3>
                <table className="table shadow-lg p-4 mb-4 bg-white table-responsive table-hover rounded ">
                <thead className="thead-dark rounded">
                    <tr className="rounded">
                    <th>Name</th>
                    <th>Post</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Applied Date</th>
                    <th>Actions</th>
                    <th>Rating</th>
                    <th>Rounds Cleared</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody className="rounded">
                    { this.applicantList() }
                </tbody>
                </table>
                
            </div>
            
    );
    }
}