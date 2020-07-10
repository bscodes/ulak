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
              Hizmet yazılımlarının, Türkiye'de üretilecek şekilde
              gerekli insan kaynağını, firmaları bulmak
              ve bu kişi, ekip ve firmaları ortak bir değer oluşturmak.
              Kurum ve kuruluşlarda yazılımların bu değerlere
              dönüştürülmesini sağlamak üzere toplanmış bir ekibiz.
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