import React, { Component } from 'react';
import axios from 'axios';
import "../App.css";

export default class EditApplicant extends Component {
    constructor(props){
        super(props);

        this.onChangeusername= this.onChangeusername.bind(this);
        this.onChangedescp=this.onChangedescp.bind(this);
        this.onChangepost=this.onChangepost.bind(this);
        this.onChangeemail=this.onChangeemail.bind(this);
        this.onChangeRating=this.onChangeRating.bind(this);
        this.onChangeRounds=this.onChangeRounds.bind(this);
        this.onChangestatus=this.onChangestatus.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            username: " ",
            users: [],
            contact: 0 ,
            email: " ",
            post:  " ",
            status: "Applied", 
            clearedRound: 0,
            rating: 0,
            description:  "Reason not Defined"
        };
    }

    componentDidMount() {
      axios.get('http://localhost:3001/applicants/'+ this.props.match.params.id)
      .then(response => {
          this.setState({
            username: response.data.username,
            users: [],
            contact:  response.data.contact,
            email: response.data.email,
            post: response.data.post,
            rating: response.data.rating,
            clearedRound: response.data.clearedRound,
            status: response.data.status,
            description: response.data.description
          })
       }
      )
      .catch((err) => {
        console.log(err);
      })
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

  onChangeemail(e){
    this.setState(
        {
          email: e.target.value
        }
    );
  }    
    onChangeRating(e){
      this.setState(
          {
            rating: e.target.value
          }
      );
    }    
    onChangeRounds(e){
      this.setState(
        {
          clearedRound: e.target.value
        }
      );
    }
    onChangestatus(e){
      this.setState(
          {
            status: e.target.value
          }
      );
    }
    onChangedescp(e){
      this.setState(
          {
            description: e.target.value
          }
      );
    }
    onSubmit(e){
      e.preventDefault();
      const applicant = {
        username: this.state.username,
        post: this.state.post,
        contact: this.state.contact,
        email:this.state.email,
        rating: this.state.rating,
        status:this.state.status,
        clearedRound: this.state.clearedRound,
        description:this.state.description
      };
        
      console.log(applicant);

      axios.post('http://localhost:3001/applicants/update/'+ this.props.match.params.id, applicant)
      .then(res => console.log(res.data))
      .catch( (err) =>{
        console.log(err);
      })  

      window.location = '/admin';        
    }

    render() {
      return (
        <div>
          <h3> Update Applicant Information</h3>
          <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
            <label>Name: </label>
            <input
                type = "name"
                disabled={true}
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
                disabled={true}
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeemail}>
            </input>
          </div>
        <div className="form-group">
              <label>Post: </label>
              <select
                  required
                  disabled={true}
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
        <label>Contact: </label>
        <input 
            type="tel" 
            disabled={true}
            className="form-control"
            value={this.state.contact}>
        </input>
      </div>


        <div className="form-group">
          <label>Status: </label>
          <select
              required
              className="form-control"
              value={this.state.status}
              onChange={this.onChangestatus} >
              <optgroup>
                <option value="Applied">Applied</option>
                <option value="Reviewed">Reviewed</option>
                <option value="Short-Listed">Short-Listed</option>
                <option value="Rejected">Rejected</option>
                <option value="Hired">Hired</option>
              </optgroup>
          </select>
        </div>

        <div className="form-group">
          <label>Rounds Cleared: </label>
          <select 
              required 
              type="number"
              className="form-control"
              value={this.state.clearedRound}
              onChange={this.onChangeRounds} >
            <optgroup>
              <option value="0">0</option>
              <option value="1">1</option>  
              <option value="2">2</option> 
              <option value="3">3</option> 
              <option value="4">4</option> 
              <option value="5">5</option> 
            </optgroup>    
          </select>
        </div>

        <div className="form-group">
          <label>Rating: </label>
          <select 
              type="number"
              required 
              className="form-control"
              value={this.state.rating}
              onChange={this.onChangeRating} >
            <optgroup>
              <option value="1">1</option>  
              <option value="2">2</option> 
              <option value="3">3</option> 
              <option value="4">4</option> 
              <option value="5">5</option> 
            </optgroup>    
          </select>
        </div>
        <div className="form-group">
        <label>Reason for Status Selection: </label>
        <input 
            type="textarea"
            className="form-control"
            value={this.state.description}
            onChange={this.onChangedescp}>
        </input>
      </div>

        <div className="form-group">
              <input type="submit" value=" Update Application" className="btn btn-dark" />
        </div>
        </form>
      </div>
    )
  }
}
 