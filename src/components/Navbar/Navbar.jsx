import React, { useEffect, useState } from 'react';
import './Navbar.css';
import background from '../../assets/background.png';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(prevState => !prevState);
  };

  const handleMenuItemClick = () => {
    setMobileMenu(false); // Close the menu when a menu item is clicked
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <img src={background} alt="Logo" className='logo' />
      <ul className={`nav-links ${mobileMenu ? 'open' : ''}`}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={handleMenuItemClick}>Home</Link></li>
        <li><Link to='Program' smooth={true} offset={-220} duration={500} onClick={handleMenuItemClick}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-194} duration={500} onClick={handleMenuItemClick}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-300} duration={500} onClick={handleMenuItemClick}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-330} duration={500} onClick={handleMenuItemClick}>Testimonials</Link></li>
        <li className='contact-li'>
          <button className='btn'>
            <Link to='contact' smooth={true} offset={0} duration={500} onClick={handleMenuItemClick}>Contact us</Link>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
