import React from 'react';

/* images */
import donusum from '../../image/donusum.png';
import scadaHeader from '../../image/scada-header.png';
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
              Dijital tek çatı Kurum ve Kuruluşların sistemlerinin en üst kapmanda vatandaşa yönetiminin olduğu en alt katmanda da tüm system güvenliği ve verisinin Blok zinciri ile birbirine bağladığı Yerli/Milli’ye dijital dönüşüm hareketidir.
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
                  yeni tasarım gelecek 
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