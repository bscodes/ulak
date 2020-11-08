import React from 'react';
import './index.scss'
import pmHeader from '../../image/pm-header.jpg';


const ProjeYonetimi = () => {
  return(
  <>
  <div className="section-wrapper">
    <div className="container-fluid">
      <div className="row no-gutters">
      <div className="col-lg-12">
        <div className="section-header destek-header"
          style={{backgroundImage: `url(${pmHeader})`}}
        >
          {/* <img src={fintechHeader} alt="" className="section-header-image"/> */}
          <h2 className="header-spot text-light text-center">
          ÇÖZÜMLERİMİZ
          </h2>
          <h1 className="header-title text-light text-center">
            PROJE YÖNETİMİ
          </h1>
        </div>  
      </div>
      <div className="col-lg-12">
        <div className="section-body drive text-uppercase mt-5 mb-5">
          <p className="section-body-text text-center">
          ÇAĞRI MERKEZİ KURULUM AŞAMASINDAN YENİ ÇAĞRI MERKEZİ PROJELERİNİN OLUŞTURULMASI
          VE PROJELERİN HAYATA GEÇİRİLEREK UÇTAN UCA TAKIP EDİLMESİNE KADAR TÜM ADIMLARDA
          PROJE YÖNETİMİ HİZMETİ VERİYORUZ.
          </p>
          <p className="section-body-text text-center">
          PROJENİN PARÇASI TÜM İŞ ORTAKLARININ KOORDİNE EDİLMESİ VE DÜZENLİ RAPORLAMA İLE İŞ
          GÜCÜ TASARRUFU SAĞLIYORUZ
          </p>
        </div>  
      </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default ProjeYonetimi;