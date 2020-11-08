import React from 'react';
import './index.scss'
import fintechHeader from '../../image/fintech-header.jpg';


const DestekKadro = () => {
  return(
  <>
  <div className="section-wrapper">
    <div className="container-fluid">
      <div className="row no-gutters">
      <div className="col-lg-12">
        <div className="section-header destek-header"
          style={{backgroundImage: `url(${fintechHeader})`}}
        >
          {/* <img src={fintechHeader} alt="" className="section-header-image"/> */}
          <h2 className="header-spot text-light text-center">
          ÇÖZÜMLERİMİZ
          </h2>
          <h1 className="header-title text-light text-center">
            DESTEK KADRO VE
            OPERASYON YÖNETİMİ
          </h1>
        </div>  
      </div>
      <div className="col-lg-12">
        <div className="section-body drive text-uppercase mt-5 mb-5">
          <p className="section-body-text text-center">
          UZMAN OPERASYON YÖNETİMİ VE DESTEK KADRO EKİBİ YÖNETİM KADROMUZ İLE TÜM
          OPERASYON SÜREÇLERİNİZİ UÇTAN UCA YÖNETİYOR VE DESTEK KADRO İHTIYAÇLARINIZA HIZLI
          ÇÖZÜMLER BULUYORUZ. RAPORLAMA, PLANLAMA, İNSAN KAYNAKLARI VE SÜREÇ YÖNETİMİ 
          KADROLARIMIZ İLE IHTIYACINIZ OLAN PROFESYONEL DESTEK HIZMETLERİNİ SAĞLIYORUZ.
          </p>
        </div>  
      </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default DestekKadro;