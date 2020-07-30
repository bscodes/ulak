import React from 'react';
import { Link } from 'react-router-dom'
import Collapsible from 'react-collapsible';
 
 
const AccordionMenu = () => {
  return (
    <>
    <Collapsible trigger="ÜRÜNLERİMİZ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <hr className="line"/>
            <Link to="/cati" className="acc-link">
            Dijital Çatı
            </Link>
            <hr className="line"/>
          </div>
          <div className="col-lg-12">
            <Link to="/stratejikplan" className="acc-link">
            Stratejik Plan
            </Link>
            <hr className="line"/>
          </div>
          <div className="col-lg-12">
            <Link to="/bulutfilo" className="acc-link">
              Bulut Filo
            </Link>
            <hr className="line"/>
          </div>
          <div className="col-lg-12">
            <Link to="/drive" className="acc-link">
            Drive
            </Link>
            <hr className="line"/>
          </div>
          <div className="col-lg-12">
            <Link to="/scada" className="acc-link">
            Scada
            </Link>
          </div>
        </div>
      </div>
    </Collapsible>

{/*     <Collapsible trigger="PROJE YETKİNLİKLERİMİZ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-2">
            <hr className="line"/>
            <Link to="/parmakizi" className="acc-link">
            PARMAK İZİ ONAY SÜRECİ
            </Link>
            <hr className="line"/>
          </div>
          <div className="col-lg-12">
            <Link to="/eksigorta" className="acc-link">
              HİZMETLERDE EK SİGORTA
            </Link>
            <hr className="line"/>
          </div>
          <div className="col-lg-12">
            <Link to="/noktabakim" className="acc-link">
            SAHA ÜRÜN VEYA NOKTA BAKIM, ÇÖZÜM YÖNETİMİ
            </Link>
            <hr className="line"/>
          </div>
          <div className="col-lg-12">
            <Link to="/fintech" className="acc-link">
            FINTECH ÜRÜN YÖNETİMİ
            </Link>
          </div>
        </div>
      </div>
    </Collapsible> */}
    
    </>
  );
}

export default AccordionMenu