import React from 'react';
import './eksigorta.scss';

/* images */
import eksigortaHeader from '../../image/eksigorta-header.jpg';
import sigortaicon1 from '../../image/sigortaicon1.png';
import sigortaicon2 from '../../image/sigortaicon2.png';
import sigortaicon3 from '../../image/sigortaicon3.png';
import sigortaicon4 from '../../image/sigortaicon4.png';
import sigortaicon5 from '../../image/sigortaicon5.png';


const stratejikplan = () => {

  return(
  <>
    <div className="section-wrapper eksigorta-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="section-header">
              <img src={eksigortaHeader} alt="" className="section-header-image"/>
                <h1 className="header-title drive-title text-light text-center">
                    EK HİZMET SİGORTA ÜRÜNLERİ 
                </h1>
            </div>  
          </div>
        </div>
      </div>
      <div className="sigorta-icons">
        <div className="container-fluid h-100">
            <div className="row no-gutters-mobile h-100 justify-content-center">
                <div className="col-lg-2 col-sm-6">
                    <div className="thumb-wrapper">
                        <img src={sigortaicon1} alt="" className="icon-thumb"/>
                    </div>
                    <div className="inner-title-wrapper">
                        <h5 className="inner-title text-center">
                            BİREYSEL KORUMA SİGORTASI
                        </h5>
                    </div>
                    <div className="icon-info-wrapper">
                        <ul style={{"list-style-type": "none"}}>
                            <li className="icon-info">
                                FERDİ KAZA SİGORTASI
                            </li>
                            <li className="icon-info">
                                HAYAT SİGORTASI
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <div className="thumb-wrapper">
                        <img src={sigortaicon2} alt="" className="icon-thumb"/>
                    </div>
                    <div className="inner-title-wrapper">
                        <h5 className="inner-title text-center">
                            İSTEMDIŞI İŞSİZLİK
                            VE GELİR KORUMA SİGORTASI
                        </h5>
                    </div>
                    <div className="icon-info-wrapper">
                        <ul style={{"list-style-type": "none"}}>
                            <li className="icon-info">
                                FATURA KORUMA
                            </li>
                            <li className="icon-info">
                                MEVDUAT HESABI KORUMA
                            </li>
                            <li className="icon-info">
                                ALIŞVERİŞ SEPETİ KORUMA
                            </li>
                            <li className="icon-info">
                                YAŞAM STANDARTI GARANTİSİ
                            </li>
                            <li className="icon-info">
                                KART KAYIP/ÇALINTI ÜRÜN
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <div className="thumb-wrapper">
                        <img src={sigortaicon3} alt="" className="icon-thumb"/>
                    </div>
                    <div className="inner-title-wrapper">
                        <h5 className="inner-title text-center">
                            SAĞLIK SİGORTASI
                        </h5>
                    </div>
                    <div className="icon-info-wrapper">
                        <ul style={{"list-style-type": "none"}}>
                            <li className="icon-info">
                                GÜNDELİK HASTANE TAZMİNATI
                            </li>
                            <li className="icon-info">
                                TEHLİKELİ HASTALIKLAR SİGORTASI
                            </li>
                            <li className="icon-info">
                                KADIN KANSERİ ÜRÜNÜ
                            </li>
                            <li className="icon-info">
                                SEYAHAT SİGORTASI ÜRÜNÜ
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <div className="thumb-wrapper">
                        <img src={sigortaicon4} alt="" className="icon-thumb"/>
                    </div>
                    <div className="inner-title-wrapper">
                        <h5 className="inner-title text-center">
                            KİŞİSEL VARLIKLARI KORUMA SİGORTASI
                        </h5>
                    </div>
                    <div className="icon-info-wrapper">
                        <ul style={{"list-style-type": "none"}}>
                            <li className="icon-info">
                                CİHAZ KORUMA SİGORTASI
                            </li>
                            <li className="icon-info">
                                CİHAZ UZATILMIŞ GARANTİ
                            </li>
                            <li className="icon-info">
                                ARAÇ DEĞER KORUMA SİGORTASI
                            </li>
                            <li className="icon-info">
                                ARAÇ UZATILMIŞ GARANTİ
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <div className="thumb-wrapper">
                        <img src={sigortaicon5} alt="" className="icon-thumb"/>
                    </div>
                    <div className="inner-title-wrapper">
                        <h5 className="inner-title text-center">
                            KREDİ HAYAT SİGORTASI
                        </h5>
                    </div>
                    <div className="icon-info-wrapper">
                        <ul style={{"list-style-type": "none"}}>
                            <li className="icon-info">
                                KREDİ KORUMA SİGORTASI
                            </li>
                            <li className="icon-info">
                                (İHTİYAÇ, OTO VE MORTGAGE KREDİLERİ)
                            </li>
                            <li className="icon-info">
                                KREDİ KARTI KORUMA SİGORTASI
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default stratejikplan;