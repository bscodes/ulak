import React from 'react';
import './index.scss'
import tmHeader from '../../image/tm-header.jpg';


const TeknolojiYonetimi = () => {
  return(
  <>
  <div className="section-wrapper">
    <div className="container-fluid">
      <div className="row no-gutters">
      <div className="col-lg-12">
        <div className="section-header destek-header"
          style={{backgroundImage: `url(${tmHeader})`}}
        >
          {/* <img src={fintechHeader} alt="" className="section-header-image"/> */}
          <h2 className="header-spot text-light text-center">
          ÇÖZÜMLERİMİZ
          </h2>
          <h1 className="header-title text-light text-center">
          TEKNOLOJİ YÖNETİMİ
          </h1>
        </div>  
      </div>
      <div className="col-lg-12">
        <div className="section-body drive text-uppercase mt-5 mb-5">
          <p className="section-body-text text-center">
          ULAK TEKNOLOJİ TARAFINDAN SAĞLANAN HIZLI, ESNEK VE YALIN UYGULAMALARI KURUM
          SÜREÇLERİ İLE ENTEGRE EDEREK ZAMAN VE MALİYET TASARRUFU SAĞLIYORUZ.
          </p>
        </div>  
      </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default TeknolojiYonetimi;