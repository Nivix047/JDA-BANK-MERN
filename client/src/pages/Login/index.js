import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      {data ? (
        <p>
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>{" "}
          <Link to="/" />
        </p>
      ) : (
        <div className="container login-form">
          <div className="row">
            <div className="col-7">
              <h1 className="display-3">
                When &nbsp;
                <span className="highlight">banking</span>
                &nbsp; meets &nbsp;
                <span className="highlight">minimalist</span>
                <div className="mt-5 h3">EZ Money EZ Life.</div>
              </h1>
            </div>
            <div className="col">
              <div className="col d-flex justify-content-center login-signup-form p-4">
                <form
                  onSubmit={handleFormSubmit}
                  className="login-form login-signup-form"
                >
                  <div className="row">
                    <div className="col display-6">Welcome!</div>
                    <div className="mb-3">
                      <label
                        htmlFor="email-login"
                        className="form-label"
                      ></label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email-login"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password-login"
                        className="form-label"
                      ></label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password-login"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <button type="submit" className="btn btn-success w-100">
                        Sign in
                      </button>
                    </div>
                    <div className="form-group">
                      <Link
                        to="/signup"
                        className="text-decoration-none signup-login-href text-success"
                      >
                        Sign up instead
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default Login;
