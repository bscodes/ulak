import React from 'react';
import bulut from '../../image/bulutfilo.jpg';
import aractakibi from '../../image/aractakibi.png';
import maliyet from '../../image/maliyet.png';
import bildirim from '../../image/bildirim.png';
import kaza from '../../image/kaza.png';
import servis from '../../image/servis.png';
import lastik from '../../image/lastik.png';
import yakit from '../../image/yakit.png';
import route from '../../image/route.png';
import raporlama from '../../image/raporlama.png';


export const icons = [
  {
    "id": "1",
    "icon": aractakibi,
    "title": "ARAÇ TAKİBİ"
  },{
    "id": "2",
    "icon": maliyet,
    "title": "DETAYLI MALİYET ANALİZİ"
  },{
    "id": "3",
    "icon": bildirim,
    "title": "BİLDİRİM VE HATIRLATICILAR"
  },{
    "id": "4",
    "icon": kaza,
    "title": "KAZA VE CEZALAR"
  },{
    "id": "5",
    "icon": servis,
    "title": "SERVİS BAKIM KAYITLARI"
  },{
    "id": "6",
    "icon": lastik,
    "title": "LASTİK KAYITLARI"
  },{
    "id": "7",
    "icon": yakit,
    "title": "YAKIT KONTROL"
  },{
    "id": "8",
    "icon": route,
    "title": "ROUTE TAKİP"
  },{
    "id": "9",
    "icon": raporlama,
    "title": "CANLI RAPORLAMA"
  }
]

const bulutfilo = () => {
  return(
  <>
    <div className="section-wrapper">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-12">
            <div className="section-header">
              <img src={bulut} alt="" className="section-header-image"/>
              <h1 className="header-title text-light text-center">
                BULUT FİLO YÖNETİMİ
              </h1>
            </div>  
          </div>
        </div>
        <div className="icon-wrapper">
          <div className="container mt-4 mb-4">
            <div className="row no-gutters">
                {
                  icons.map(i => (
                    <div className="col-lg-2" key={i.id} >
                      <div className="section-item">
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
  </>
  );
}

export default bulutfilo;