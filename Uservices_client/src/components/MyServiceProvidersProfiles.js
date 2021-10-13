import React, { Component } from "react";
import MySPPic from "../assets/MyServiceProviderProfile.jpg"
import AuthService from "../services/auth.service";
import axios from 'axios';

var currentUser = AuthService.getCurrentUser();


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { serviceProviderProfiles: [], category: [] };
    }

    componentDidMount() {

        axios.get('http://localhost:8080/serviceProvidersById/' + currentUser.id)
            .then(res => {
                this.setState({ serviceProviderProfiles: res.data });
                console.log(res.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:8080/serviceProvidersById/' + currentUser.id)
            .then(response => {
                this.setState({ serviceProviderProfiles: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <div className="w3-display-container w3-container" >
                    <img src={MySPPic} alt="MySPPic" style={{ width: '100%' }} />
                </div>
                <br />
                <div className="w3-container w3-black w3-padding-32 ">
                    <h1>
                        {currentUser.firstName}, these are your Service Provider Profiles
                    </h1>
                </div>
                <div className="w3-container w3-light-grey  w3-padding-32 " >
                    {this.state.serviceProviderProfiles.map(serviceProviderProfile =>
                        <div>
                        <div className="w3-container w3-white w3-padding-32" style={{ borderStyle: "groove", borderRadius: "10px", display: "table", width: "70%", marginLeft: "auto", marginRight: "auto" }}>
                            <h2>{serviceProviderProfile.companyName}</h2>
                            <p style={{ paddingLeft: "15px" }}><img
                                src={`/uploads/${serviceProviderProfile.profileImages[0]}`}
                                alt="..."
                                style={{ width: "20%", float: "left", paddingRight: "20px", paddingTop: "10px", paddingBottom: "20px" }} />
                            </p>
                            <div style={{ width: "60%", float: "left" }}>
                                <p><label style={{ fontWeight: "bold" }}>Service Provider Details</label></p>
                                <i className="fa fa-info-circle" style={{ display: "inline-block" }}></i> &nbsp;
                                <p style={{ display: "inline-block" }}>{serviceProviderProfile.description}</p>  <br />
                                <i className="fa fa-usd" style={{ display: "inline-block" }}></i> &nbsp;
                                <p style={{ display: "inline-block" }}>{parseFloat(serviceProviderProfile.price).toFixed(2)}</p>    <br />
                                <i className="fa fa-calendar" style={{ display: "inline-block" }}></i>  &nbsp;
                                <p style={{ display: "inline-block" }}>{serviceProviderProfile.availability}</p> <br />
                                <br />
                            </div>
                        </div>
                        <br />
                        </div>
                    )}
                </div>


            </div>
        )
    }


}