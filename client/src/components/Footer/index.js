import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-dark fixed-bottom" id="footer">
      <div className="container text-center">
        <h2 className="d-flex justify-content-center">
          <a
            href="https://github.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="icon p-2  text-6xl"
              icon={faGithub}
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="p-2  text-6xl"
              icon={faFacebook}
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://instagram.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="p-2  text-6xl"
              icon={faInstagram}
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://linkedin.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="p-2  text-6xl"
              icon={faLinkedinIn}
            ></FontAwesomeIcon>
          </a>
        </h2>

        <div>© 2022 JDAB Bank</div>
      </div>
    </footer>
  );
};

export default Footer;
