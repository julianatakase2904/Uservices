import React, { Component } from "react";
import AuthService from "../services/auth.service";
import ProfilePic from "../assets/Profile.jpg";
import axios from "axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";


const currentUser = AuthService.getCurrentUser();
const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia',
    'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'];


export default class EditUserProfile extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeProvince = this.onChangeProvince.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeServiceProvider = this.onChangeServiceProvider.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            province: '',
            password: '',
            serviceProvider: '',
        }
    }


    componentDidMount() {

        axios.get('http://localhost:8080/users/' + currentUser.id)
            .then(response => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    address: response.data.address,
                    province: response.data.province,
                    password: response.data.password,
                    serviceProvider: response.data.serviceProvider
                })
            })
            .catch(function (error) {
                console.log(error)
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

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }
    onChangeProvince(e) {
        this.setState({
            province: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangeServiceProvider(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value)
    
        this.setState({
          serviceProvider: value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            address: this.state.address,
            province: this.state.province,
            password: this.state.password,
            serviceProvider: this.state.serviceProvider
        }
        axios.post('http://localhost:8080/update/' + currentUser.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/profile')
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
                        Edit your Profile
                    </h1>
                </div>
                <div className="w3-container w3-light-grey  w3-padding-32 ">

                    <Form onSubmit={this.onSubmit} >
                        <div>
                            <div className="form-group">
                                <p><label style={{fontWeight:"bold"}}>First Name</label></p>
                                <p><Input
                                    type="text"
                                    className="w3-input w3-border"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.onChangeFirstName}
                                    style={{ width: '100%' }}
                                    placeholder={currentUser.firstName}
                                />
                                </p>
                            </div>
                            <div className="form-group">
                            <p><label style={{fontWeight:"bold"}}>Last Name</label></p>
                                <Input
                                    type="text"
                                    className="w3-input w3-border"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.onChangeLastName}
                                    style={{ width: '100%' }}
                                    placeholder={currentUser.lastName}
                                />
                            </div>
                            <div className="form-group">
                            <p><label style={{fontWeight:"bold"}}>Email</label></p>
                                <Input
                                    type="text"
                                    className="w3-input w3-border"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}

                                    placeholder={currentUser.email}
                                />
                            </div>
                            <div className="form-group">
                            <p><label style={{fontWeight:"bold"}}>Address</label></p>
                                <Input
                                    type="text"
                                    className="w3-input w3-border"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.onChangeAddress}
                                    placeholder={currentUser.address}
                                />
                            </div>
                            <div className="form-group">
                            <p><label style={{fontWeight:"bold"}}>Province</label></p>
                                <label>
                                    <select id="province" className="w3-input w3-border" onChange={this.onChangeProvince} value={this.state.province} type="text" >
                                        <option value="">--Please select a Province--</option>
                                        {provinces.map(province => <option value={province}>{province}</option>)}
                                    </select>
                                </label>
                            </div>
                            <div className="form-group">
                            <p><label style={{fontWeight:"bold"}}>Password</label></p>
                                <Input
                                    type="password"
                                    className="w3-input w3-border"
                                    name="password"
                                    value={currentUser.password}
                                    onChange={this.onChangePassword}
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    <p style={{fontWeight:"bold"}}>Do you want to become a Service Provider?  &nbsp;
                                        <input type="checkbox" id="serviceProvider"
                                            value={this.state.serviceProvider}
                                            onChange={this.onChangeServiceProvider}
                                            name="serviceProvider"
                                        /></p>
                                </label>

                            </div>

                            <div className="form-group">
                                <button type="submit" className="w3-button w3-red w3-margin-bottom">Edit</button>
                            </div>
                        </div>

                    </Form>
                </div>
            </div>
        )
    }
}


