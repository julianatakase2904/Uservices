import React, { Component } from "react";
import ComplaintPic from "../assets/Complaint.jpg";
import AuthService from "../services/auth.service";
import axios from 'axios';

var currentUser = AuthService.getCurrentUser();


export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeComplain = this.onChangeComplain.bind(this);
        this.onChangeComplaintDescription = this.onChangeComplaintDescription.bind(this);
        this.onChangeSucessful = this.onChangeSucessful.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitComplaint = this.onSubmitComplaint.bind(this);

        this.state = {
            user: [],
            serviceProviders: [],
            companyName: '',
            description: '',
            price: '',
            availability: '',
            profileImages: [],
            category: [],
            complaint: "false",
            complaintDescription: '', 
            success: ''
        };
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
    componentDidMount() {
        axios.get('http://localhost:8080/serviceProviders/')
            .then(response => {
                this.setState({ serviceProviders: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeComplain() {
        if (this.state.complaint === "false") {
            this.setState({
                complaint: "true"
            });
        } else {
            this.setState({
                complaint: "false"
            });
        }

    }

    onChangeCompanyName(e) {
        this.setState({
            companyName: e.target.value
        });
    }

    onChangeComplaintDescription(e) {
        this.setState({
            complaintDescription: e.target.value
        })
    }

    onChangeSucessful(e) {
        this.setState({ successful: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        axios.get('http://localhost:8080/serviceProviders/' + this.state.companyName)
            .then(response => {
                this.setState({
                    companyName: response.data.companyName,
                    description: response.data.description,
                    price: response.data.price,
                    availability: response.data.availability,
                    // category: response.data.category,
                    user: response.data.user,
                    profileImages: response.data.profileImages
                });
                console.log(response.data.category)
                axios.get('http://localhost:8080/categories/' + response.data.category)
                    .then(res => {
                        this.setState({ category: res.data });
                        console.log(res.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                console.log(response);
            })
            .catch(function (error) {
                console.log(error)
            })

        this.setState({ complaint: "false" });
    }

    onSubmitComplaint(e) {
        e.preventDefault();

        console.log(`Complaint Description: ${this.state.complaintDescription}` )

        const newComplaint = {
            complaintDescription: this.state.complaintDescription
        }

        axios.post('http://localhost:8080/complaints/' + currentUser.id, newComplaint)
            .then(res => console.log(res.data));

        this.setState({
            complaintDescription: '',
            successful: true
        })
    }


    render() {
        return (
            <div>
                <div className="w3-display-container w3-container" >
                    <img src={ComplaintPic} alt="ComplaintPic" style={{ width: '100%' }} />
                </div>
                <br />
                <div className="w3-container w3-black w3-padding-32 ">
                    <h1>
                        {currentUser.firstName}, make your Complaint
                    </h1>
                </div>
                <div className="w3-container w3-light-grey  w3-padding-32 " >
                    <form onSubmit={this.onSubmit} encType="multipart/form-data">
                        <div className="form-group" >
                            <p><label style={{ fontWeight: "bold" }}>Search for the Company Name</label></p>
                            <select id="companyNames" className="w3-input w3-border" onChange={this.onChangeCompanyName} value={this.state.companyName} type="text" style={{ width: '85%', display: "inline-block" }}>
                                <option value="">--Company Names--</option>
                                {this.state.serviceProviders.map(serviceProvider => <option>{serviceProvider.companyName}</option>)}
                            </select> &nbsp;&nbsp;
                            <button type="submit" className="w3-button w3-red ">Select</button>
                        </div>
                    </form>
                    {this.state.description && (
                        <div className="w3-container w3-white w3-padding-32" style={{ borderStyle: "groove", borderRadius: "10px", display: "table", width: "70%", marginLeft: "auto", marginRight: "auto" }}>
                            <h2>{this.state.companyName}</h2>
                            <p style={{ paddingLeft: "15px" }}><img
                                src={`/uploads/${this.state.profileImages[0]}`}
                                alt="..."
                                style={{ width: "40%", float: "left", paddingRight: "20px", paddingTop: "10px", paddingBottom: "20px" }} />
                            </p>
                            <div style={{ width: "50%", float: "left" }}>
                                <p><label style={{ fontWeight: "bold" }}>Service Provider Details</label></p>
                                <p>{this.state.category}</p>
                                <i className="fa fa-info-circle" style={{ display: "inline-block" }}></i> &nbsp;
                                <p style={{ display: "inline-block" }}>{this.state.description}</p>  <br />
                                <i className="fa fa-usd" style={{ display: "inline-block" }}></i> &nbsp;
                                <p style={{ display: "inline-block" }}>{parseFloat(this.state.price).toFixed(2)}</p>    <br />
                                <i className="fa fa-calendar" style={{ display: "inline-block" }}></i>  &nbsp;
                                <p style={{ display: "inline-block" }}>{this.state.availability}</p> <br />
                                <br />
                            </div>
                            <div className="w3-center" style={{ paddingBottom: "20px" }}>
                                <button type="submit" className="w3-button w3-red" value={this.state.complaint} onClick={this.onChangeComplain} >Add a Complaint</button>
                            </div>
                            {this.state.complaint === "true" && !this.state.successful && (
                                <form onSubmit={this.onSubmitComplaint}>
                                    <p><textarea
                                        type="text"
                                        className="w3-input w3-border"
                                        value={this.state.complaintDescription}
                                        onChange={this.onChangeComplaintDescription}
                                        rows="4"
                                        style={{ width: '100%' }}
                                        placeholder="Please explain your complaint" />
                                    </p>
                                    <div className="w3-center" >
                                        <button type="submit" className="w3-button w3-red" >Send</button>
                                    </div>
                                </form>
                            )}
                            {this.state.successful && (
                                <div className="form-group w3-center">
                                    <div
                                        className={
                                            this.state.successful ? "alert alert-success" : "alert alert-danger"
                                        }
                                        
                                        role="alert"
                                        style={{display: "inline-block"}}
                                    >
                                        
                                        {"Your complaint has been register successfully. We will get back to you shortly."}

                                    </div>
                                </div>
                            )}

                        </div>
                    )}
                </div>
            </div>
        )
    }
}

