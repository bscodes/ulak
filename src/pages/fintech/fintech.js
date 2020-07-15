import React from 'react';
import fintechHeader from '../../image/fintech-header.jpg';


const fintech = () => {
  return(
  <>
  <div className="section-wrapper">
    <div className="container-fluid">
      <div className="row no-gutters">
      <div className="col-lg-12">
        <div className="section-header">
          <img src={fintechHeader} alt="" className="section-header-image"/>
          <h1 className="header-title drive-title text-light text-center">
            FINTECH ÜRÜN YÖNETİMİ
          </h1>
        </div>  
      </div>
      <div className="col-lg-12">
        <div className="section-body drive text-uppercase mt-5 mb-5">
          <p className="section-body-text text-center">
            Cep telefonu numarasına para gönderme
          </p>
          <p className="section-body-text text-center">
          Cep telefonuyla para çekme 
          </p>
          <p className="section-body-text text-center">
          Qr kod ile para çekme
          </p>
          <p className="section-body-text text-center">
          Soft OTP (BDDK yeni çıkacak tebliğe uygun)
          </p>
          <p className="section-body-text text-center">
          Realtime veri analitiği altyapısı 
          </p>
        </div>  
      </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default fintech;