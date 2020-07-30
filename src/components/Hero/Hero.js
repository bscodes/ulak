import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.scss'

import a2 from '../../image/anasayfa_2.jpg';
import strateji from '../../image/stratejik.jpg'
import filo from '../../image/anasayfa_buşutfilo.jpg'
import scada from '../../image/anasayfa_scada.jpg'
import drive from '../../image/anasayfa_drive.png'

const Hero = () => {
  return(
    <>
      <div className="custom-body text-light">
        <section className="hero-section">
          <div className="container-fluid">
            <div className="row no-gutters">
              <div className="col-lg-6 col-sm-12">
                <div className="left-bar gradient">
                  <Link to="/cati" className="hero-router">
                    <img src={a2} alt="" className="hero-image"/>
                    <h3 className="hero-text text-left">
                      DİJİTAL ÇATI
                    </h3>
                  
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="right-bar">
                  <div className="row no-gutters">
                    <div className="col-lg-6 col-sm-6">
                      <div className="four-bar gradient">
                        <Link to="/stratejikplan" className="hero-router">
                          <img src={strateji} alt="" className="hero-image"/>
                          <h3 className="hero-text-min first">
                            STRATEJİK PLAN, KALİTE VE 
                            RİSK YÖNETİM SİSTEMİ
                          </h3>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="four-bar gradient">
                        <Link to="/bulutfilo" className="hero-router">
                          <img src={filo} alt="" className="hero-image"/>
                          <h3 className="hero-text-min">
                            BULUT FİLO YÖNETİMİ
                          </h3>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="four-bar gradient">
                        <Link to="/drive" className="hero-router">
                          <img src={drive} alt="" className="hero-image"/>
                          <h3 className="hero-text-min">DRIVE</h3>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="four-bar gradient">
                        <Link to="/scada" className="hero-router">

                          <img src={scada} alt="" className="hero-image"/>
                          <h3 className="hero-text-min">
                            UZAKTAN TAKİP (SCADA) SİSTEMLERİ
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;