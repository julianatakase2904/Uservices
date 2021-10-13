import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import LoginPic from "../assets/Login.jpg"

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


const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
            props.history.push("/browseServiceProviders");
            window.location.reload();
        
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w3-display-container w3-container">
        <img src={LoginPic} alt="LoginPic" style={{ width: '100%' }} />
      </div>
      <br />
      <div className="w3-container w3-black w3-padding-32" >
        <h1>Login</h1>
        <Form onSubmit={handleLogin} ref={form}>
          <p>Please login to access all Uservices benefits</p>
          <div className="form-group">
            <Input
              type="text"
              className="w3-input w3-border"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
              placeholder="Enter e-mail"
              style={{ width: '100%' }}
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              className="w3-input w3-border"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
              placeholder="Enter password"
              style={{ width: '100%' }}
            />
          </div>

          <div className="form-group">
            <button className="w3-button w3-red w3-margin-bottom" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          <p><a href="/register" title="RegisterUser" style={{
            color: "white",
            borderBottom: 'black solid 1px',
            padding: [15, 10],
            textAlign: 'right',
          }}>Not a user yet? Please register here.</a> &nbsp; &nbsp;
            <a href="/register" title="ServiceProviderRegister" target="_blank" style={{
              color: "white",
              borderBottom: 'black solid 1px',
              padding: [15, 10],
              textAlign: 'right',
            }}>Become a Service Provider</a></p>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
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

export default Login;
