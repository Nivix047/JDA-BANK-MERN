import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faInstagram,faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-dark fixed-bottom" id="footer" >
    <div className="container text-center">
      
        
      <h2 className='d-flex justify-content-center'>
      <FontAwesomeIcon className='p-2  text-6xl' icon={faGithub}></FontAwesomeIcon>
      <FontAwesomeIcon className='p-2  text-6xl' icon={faFacebook}></FontAwesomeIcon>
      <FontAwesomeIcon className='p-2  text-6xl' icon={faInstagram}></FontAwesomeIcon>
      <FontAwesomeIcon className='p-2  text-6xl' icon={faYoutube}></FontAwesomeIcon>
      <FontAwesomeIcon className='p-2  text-6xl' icon={faLinkedinIn}></FontAwesomeIcon>
      </h2>

      <div>© 2022 JDAB Bank</div>
      
        
      
      
    </div>
  </footer>
  );
};

export default Footer;