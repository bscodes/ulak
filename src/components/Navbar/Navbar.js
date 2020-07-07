import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../image/logo-ust.png';

const Navbar = () => {
  return(
  <>
    <div className="navbar-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
        <div className="col-lg-12">
          <div className="navbar-dark">
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
