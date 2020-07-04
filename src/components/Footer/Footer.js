import React from 'react';
import logo from '../../image/logo.png';
import linkedin from '../../image/linkedin.png';
import twitter from '../../image/twitter.png';
import facebook from '../../image/facebook.png';

const Footer = () => {
  return(
  <>
    <div className="footer-wrapper">
    <div className="footer-bg">
      <div className="container-fluid">
        <div className="row no-gutters">
        <div className="col-lg-12">
          <div className="footer-dark">
          <img src={logo} alt="" className="footer-logo mt-2"/>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="social-media mt-5 mb-5">
                <img src={linkedin} alt="" className="social-icon"/>
                <img src={twitter} alt="" className="social-icon ml-5 mr-5"/>
                <img src={facebook} alt="" className="social-icon"/>
          </div>
        </div>
        <div className="col-lg-12">
            <div className="connect text-light text-center mb-5">
                <p className="adress">
                    Adres: Esentepe Mahallesi 
                    Kore Şehitleri Caddesi 
                    No: 16/1 D:72 
                    İstanbloom, Şişli, 
                    İstanbul / Türkiye
                </p>
                <p className="tel">
                    Telefon: +90 212 403 1534
                </p>
                <p className="email">
                    E-maIl: info@digiseat.com.tr
                </p>
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  </>
  );
}

export default Footer;
