import React, { Component } from "react";
import axios from 'axios';
import AuthService from "../services/auth.service";
import ProfilePic from "../assets/Profile.jpg";


const currentUser = AuthService.getCurrentUser();
const daysOfWeek = ['Week Days', 'Weekends', 'Week Days and Weekends'];
const categoriesArray = (['Pet', 'Housekeep', 'Beauty', 'Appliance Repair', 'House Repair', 'Personal Care', 'Health Care', 'Other Services']);


export default class RegisterServiceProviderProfile extends Component {

    constructor(props) {
        super(props);

        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeAvailability = this.onChangeAvailability.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeProfileImages = this.onChangeProfileImages.bind(this);
        this.onChangeSucessful = this.onChangeSucessful.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            companyName: '',
            description: '',
            price: '',
            availability: '',
            category: '',
            profileImages: '',
            successful: ''
        };

    }

    onChangeCompanyName(e) {
        this.setState({
            companyName: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeAvailability(e) {
        this.setState({
            availability: e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({ category: e.target.value })
    }

    onChangeProfileImages(e) {
        this.setState({ profileImages: e.target.files });
    }

    onChangeSucessful(e) {
        this.setState({ successful: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        var formData = new FormData();

        formData.append("companyName", this.state.companyName);
        formData.append("description", this.state.description);
        formData.append("price", this.state.price);
        formData.append("availability", this.state.availability);
        formData.append("category", this.state.category);

        for (const key of Object.keys(this.state.profileImages)) {
            formData.append('profileImages', this.state.profileImages[key])
        }

        axios.get('http://localhost:8080/categories/' + this.state.category)
            .then(response => {
                axios.post('http://localhost:8080/serviceProviderRegister/' + currentUser.id + "/" + response.data._id, formData)
                    .then(res => console.log(res.data)
                        .catch(error => console.error(error)));

                this.setState({
                    companyName: '',
                    description: '',
                    price: '',
                    availability: '',
                    profileImages: [],
                    successful: true
                })
            });
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
                        {currentUser.firstName}'s Service Provider Registration Page
                    </h1>
                </div>
                <div className="w3-container w3-light-grey  w3-padding-32 ">

                    {!this.state.successful && (
                        <form onSubmit={this.onSubmit} encType="multipart/form-data">

                            <div className="form-group">
                                <p><label style={{ fontWeight: "bold" }}>Category</label></p>
                                <select id="category" onChange={this.onChangeCategory} value={this.state.category} className="w3-input w3-border" type="text" style={{ width: '100%', display: "inline-block" }}>
                                    <option value="">--Category--</option>
                                    {categoriesArray.map(category => <option>{category}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <p><label style={{ fontWeight: "bold" }}>Company Name</label></p>
                                <p><input
                                    type="text"
                                    className="w3-input w3-border"
                                    name="companyName"
                                    value={this.state.companyName}
                                    onChange={this.onChangeCompanyName}
                                    style={{ width: '100%' }}
                                    placeholder="Insert your Company Name"
                                />
                                </p>
                            </div>
                            <div className="form-group">
                                <p><label style={{ fontWeight: "bold" }}>Service Description</label></p>
                                <p><textarea
                                    type="text"
                                    className="w3-input w3-border"
                                    name="description"
                                    rows="4"
                                    style={{ width: '100%' }}
                                    placeholder="Describe your Service"
                                    value={this.state.description}
                                    onChange={this.onChangeDescription}
                                />
                                </p>
                            </div>
                            <p style={{ paddingLeft: "60px" }}><label style={{ fontWeight: "bold", width: '48%', display: "inline-block" }}>Price Per Hour</label>
                                <label style={{ fontWeight: "bold", width: '28%', display: "inline-block" }}>Availability</label></p>
                            <div className="form-group w3-center" >

                                <input
                                    type="text"
                                    className="w3-input w3-border"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.onChangePrice}
                                    style={{ width: '45%', display: "inline-block" }}
                                    placeholder="Price per hour"
                                />&nbsp;&nbsp;

                                <select
                                    id="availability"
                                    onChange={this.onChangeAvailability}
                                    value={this.state.availability}
                                    className="w3-input w3-border"
                                    type="text"
                                    style={{ width: '45%', display: "inline-block" }}

                                >
                                    <option value="">--Availability--</option>
                                    {daysOfWeek.map(day => <option>{day}</option>)}

                                </select>

                            </div>
                            <br />
                            <div className="form-group w3-center">
                                <p><label style={{ fontWeight: "bold" }}>Press and hold 'Shift' to select up to 4 images</label></p>
                                <input type="file" name="profileImages" multiple className="w3-center" onChange={this.onChangeProfileImages} />
                            </div>
                            <div className="form-group w3-center">
                                <button type="submit" className="w3-button w3-red ">Submit</button>
                            </div>

                            
                        </form >
                    )}
                    {this.state.successful && (
                                <div className="form-group ">
                                    <div
                                        className={
                                            this.state.successful ? "alert alert-success" : "alert alert-danger"
                                        }
                                        role="alert"
                                        style={{display: "inline-block"}}
                                    >
                                        
                                        {"Service Provider Profile registered successfully"}
                                    </div>
                                    <a href="/registerServiceProviderProfile" className="w3-button alert alert-success w3-red w3-right" style={{display: "inline-block"}}>Add Another</a>
                                </div>
                            )}
                </div >




            </div >
        )
    }
}

