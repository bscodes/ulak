import React from 'react';
import './scada.scss';

/* images */
import scadaHeader from '../../image/scada-header.png';
import cerceve1 from '../../image/cerceve1.png';
import cerceve2 from '../../image/cerceve2.png';
import cerceve3 from '../../image/cerceve3.png';
import cerceve4 from '../../image/cerceve4.png';
import cerceve5 from '../../image/cerceve5.png';

export const icons = [
  {
    "id": "1",
    "icon": cerceve1,
    "class": "p-top",
    "titleClass": "pp-1",
    "title": "GİRİŞTE OKUTULAN KART SONRASINDA, SİSTEM KENDİ ÜZERİNDEKİ DATABASE'DEN KİŞİNİN YETKİSİNE BAKARAK ELEKTRONİK KİLİDE CEVAP VERİR"
  },{
    "id": "2",
    "icon": cerceve2,
    "class": "p-bottom",
    "titleClass": "pp-2",
    "title": "GİRİŞ YAPAN KİŞİ BİLGİSİ SERVERA GİDER."
  },{
    "id": "3",
    "icon": cerceve3,
    "class": "p-top",
    "titleClass": "pp-3",
    "title": "KAMERADAN GİRİŞ YAPAN KİŞİ VEYA KİŞİLERİN FOTOĞRAFI ÇEKİLEREK SERVER'A EKLENİR."
  },{
    "id": "4",
    "icon": cerceve4,
    "class": "p-bottom",
    "titleClass": "pp-4",
    "title": "KART ÇALINMASI VEYA KAYBOLMASI DURUMUNDA SİSTEMLERDEKİ VERİTABANINDAN İLGİLİ KART ID'Sİ BLACK LIST'E ALINIR, GİRİŞE İZİN VERİLMEZ. "
  },{
    "id": "5",
    "icon": cerceve5,
    "class": "p-top",
    "titleClass": "pp-5",
    "title": "ÇALINAN KART SİSTEMDE OKUTULDUĞU ANDA ALARM GELİR VE GÜVENLİK GÜÇLERİNE HABER VERİLİR."
  }
]
const scada = () => {

  return(
  <>
    <div className="section-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="section-header">
              <img src={scadaHeader} alt="" className="section-header-image"/>
              <h1 className="header-title scada-title text-light text-center">
                UZAKTAN TAKİP (SCADA) SİSTEMLERİ
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
                SAHADA BULUNAN VE UZAK ERİŞİMİ OLMAYAN CİHAZLARI YÖNETEBİLEN, SENSÖRLER VE KAMERA YARDIMI İLE SAHAYI MAKSİMUM DERECEDE GÜVENLİ HALE GETİREN "SAHA GÜVENLİK VE YÖNETİM SİSTEMİ"DİR
              </p>
            </div>  
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="icon-wrapper cati-wrapper scada-wrapper" >
              <div className="container-fluid mt-4 mb-5">
                <div className="row no-gutters">
                  {
                    icons.map(i => (
                      <div className="col-lg-2 col-sm-4" key={i.id}>
                        <div className={"section-item cati "+ i.class}>
                          <img src={i.icon} alt="" className="section-body-icon"/>
                        </div>
                        <div className={"title-wrapper " + i.titleClass}>
                          <h5 className="icon-title scada-title text-dark text-left mt-4">
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
    </div>
  </>
  );
}

export default scada;