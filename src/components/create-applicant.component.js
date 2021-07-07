import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



export default class CreateApplicants extends Component {
    constructor(props){
        super(props);

        this.onChangeusername= this.onChangeusername.bind(this);
        this.onChangecontact=this.onChangecontact.bind(this);
        this.onChangepost=this.onChangepost.bind(this);
        this.onchangeDate=this.onchangeDate.bind(this);
        this.onChangeemail=this.onChangeemail.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            username: " ",
            description: " ",
            users: [],
            contact:  " ",
            email: " ",
            post:  " "
        };
    }

    componentDidMount() {
      this.setState({
        users: ["test user"],
        username: "test user"
      });
    }

    onChangeusername(e){
        this.setState(
            {
                username: e.target.value
            }
        );
    }

    onChangepost(e){
      this.setState(
          {
              post: e.target.value
          }
      );
  }
    onchangeDate(Date){
        this.setState(
            {
              date: Date
            }
        );
    }
    onChangecontact(e){
      this.setState(
          {
            contact: e.target.value
          }
      );
    }
    onChangeemail(e){
      this.setState(
          {
            email: e.target.value
          }
      );
    }
 
    onSubmit(e){
      e.preventDefault();
      const applicant = {
          username: this.state.username,
          date: this.state.date,
          post: this.state.post,
          contact: this.state.contact,
          email:this.state.email
      };
        
      console.log(applicant);

      axios.post('http://localhost:3001/applicants/add', applicant)
      .then(res => console.log(res.data));
 

      window.location = '/admin';        
    }

    render() {
      return (
        <div className="container">
          <h3> New applicant</h3>
          <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Username: </label>
              <input
                  type="name"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeusername}>
              </input> 
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input 
                  type="email" 
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeemail}
              >
              </input>
                  
            </div>
            <div className="form-group">
              <label>Post: </label>
              <select
                  required
                  className="form-control"
                  value={this.state.post}
                  onChange={this.onChangepost} >
                  <optgroup>
                    <option value="none">None</option>
                    <option value="Web Dev">Web</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="Finance Analyst">Finance Analyst</option>
                    <option value="Human Resource">HR</option>
                  </optgroup>
              </select>
                  
            </div>
            <div className="form-group">
              <label>Applied Date: </label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onchangeDate}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Contact: </label>
              <input 
                  type="tel"
                  required 
                  className="form-control"
                  value={this.state.contact}
                  onChange={this.onChangecontact} >
              </input>
            </div>

            <div className="form-group">
              <input type="submit" value=" Create Application" className="btn btn-dark" />
            </div>
            
          </form>
      </div>
    )
  }
}
 