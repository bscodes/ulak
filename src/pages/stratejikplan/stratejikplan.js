import React from 'react';
import './strateji.scss';

/* images */
import rozet1 from '../../image/rozet1.png';
import stratejikheader from '../../image/stratejik-header.jpg';
import rozet2 from '../../image/rozet2.png';
import rozet3 from '../../image/rozet3.png';

export const icons = [
  {
    "id": "1",
    "icon": rozet1,
    "title": "KALİTE YÖNETİM SİSTEMİ",
    "titleClass" : "rozet1",
    "info": {
        "1": "COSO (İç Kontrol), EFQM",
        "2": "ISO 9001:2015, ISO 27001:2013, ISO 31000:2018, Vb.",
        "3": "SKS, HASTANE VERİMLİLİK KRİTERLERİ, JCI, HIMMS",
        "4": "KVKK",
        "5": "YÖK KİDR,YÖKAK"
    }
  },{
    "id": "2",
    "icon": rozet2,
    "title": "STRATEJİK YÖNETİM",
    "titleClass" : "rozet2",
    "info": {
        "1": "Stratejik Plan",
        "2": "Performans Programı",
        "3": "İdare Faaliyet Raporu",
        "4": "Balanced ScoreCards"
    }
  },{
    "id": "3",
    "icon": rozet3,
    "title": "RİSK YÖNETİMİ",
    "titleClass" : "rozet3",
    "info": {
        "1": "Operasyonel Riskler",
        "2": "Stratejik Riskler",
        "3": "Değerlendirme ve Risk Kontrol Faaliyetleri"
    }
  }
]
const stratejikplan = () => {

  return(
  <>
    <div className="section-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="section-header">
              <img src={stratejikheader} alt="" className="section-header-image"/>
                <h1 className="strateji-title header-title text-light text-center">
                    STRATEJİK PLAN KALİTE VE RİSK YÖNETİM SİSTEMİ 
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
              BU YAZILIM, 5018 SAYILI KANUN VE İLGİLİ MEVZUAT, İÇ KONTROL SISTEMi iLE İLGİLİ DÜZENLEMELER, İDARENİN KAMU İÇ KONTROL STANDARTLARINA UYUM EYLEM PLANI ILE ULUSLARARASI STANDARTLARIN (COSO) GEREKLERİNİ YERİNE GETİRECEK YAPISIYLA İLGİLİ TÜM FAALİYETLERİN TEK ELDEN STANDART BIR YAPIDA GERÇEKLEŞTİRİLMESİ, ORTAK BIR DOKÜMANTASYON SAĞLANMASI, SÜREÇLERİN ETKIN BIR ŞEKİLDE İZLENMESİ, YÖNETİLMESİ VE RAPORLANMASINI SAĞLAR

              </p>
            </div>  
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="icon-wrapper stratejik-wrapper" >
              <div className="container mt-4 mb-5">
                <div className="row no-gutters">
                  {
                    icons.map(i => (
                      <div className="col-lg-4 col-sm-4" key={i.id}>
                        <div className="section-item stratejik">
                          <img src={i.icon} alt="" className="section-body-icon"/>
                          <h5 className={"icon-title text-dark text-center mt-4 " + i.titleClass}>
                            {i.title}
                          </h5>
                          <div className="rozet-info-wrapper">
                            <p className="rozet-info">
                                {i.info[1]}
                            </p>
                            <p className="rozet-info">
                                {i.info[2]}
                            </p>
                            <p className="rozet-info">
                                {i.info[3]}
                            </p>
                            <p className="rozet-info">
                                {i.info[4]}
                            </p>
                            <p className="rozet-info">
                                {i.info[5]}
                            </p>
                          </div>
                          
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

export default stratejikplan;