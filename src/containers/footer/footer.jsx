import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
  <div className = "footer section__padding">
    <div className = "footer-heading">
      <h1 className = "gradient__text">[Fill in the blank]</h1>
    </div>
    <div className = "footer-btn">
      <p><a href='#home'>Return to Top of Page</a></p>

    </div>
    <div className ="footer-links">
      <div className ="footer-links_logo">
        <img src={logo} alt="logo" ></img>
        <p>Adress goes here!</p>
      </div>
      <div className ="footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact Us</p>      
      </div>
      <div className ="footer-links_div">
        <h4>Get in touch</h4>
        <p>Adress?</p>
        <p>Phone Number?</p>   
        <p>Email?</p> 
      </div> 
    </div>
    <div className = "footer-copyright">
      <p>Copyright tag</p>
    </div>
  </div>
  )
};

export default Footer;