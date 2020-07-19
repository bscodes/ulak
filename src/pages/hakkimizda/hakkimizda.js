import React from 'react';
import logo from '../../image/logo.png';
import about from '../../image/about.jpg';


const hakkimizda = () => {
  return(
  <>
    <div className="section-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
        <div className="col-lg-12">
          <div className="section-header">
            <img src={about} alt="" className="section-header-image"/>
            <img src={logo} alt="" className="header-logo"/>
          </div>  
        </div>
        <div className="col-lg-12">
          <div className="section-body mt-5 mb-5">
            <p className="section-body-text text-left ">
              HİZMET YAZILIMLARININ, TÜRKİYE'DE ÜRETİLECEK ŞEKİLDE
              GEREKLİ İNSAN KAYNAĞINI,
              FİRMALARI BULMAK
              VE BU KİŞİ, EKİP VE FİRMALARI ORTAK BİR DEĞER OLUŞTURMAK. 
              KURUM VE KURULUŞLARDA YAZILIMLARIN BU DEĞERLERE DÖNÜŞTÜRÜLMESİNİ
              SAĞLAMAK ÜZERE TOPLANMIŞ BİR EKİBİZ
            </p>
          </div>  
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default hakkimizda;