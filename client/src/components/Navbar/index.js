import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/login" className="navbar-brand" href="#">
          Login
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Pricing
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// old codes
// <nav>
// 	<a href="/">Home</a>
// 	<Link to="/">Home</Link>

// 	<Link to="/about">About</Link>
// 	<Link to="/contact">Contact</Link>
// </nav>
