import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../image/logo-ust.png';
import './Navbar.scss'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll= () => {
    const offset = window.scrollY;
    if (offset > 20 ) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  let navbarClasses = ['navbar-dark'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  
  return(
  <>
    <div className="navbar-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
        <div className="col-lg-12">
          <div className={navbarClasses.join(" ")}>
          <Link to="/">
          <img src={logo} alt="" className="nav-logo"/>
          </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Navbar;
