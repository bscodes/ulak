import React from 'react';
import './cati.scss';
import CatiAccordion from '../../components/Accordion/SantralAccordion'

/* images */

import catiheader from '../../image/catiheader.png';


const catiSantral = () => {

  return(
  <>
    <div className="section-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="section-header">
              <img src={catiheader} alt="" className="section-header-image"/>
              <h1 className="header-title text-light text-center">
                DİJİTAL TEK ÇATI
              </h1>
            </div>  
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="section-body mt-5 mb-5">
              <p className="section-body-text text-left ">
              DİJİTAL TEK ÇATI KURUM VE KURULUŞLARIN SİSTEMLERİNİN EN ÜST KATMANDA VATANDAŞ YÖNETİMİNİN OLDUĞU, EN ALT KATMANDA DA TÜM SİSTEM GÜVENLİĞİ VE VERİSİNİN BLOK ZİNCİRİ İLE BİRBİRİNE BAĞLANDIĞI YERLİ/MİLLİ'YE DİJİTAL DÖNÜŞÜM HAREKETİDİR.
              </p>
            </div>  
          </div>
        </div>
      </div>
      <div className="second-section-wrapper">           
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="second-section-title-wrapper w-100">
              <div className="col-lg-12">
                <h2 className="section-title mt-4">
                  DİJİTAL TEK ÇATI UYGULAMALARI
                </h2>
              </div>
            </div>
          </div>
        </div>           
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="second-section w-100 mb-5">
              <div className="container">
                <div className="row">
                  <CatiAccordion/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </>
  );
}

export default catiSantral;