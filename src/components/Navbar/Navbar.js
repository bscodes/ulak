import React from 'react';
import logo from '../../image/logo.png';

const Navbar = () => {
  return(
  <>
    <div className="navbar-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
        <div className="col-lg-12">
          <div className="navbar-dark">
          <img src={logo} alt="" className="nav-logo"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Navbar;
