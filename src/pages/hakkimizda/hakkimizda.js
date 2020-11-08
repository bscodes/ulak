import React from 'react';
import './hakkimizda.scss';

import logo from '../../image/1ulak_1.png';


const Hakkimizda = () => {

  return(
  <>
    <div className="section-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
        <div className="col-lg-12">
          <div className="section-header about-header">
            {/* <img src={about} alt="" className="section-header-image"/> */}
            {/* <img src={logo} alt="" className="header-logo"/> */}
            <h1 className="header-title text-light text-center">
              HAKKIMIZDA
            </h1>
          </div>  
        </div>
        <div className="col-lg-12">
          <div className="container">
          <div className="section-body about-body mt-5 mb-5">
            <img src={logo} alt="" className="about-logo"/>
            <p className="section-body-text text-left">
            KAMU KURUM VE KURULUŞLARININ ÇAĞRI MERKEZİ VE HİZMET TEKNOLOJİLERİNDEKİ
            OPTIMIZASYONUNU SAĞLAMAK VE SEKTÖRDEKİ YABANCILAŞMA KARŞISINDA YERLİ BİR
            SERMAYE OLMAK ÜZERE KURULMUŞTUR.
            </p>
            <h1>
              ALT YAPIMIZ
            </h1>
            <p className="section-body-text text-left mb-5">
            ULAK ALTYAPI VE TEKNOLOJİ EKOSİSTEMİ İLE MÜŞTERİLERİNİN HIZMETLERİNDE AYNI
            PERFORMANSI ELDE ETMESINI SAĞLARIZ. ULAK OLARAK YÜKSEK PERFORMANS İLE FAALİYET
            GÖSTERİRKEN, VERİMLİLİK, KALİTE VE YENİ TEKNOLOJİLERİN GELİŞTİRİLMESİNE ODAKLANIRIZ.
            </p>
          </div>  
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Hakkimizda;