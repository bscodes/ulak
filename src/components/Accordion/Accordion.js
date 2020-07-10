import React from 'react';
import { Link } from 'react-router-dom'
import Collapsible from 'react-collapsible';
 
 
const AccordionMenu = () => {
  return (
    <Collapsible trigger="ÜRÜNLERİMİZ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-2 mb-2">
            <hr className="line"/>
            <Link to="/stratejikplan" className="acc-link">
            Stratejik Plan
            </Link>
            <hr className="line"/>
          </div>
          <div className="col-lg-12 mb-2">
            <Link to="/bulutfilo" className="acc-link">
              Bulut Filo
            </Link>
            <hr className="line"/>
          </div>
          <div className="col-lg-12 mb-2">
            <Link to="/drive" className="acc-link">
            Drive
            </Link>
            <hr className="line"/>
          </div>
          <div className="col-lg-12 mb-2">
            <Link to="/scada" className="acc-link">
            Scada
            </Link>
          </div>
        </div>
      </div>



      
    </Collapsible>
  );
}

export default AccordionMenu