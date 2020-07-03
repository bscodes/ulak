import React from 'react'
import a1 from '../../image/anasayfa_1.jpg';
import cati from '../../image/anasayfa_dijitalCati.jpg';
import strateji from '../../image/anasayfa_stratejikYonetim.jpg'

const Home = () => {
  return(
    <>
      <div className="custom-body text-light">
        <section className="hero-section">
          <div className="container-fluid">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="left-bar">
                  <img src={a1} alt="" className="hero-image"/>
                  <h3 className="hero-text">UlakTeknoloji</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-bar">
                  <div className="row no-gutters">
                    <div className="col-lg-12">
                      <div className="crop">
                        <img src={cati} alt="" className="hero-image"/>
                      </div>
                      <h3 className="hero-text">DİJİTAL ÇATI</h3>
                    </div>
                    <div className="col-lg-6">
                      <div className="four-bar">
                        <img src={strateji} alt="" className="hero-image"/>
                        <h3 className="hero-text-min">
                          STRATEJİK PLAN, KALİTE VE 
                          RİSK YÖNETİM SİSTEMİ
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="four-bar">
                        <img src={strateji} alt="" className="hero-image"/>
                        <h3 className="hero-text-min">
                          BULUT FİLO YÖNETİMİ
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="four-bar">
                        <img src={strateji} alt="" className="hero-image"/>
                        <h3 className="hero-text-min">DRIVE</h3>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="four-bar">
                        <img src={strateji} alt="" className="hero-image"/>
                        <h3 className="hero-text-min">
                          UZAKTAN TAKİP (SCADA) SİSTEMLERİ
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero-2">
          <div className="container">

          </div>
        </section>
      </div>
    </>
  );
}

export default Home;