import React from 'react';
import './index.scss'
import dmHeader from '../../image/dm-header.jpg';


const VatandasDeneyimi = () => {
  return(
  <>
  <div className="section-wrapper">
    <div className="container-fluid">
      <div className="row no-gutters">
      <div className="col-lg-12">
        <div className="section-header destek-header"
          style={{backgroundImage: `url(${dmHeader})`}}
        >
          {/* <img src={fintechHeader} alt="" className="section-header-image"/> */}
          <h2 className="header-spot text-light text-center">
          ÇÖZÜMLERİMİZ
          </h2>
          <h1 className="header-title text-light text-center">
          VATANDAŞ DENEYİMİ
          YÖNETİMİ
          </h1>
        </div>  
      </div>
      <div className="col-lg-12">
        <div className="section-body drive text-uppercase mt-5 mb-5">
          <p className="section-body-text text-center">
          VATANDAŞIN TEMAS ETTİĞİ TÜM İLETİŞİM NOKTALARINDA DENEYİMİ İYİLEŞTİRMEK,
          STANDARDİZE ETMEK VE DENEYİMİN SÜREKLİLİĞİNİ SAĞLAMAK ÜZERE VATANDAŞ YOLCULUK
          HARİTALARI OLUŞTURUYORUZ. MÜKEMMEL BIR VATANDAŞ DENEYİMİ IÇIN TÜM KANALLARIN
          DÜZENLİ OLARAK PERFORMANSINI ÖLÇÜYORUZ.
          </p>
        </div>  
      </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default VatandasDeneyimi;