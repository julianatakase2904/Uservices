import React, { Component } from "react";
import axios from 'axios';
import AuthService from "../services/auth.service";
import ProfilePic from "../assets/Profile.jpg";

var currentUser = AuthService.getCurrentUser();

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { user: [], role: [] };
  }

  componentDidMount() {
    var id = '';
    axios.get('http://localhost:8080/users/' + currentUser.id)
      .then(res => {
        this.setState({ user: res.data });
        id = this.state.user.roles;
        axios.get('http://localhost:8080/roles/' + id)
          .then(res => {
            this.setState({ role: res.data });
            console.log(res.data)
          })
          .catch(function (error) {
            console.log(error);
          })
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  componentDidUpdate() {
    axios.get('http://localhost:8080/users/' + currentUser.id)
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <div className="w3-display-container w3-container" >
          <img src={ProfilePic} alt="LoginPic" style={{ width: '100%' }} />
        </div>
        <br />
        <div className="w3-container w3-black w3-padding-32 ">
          <h1>
            {this.state.user.firstName}'s Profile Page
          </h1>
        </div>
        <div className="w3-container w3-light-grey  w3-padding-32 ">
          <div className="form-group">
            <a href="/editUserProfile"><button className="w3-button w3-red w3-right">Edit</button></a>
          </div>
          <table style={{ width: "80%", marginLeft: "auto", marginRight: "auto", lineHeight: "40px" }}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.user.firstName}</td>
                <td>{this.state.user.lastName}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.user.email}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Address</th>
                <th>Province</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.user.address}</td>
                <td>{this.state.user.province}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textTransform: 'capitalize' }}>
                <td>
                  {this.state.role.name}
                </td>
              </tr>
            </tbody>
          </table>
          {
            this.state.role.name === "service provider" ? (
              <div className="form-group">
                <a href="/registerServiceProviderProfile"><button className="w3-button w3-red w3-right">Service Provider Profile</button></a>
              </div>) : (
              <p></p>
            )
          }

        </div>


      </div>
    )
  }
}



