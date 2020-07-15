import React from 'react';
import contactHeader from '../../image/contact-header.png';
import pin from '../../image/pin.png';
import mail from '../../image/mail.png';
import phone from '../../image/phone.png';
import YandexMap from '../../components/YMaps/YandexMap';


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

        <div className="iletisim-body text-light mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                  <div className="contact-section">
                    <div className="contact-wrapper">
                      <div className="contact-thumb">
                        <img src={pin} alt="" className="contact-icon pin"/>
                      </div>
                      <div className="contact-contact">
                        <p className="contact-text">
                        Esentepe Mahallesi, Kore Şehitleri Caddesi, No:16/1 D:72, Şişli, İstanbul / Türkiye
                        </p>
                      </div>
                    </div>
                    <div className="contact-wrapper">
                      <div className="contact-thumb">
                        <img src={phone} alt="" className="contact-icon"/>
                      </div>
                      <div className="contact-contact">
                        <p className="contact-text">
                          +90 212 403 1534
                        </p>
                      </div>
                    </div>
                    <div className="contact-wrapper">
                      <div className="contact-thumb">
                        <img src={mail} alt="" className="contact-icon"/>
                      </div>
                      <div className="contact-contact">
                        <p className="contact-text">
                          info@digiseat.com.tr
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6">
                <div className="ymaps-wrapper">
                  <YandexMap/>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="contact-form mt-5 mb-5">
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="name">İSİM*</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="İSİM" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-MAIL*</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="E-MAIL" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="konu">KONU*</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="KONU" required/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="message">MESAJ*</label>
                            <textarea className="form-control" id="message" rows="6" required></textarea>
                        </div>
                        <div className="submit-button">
                          <button type="submit" className="btn btn-primary text-right">GÖNDER</button>
                        </div>
                      </div>
                    </div>
                  </form>
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