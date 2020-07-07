import React from 'react';
 
import Collapsible from 'react-collapsible';
 
 
const AccordionMenu = () => {
  return (
    <Collapsible trigger="ÜRÜNLERİMİZ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-2 mb-2">
            <hr className="line"/>
            <a href="/stratejikplan" className="acc-link">
            Stratejik Plan
            </a>
            <hr className="line"/>
          </div>
          <div className="col-lg-12 mb-2">
            <a href="/bulutfilo" className="acc-link">
              Bulut Filo
            </a>
            <hr className="line"/>
          </div>
          <div className="col-lg-12 mb-2">
            <a href="/drive" className="acc-link">
            Drive
            </a>
            <hr className="line"/>
          </div>
          <div className="col-lg-12 mb-2">
            <a href="/scada" className="acc-link">
            Scada
            </a>
          </div>
        </div>
      </div>



      
    </Collapsible>
  );
}

export default AccordionMenu