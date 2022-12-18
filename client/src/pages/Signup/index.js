import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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
        <div className="container signup-form">
          <div className="row">
            <div className="col-7">
              <h1 className="display-3 pt-5">
                When &nbsp;
                <span className="highlight">banking</span>
                &nbsp; meets &nbsp;
                <span className="highlight">minimalism</span>
                <div className="mt-5 h3">EZ Money EZ Life.</div>
              </h1>
            </div>
            <div className="col">
              <div className="col d-flex justify-content-center login-signup-form p-4">
                <form
                  onSubmit={handleFormSubmit}
                  className="signup-form login-signup-form"
                >
                  <div className="row">
                    <div className="col display-6">Welcome!</div>
                    <div className="mb-3">
                      <label
                        htmlFor="firstName-signup"
                        className="form-label"
                      ></label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        id="firstName-signup"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="lastName-signup"
                        className="form-label"
                      ></label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        id="lastName-signup"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="username-signup"
                        className="form-label"
                      ></label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        id="username-signup"
                        name="username"
                        value={formState.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="email-signup"
                        className="form-label"
                      ></label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email-signup"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password-signup"
                        className="form-label"
                      ></label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password-signup"
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <button type="submit" className="btn btn-success w-100">
                        Sign up
                      </button>
                    </div>
                    <div className="form-group">
                      <Link
                        to="/login"
                        className="text-decoration-none signup-login-href text-success"
                      >
                        Login instead
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
        <div className="my-3 p-3 bg-danger text-white">
          Please check your login credentials.
        </div>
      )}
    </div>
  );
};

export default Signup;
