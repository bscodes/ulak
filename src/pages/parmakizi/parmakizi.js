import React from 'react';
import './parmakizi.scss';
import parmakiziHeader from '../../image/parmakizi-header.jpg';
import parmakiziMiddle from '../../image/parmakizi-middle.jpg';
import sertifikaIcon from '../../image/sertifika-icon.png';
import fotoIcon from '../../image/fotoIcon.png';
import bioIcon from '../../image/bioIcon.png';
import pinIcon from '../../image/pinIcon.png';


const parmakizi = () => {
  return(
  <>
    <div className="section-wrapper parmakizi-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
        <div className="col-lg-12">
          <div className="section-header">
            <img src={parmakiziHeader} alt="" className="section-header-image"/>
            <h1 className="header-title drive-title text-light text-center">
              PARMAK İZİ ONAYLAMA
            </h1>
          </div>  
        </div>
        <div className="col-lg-12">
          <div className="section-body drive mt-5 mb-5">
            <p className="section-body-text text-center">
              PROVİZYON ONAY SÜREÇLERİNİN SAHADA TÜM NOKTALARA KİŞİ DOĞRULAMALI OLARAK YAYGINLAŞTIRILMASI AMAÇLANMAKTADIR
            </p>
            <p className="section-body-text text-center">
              STANDART KART OKUYUCULAR İÇİN KİMLİK DOĞRULAMA VE E-İMZA 
              <p>
              (ÜRETİCİ BAĞIMSIZ ÇÖZÜM, PINPAD DESTEĞİ, ANDROID /IOSBTLE DESTEĞİ)
              </p>
            </p>
            <p className="section-body-text text-center">
              ELEKTRONİK KİMLİK DOĞRULAMA SUNUCULARI
              <p>
              (KİMLİK DOĞRULAMA, POLİTİKA VE ROL SUNUCULARI)
              </p>
            </p>
            <p className="section-body-text text-center">
              KART ERİŞİM CİHAZI (KEC) ÇÖZÜMLERİ
              <p>
              (KEC CIHAZI, KEC GÜNCELLEME VE YÖNETİM SİSTEMİ, TCKK API)
              </p>
            </p>
          </div>  
        </div>
        <div className="col-lg-12">
          <div className="section-header">
            <img src={parmakiziMiddle} alt="" className="section-header-image"/>
          </div>  
        </div>
        </div>
      </div>

      <div className="p-icon-wrapper text-light mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="title-title text-center text-dark">
                PARMAK İZİ ONAYLAMA TEMEL BİLEŞENLERİ
              </h5>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="p-icon">
                <h5 className="p-icon-text">
                <img src={sertifikaIcon} alt="" className="p-icon-icon"/>
                  SERTİFİKA
                </h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="p-icon">
                <h5 className="p-icon-text">
                <img src={fotoIcon} alt="" className="p-icon-icon"/>
                  FOTOĞRAF
                </h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="p-icon">
                <h5 className="p-icon-text">
                <img src={bioIcon} alt="" className="p-icon-icon"/>
                  BIOMETRI
                </h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="p-icon">
                <h5 className="p-icon-text">
                <img src={pinIcon} alt="" className="p-icon-icon"/>
                  PIN
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default parmakizi;