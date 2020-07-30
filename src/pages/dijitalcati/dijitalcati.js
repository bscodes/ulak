import React from 'react';
import './cati.scss';
import CatiAccordion from '../../components/Accordion/CatiAccordion';

/* images */
import donusum from '../../image/donusum.png';
import catiheader from '../../image/catiheader.png';
import blogzinciri from '../../image/blogzinciri.png';
import uygulamalar from '../../image/uygulamalar.png';

export const icons = [
  {
    "id": "1",
    "icon": donusum,
    "title": "DİJİTAL DÖNÜŞÜM STRATEJİLERİNİN BELİRLENMESİ"
  },{
    "id": "2",
    "icon": blogzinciri,
    "title": "BLOK ZİNCİRİ PLATFORMUNUN KURULMASI"
  },{
    "id": "3",
    "icon": uygulamalar,
    "title": "UYGULAMALAR VE DÖNÜŞÜMÜN YAPILMASI VE YÖNETİLMESİ"
  }
]
const dijitalcati = () => {

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
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="icon-wrapper cati-wrapper" >
              <div className="container mt-4 mb-5">
                <div className="row no-gutters">
                  {
                    icons.map(i => (
                      <div className="col-lg-4 col-sm-4" key={i.id}>
                        <div className="section-item cati">
                          <img src={i.icon} alt="" className="section-body-icon"/>
                          <h5 className="icon-title text-dark text-center mt-4">
                            {i.title}
                          </h5>
                        </div>  
                      </div>
                    ))
                  }  
                </div>
              </div>
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

export default dijitalcati;