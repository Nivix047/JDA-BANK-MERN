import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container login-form">
      <div className="row">
        <div className="col-7">
          <h1 className="display-3">
            When
            <span className="highlight"> banking</span>
            <span> meets</span>
            <br />
            <span className="highlight"> minimalist</span>
            <div className="mt-5 h3">EZ Money EZ Life.</div>
          </h1>
        </div>
        <div className="col">
          <div className="col d-flex justify-content-center login-signup-form p-4">
            <form className="login-form login-signup-form">
              <div className="row">
                <div className="col display-6">Welcome!</div>
                <div className="mb-3">
                  <label htmlFor="email-login" className="form-label"></label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email-login"
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
  );
}

export default Login;
