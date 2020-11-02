import React from 'react';
import './sahaurun.scss';
import sahaHeader from '../../image/saha-urun-header.jpg';
import button1 from '../../image/button1.png';
import button2 from '../../image/button2.png';

const sahaurun = () => {
  return(
  <>
    <div className="section-wrapper saha-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
        <div className="col-lg-12">
          <div className="section-header">
            <img src={sahaHeader} alt="" className="section-header-image"/>
            <h1 className="header-title saha title drive-title text-light text-center">
              SAHA ÜRÜN VEYA NOKTA BAKIM ÇÖZÜM YÖNETİMİ
            </h1>
          </div>  
        </div>
        </div>
      </div>
      <div className="section-body-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-body text-light drive pt-5 pb-5">
                <div className="section-body-title text-center">
                  <img src={button1} alt="" className="title-image"/>
                  <h2 className="title-title">
                    BÇO FİRMALARI
                  </h2>
                </div>
                <ul className="spec-list">
                  <li className="section-body-text">
                    SAHA BAKIM
                  </li>
                  <li className="section-body-text">
                    ARIZA 
                  </li>
                  <li className="section-body-text">
                    İŞLETME
                  </li>
                  <li className="section-body-text">
                    SAHA ENVANTER SAYIM
                  </li>
                  <li className="section-body-text">
                    DEPO ENVANTER
                  </li>
                  <li className="section-body-text">
                    REVİZYON İŞLERİ
                    <p>
                      (MOBİL VE FIX ÇALIŞMALARI)
                    </p>
                  </li>
                </ul>
              </div>  
            </div>
            <div className="col-lg-6">
              <div className="section-body text-light drive pt-5 pb-5">
                <div className="section-body-title text-center">
                  <img src={button2} alt="" className="title-image"/>
                  <h2 className="title-title">
                    DIŞ KAYNAK FİRMALARI
                  </h2>
                </div>
                <ul className="spec-list">
                  <li className="section-body-text">
                    KULE TAHKİK VE KULE İYİLEŞTİRME
                  </li>
                  <li className="section-body-text">
                    ENERJİ ÇALIŞMALARI 
                  </li>
                  <li className="section-body-text">
                    ALTERNATİF ENERJİ ÇALIŞMALARI 
                  </li>
                  <li className="section-body-text">
                    MALZEME TEDARİKÇİLERİ
                  </li>
                </ul>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default sahaurun;