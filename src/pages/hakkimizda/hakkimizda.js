import React from 'react';
import { useWindowSize } from '../../helpers/windowSize'
import './hakkimizda.scss';

import logo from '../../image/1ulak_1.png';
import about from '../../image/about.jpg';


const Hakkimizda = () => {
  
  const size = useWindowSize();

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
          <div className="section-body mt-5 mb-5" style={{height: `${size.height - 200}px`}}>
            <p className="section-body-text text-left">
            KAMU KURUM VE KURULUŞLARININ ÇAĞRI MERKEZİ VE HİZMET TEKNOLOJİLERİNDEKİ
            OPTIMIZASYONUNU SAĞLAMAK VE SEKTÖRDEKİ YABANCILAŞMA KARŞISINDA YERLİ BİR
            SERMAYE OLMAK ÜZERE KURULMUŞTUR.
            </p>
          </div>  
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Hakkimizda;