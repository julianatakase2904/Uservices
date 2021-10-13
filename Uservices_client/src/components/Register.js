import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import RegisterPic from '../assets/Register.jpg';

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};


const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};


const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [password, setPassword] = useState("");
  const [serviceProvider, setServiceProvider] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [isChecked] = useState();

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };
  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };
  const onChangeProvince = (e) => {
    const province = e.target.value;
    setProvince(province);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeServiceProvider = (e) => {
    const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value)
    
        setServiceProvider(value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(firstName, lastName, email, address, province, password, serviceProvider).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia',
    'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'];

  return (
    <div>
      <div className="w3-display-container w3-container" style={{ marginTop: '0px' }}>
        <img src={RegisterPic} alt="LoginPic" style={{ width: '100%' }} />
      </div>
      <br />
      <div className="w3-container w3-black w3-padding-32" style={{ marginTop: '0px' }}>
        <h1>Register</h1>
        <p>Enjoy all the benefit of becoming a Uservices member</p>


        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <p><Input
                  type="text"
                  className="w3-input w3-border"
                  name="firstName"
                  value={firstName}
                  onChange={onChangeFirstName}
                  style={{ width: '100%' }}
                  placeholder="First Name"
                />
                </p>
              </div>
              <div className="form-group">
                <Input
                  type="text"
                  className="w3-input w3-border"
                  name="lastName"
                  value={lastName}
                  onChange={onChangeLastName}
                  style={{ width: '100%' }}
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <Input
                  type="text"
                  className="w3-input w3-border"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <Input
                  type="text"
                  className="w3-input w3-border"
                  name="address"
                  value={address}
                  onChange={onChangeAddress}
                  placeholder="Address"
                />
              </div>
              <div className="form-group">
                <label>
                  <select id="province" className="w3-input w3-border" onChange={onChangeProvince} value={province} type="text" >
                    <option value="">--Please select a Province--</option>
                    {provinces.map(province => <option value={province}>{province}</option>)}
                  </select>
                </label>
              </div>
              <div className="form-group">
                <Input
                  type="password"
                  className="w3-input w3-border"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label>
                  <p>Do you want to become a Service Provider?  &nbsp;
                    <input type="checkbox" id="serviceProvider"
                      ref={checkBtn}
                      checked={isChecked}
                      value={serviceProvider}
                      onChange={onChangeServiceProvider}
                      name="serviceProvider"
                    /></p>
                </label>

              </div>


              <div className="form-group">
                <button className="w3-button w3-red w3-margin-bottom">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
