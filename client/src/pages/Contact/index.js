import React, { useState } from "react";
import { validateEmail } from "../../utils/helper";

export function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const valid = validateEmail(e.target.value);
      if (!valid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };
  return (
    <div className="container">
      <div className="row">
        {" "}
        <div className="col-7">
          {" "}
          <h1 className="display-4 pt-5">
            Contact us
            <div className="pt-5 h3">
              Need to get in touch?
              <br /> Please fill out the form!
            </div>
          </h1>
        </div>
        <div className="col">
          <div className="col d-flex justify-content-center p">
            <form className="w-100">
              <div className="form-group m-3">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="name"
                  onBlur={handleChange}
                />
              </div>
              <div className="form-group m-3">
                <label>Email address:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="name@example.com"
                  onBlur={handleChange}
                />
              </div>
              <div className="form-group m-3">
                <label>Message:</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="9"
                  onBlur={handleChange}
                ></textarea>
              </div>
              {errorMessage && (
                <div>
                  <p>{errorMessage}</p>
                </div>
              )}
              <div className="form-group m-3">
                <button
                  type="submit"
                  className="btn btn-dark h-25"
                  id="contact-btn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
