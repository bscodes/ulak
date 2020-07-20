import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero';
import './home.scss'


import parmak from '../../image/anasayfa_parmakizi.jpg'
import sigorta from '../../image/ek-sigorta.jpg'
import sahaurun from '../../image/anasayfa_sahaurun.jpg'
import fintech from '../../image/anasayfa_fintek.jpg'





const Home = () => {
  return(
    <>
      <div className="custom-body text-light">
        <Hero />
        <section className="cati-middle">
          <div className="cati-middle-bg">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="digital-cati-wrapper">
                      <Link to="/cati" className="hero-router"
                            style={{
                              "display":"grid",
                              "color": "white"
                            }}
                          >
                          <div className="cati-image-wrapper">
                              <h3 className="cati-banner-text">DİJİTAL ÇATI</h3>
                          </div>
                        </Link>
                      
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="middle pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="middle-title text-center mt-4 mb-4">
                  PROJE YETKİNLİKLERİMİZ
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <Link to="/parmakizi" className="proje-link">
                <div className="middle-item">
                  <img src={parmak} alt="" className="item-image"/>
                  <h4 className="item-title">
                    PARMAK İZİ ONAY SÜRECİ
                  </h4>
                </div>
                </Link>
              </div>
              <div className="col-lg-3 col-sm-6">
                <Link to="/eksigorta" className="proje-link">
                <div className="middle-item">
                  <img src={sigorta} alt="" className="item-image"/>
                  <h4 className="item-title">
                    HİZMETLERDE EK SİGORTA ÜRÜNÜ
                  </h4>
                </div>
                </Link>
              </div>
              <div className="col-lg-3 col-sm-6">
                <Link to="/noktabakim" className="proje-link">
                <div className="middle-item">
                  <img src={sahaurun} alt="" className="item-image"/>
                  <h4 className="item-title">
                    SAHA ÜRÜN VEYA NOKTA BAKIM,
                    ÇÖZÜM YÖNETİMİ
                  </h4>
                </div>
                </Link>
              </div>
              <div className="col-lg-3 col-sm-6">
                <Link to="/fintech" className="proje-link">
                <div className="middle-item">
                  <img src={fintech} alt="" className="item-image"/>
                  <h4 className="item-title">
                    FINTECH ÜRÜN YÖNETİMİ
                  </h4>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
}

export default Home;