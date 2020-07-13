import React from 'react';
import contactHeader from '../../image/contact-header.png';
import pin from '../../image/pin.png';
/* import mail from '../../image/mail.png'; */


const iletisim = () => {
  return(
  <>
    <div className="section-wrapper iletisim-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="section-header">
              <img src={contactHeader} alt="" className="section-header-image"/>
              <h1 className="header-title iletisim-title text-light text-center">
                İLETİŞİM 
              </h1>
            </div>  
          </div>
        </div>
      </div>

      <div className="iletisim-body text-light mb-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
                <div className="contact-section">
                  <div className="contact-wrapper">
                    <img src={pin} alt="" className="contact-icon"/>
                    <p className="contact-text">
                    Esentepe Mahallesi, Kore Şehitleri Caddesi, No:16/1 D:72, Şişli, İstanbul / Türkiye
                    </p>
                  </div>
                  <div className="contact-wrapper">
                    <img src={pin} alt="" className="contact-icon"/>
                    <p className="contact-text">
                    +90 212 403 1534
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
  );
}

export default iletisim;