
import '../css/nav.css';
import logo from '../assets/logo-white.png';
import { useEffect, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

function Nav() {
const [isVisible, setIsVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = scrollPos > currentScrollPos || currentScrollPos < 100;

      setIsVisible(isVisible);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [5000]);


  const navigateHome = () => {
    navigate('/');
  };

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
    <div  className={isVisible ? 'navBar' : 'active'  }>
        <div className='navLogo'>
            <img src={logo} alt="" />
        </div>
        <div className='navLinks'>
            <div onClick={navigateHome}>Home</div>
            <div onClick={navigateAbout}>About Us</div>
            <div onClick={navigateServices}>Services</div>
            <div onClick={navigateContact}>Contact Us</div>
        </div>
    </div>
  )
}

export default Nav
