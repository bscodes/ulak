import React from 'react';
import logo from '../../image/logo-ust.png';
import about from '../../image/about.jpg';


const hakkimizda = () => {
  return(
  <>
    <div className="section-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
        <div className="col-lg-12">
        <div className="section-header">
          <img src={about} alt="" className="section-header-image"/>
          <img src={logo} alt="" className="header-logo"/>
        </div>
          
          {/* <img src={logo} alt="" className="nav-logo"/> */}
          
          
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default hakkimizda;