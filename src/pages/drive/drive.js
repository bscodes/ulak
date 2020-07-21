import React from 'react';
import './drive.scss';
import driveHeader from '../../image/drive-header.png';


const drive = () => {
  return(
  <>
    <div className="section-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
        <div className="col-lg-12">
          <div className="section-header">
            <img src={driveHeader} alt="" className="section-header-image"/>
            <h1 className="header-title drive-title text-light text-center">
              DRIVE
            </h1>
          </div>  
        </div>
        <div className="col-lg-12">
          <div className="section-body drive mt-5 mb-5">
            <p className="section-body-text text-center">
              VERSION YÖNETİMİ VE SAKLAMA
            </p>
            <p className="section-body-text text-center">
              DOKÜMAN CHECK-IN, CHECK-OUT 
            </p>
            <p className="section-body-text text-center">
              DOKÜMAN KİLİTLEME
            </p>
            <p className="section-body-text text-center">
              META BİLGİ FORMLARI TANIMLAMA
            </p>
            <p className="section-body-text text-center">
              DOKÜMANLARA BİRDEN FAZLA TÜRDE META BİLGİSİ EKLEME 
            </p>
            <p className="section-body-text text-center">
              İÇERİK VE META BİLGİLERDEN ARAMA
            </p>
            <p className="section-body-text text-center">
              WEB İÇERİĞİ SUNMA (HTML VE MARKDOWN)
            </p>
            <p className="section-body-text text-center">
              MS OFFICE ENTEGRASYONU
            </p>
            <p className="section-body-text text-center">
              GELİŞMİŞ API İLE KURUMUNUZDAKİ DİĞER YAZILIMLARA ENTEGRASYON DESTEĞİ
            </p>
          </div>  
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default drive;