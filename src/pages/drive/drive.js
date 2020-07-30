import React from 'react';
import './drive.scss';
import driveHeader from '../../image/drive-header.png';
import drive1 from '../../image/drive1.png';
import drive2 from '../../image/drive2.png';
import drive3 from '../../image/drive3.png';
import drive4 from '../../image/drive4.png';
import drive5 from '../../image/drive5.png';
import drive6 from '../../image/drive6.png';
import drive7 from '../../image/drive7.png';
import drive8 from '../../image/drive8.png';
import drive9 from '../../image/drive9.png';


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
              
            </p>
            <p className="section-body-text text-center">
              
            </p>
            <p className="section-body-text text-center">
             
            </p>
            <p className="section-body-text text-center">
              
            </p>
            <p className="section-body-text text-center">
              
            </p>
            <p className="section-body-text text-center">
              
            </p>
          </div>  
        </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="drive-item-wrapper">
              <div className="item-image-holder">
                <img src={drive1} alt="" className="drive-image"/>
              </div>
              <div className="item-title-holder">
                <h4 className="item-title">
                  VERSION YÖNETİMİ VE SAKLAMA
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="drive-item-wrapper">
              <div className="item-image-holder">
                <img src={drive2} alt="" className="drive-image"/>
              </div>
              <div className="item-title-holder">
                <h4 className="item-title">
                  DOKÜMAN CHECK-IN, CHECK-OUT 
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="drive-item-wrapper">
              <div className="item-image-holder">
                <img src={drive3} alt="" className="drive-image"/>
              </div>
              <div className="item-title-holder">
                <h4 className="item-title">
                  DOKÜMAN KİLİTLEME
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="drive-item-wrapper">
              <div className="item-image-holder">
                <img src={drive4} alt="" className="drive-image"/>
              </div>
              <div className="item-title-holder">
                <h4 className="item-title">
                  META BİLGİ FORMLARI TANIMLAMA
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="drive-item-wrapper">
              <div className="item-image-holder">
                <img src={drive5} alt="" className="drive-image"/>
              </div>
              <div className="item-title-holder">
                <h4 className="item-title">
                  DOKÜMANLARA BİRDEN FAZLA TÜRDE META BİLGİSİ EKLEME 
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="drive-item-wrapper">
              <div className="item-image-holder">
                <img src={drive6} alt="" className="drive-image"/>
              </div>
              <div className="item-title-holder">
                <h4 className="item-title">
                 İÇERİK VE META BİLGİLERDEN ARAMA
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="drive-item-wrapper">
              <div className="item-image-holder">
                <img src={drive7} alt="" className="drive-image"/>
              </div>
              <div className="item-title-holder">
                <h4 className="item-title">
                  WEB İÇERİĞİ SUNMA (HTML VE MARKDOWN)
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="drive-item-wrapper">
              <div className="item-image-holder">
                <img src={drive8} alt="" className="drive-image"/>
              </div>
              <div className="item-title-holder">
                <h4 className="item-title">
                  MS OFFICE ENTEGRASYONU
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-6">
            <div className="drive-item-wrapper">
              <div className="item-image-holder">
                <img src={drive9} alt="" className="drive-image"/>
              </div>
              <div className="item-title-holder">
                <h4 className="item-title">
                  GELİŞMİŞ API İLE KURUMUNUZDAKİ DİĞER YAZILIMLARA ENTEGRASYON DESTEĞİ
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default drive;