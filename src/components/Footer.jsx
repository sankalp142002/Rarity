import React from 'react'
import "../css/footer.css"
import logo from "../assets/logo-white.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Routes, Route, useNavigate} from 'react-router-dom';
function Footer() {

  const navigate = useNavigate();

  const navigateAbout = () => {
    navigate('/about');
  };

  const navigateServices = () => {
    navigate('/services');
  };

  const navigateContact = () => {
    navigate('/contact');
  };
  return (
    <div className='footer'>
      <div className='upperFooter'>
        <div className='upperFooterLeft'>



          <div className='upperFooterLeft2'>
          <div className='upperFooterLeft1'>
          <h3>Send us a mail in just one click!</h3>
          <button className='button2'>Send</button>
          </div>
            <div className='upperFooterLeft1'>          <h3>Call us directly.</h3>
          <button className='button2'>Call</button></div>
            <div className='upperFooterLeft1'>
            <h3>Download Our Profile.</h3>
          <button className='button2'>Download</button>
            </div>


          </div>


        </div>
        <div className='upperFooterRight'>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className='footerLinks'>
          <div onClick={navigateAbout}>About Us</div>
            <div onClick={navigateServices}>Services</div>
            <div onClick={navigateContact}>Contact Us</div>
          </div>
        </div>
      </div>
      <div className='lowerFooter'>
        <div className='footerRights'>@All Rights Reserved by RarityMetrix</div>
        <div className='footerMediaLogos'>
          <div><i className="fa-brands fa-instagram fa-xl social-logo"></i></div>
          <div><i className="fa-brands fa-whatsapp fa-xl social-logo"></i></div>
          <div><i className="fa-brands fa-linkedin fa-xl social-logo"></i></div>
        
        </div>
      </div>
    </div>
  )
}

export default Footer
