import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero';
import './home.scss'



import om from '../../image/om.jpg'
import pm from '../../image/pm.jpg'
import tm from '../../image/tm.png'
import dm from '../../image/dm.jpg'
import ProductAccordion from '../../components/ProductAccordion/ProductAccordion';


const Home = () => {
  return(
    <>
      <div className="custom-body text-light">
        <Hero />

        <section className="middle pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="middle-title text-center mt-4 mb-4">
                  HİZMETLERİMİZ
                </h1>
              </div>
            </div>
            <div className="row mb-5 text-center">
              
              <div className="col-lg-6">
                <div className="service-card">
                  <h4 className="service-card-title">
                    OUTBOUND
                  </h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-card">
                  <h4 className="service-card-title">
                  INBOUND
                  </h4>

                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-card">
                  <h4 className="service-card-title">
                  TEKNOLOJİK ALTYAPI 
                  </h4>

                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-card">
                  <h4 className="service-card-title">
                  DANIŞMANLIK 
                  </h4>

                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-card">
                  <h4 className="service-card-title">
                  OTOMASYON
                  </h4>

                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-card">
                  <h4 className="service-card-title">
                  İLETİŞİM MERKEZİ
                  </h4>

                </div>
              </div>
              <div className="col-lg-6 mx-auto">
                <div className="service-card">
                  <h4 className="service-card-title">
                  SOSYAL MEDYA
                  </h4>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h1 className="middle-title text-center mt-4 mb-4">
                  ÜRÜNLERİMİZ
                </h1>
              </div>
            </div>
            <div className="row">
              <ProductAccordion/>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <h1 className="middle-title text-center mt-4 mb-4">
                  ÇÖZÜMLERİMİZ
                </h1>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <Link to="/parmakizi" className="proje-link">
                <div className="middle-item">
                  <img src={om} alt="" className="item-image"/>
                </div>
                <div className="middle-item-title">
                  <h4 className="item-title">
                  DESTEK KADRO
                  VE OPERASYON
                  YÖNETİMİ
                  </h4>
                </div>
                </Link>
              </div>
              <div className="col-lg-3 col-sm-6">
                <Link to="/eksigorta" className="proje-link">
                <div className="middle-item">
                  <img src={pm} alt="" className="item-image"/>
                </div>
                <div className="middle-item-title">
                  <h4 className="item-title">
                    PROJE YÖNETİMİ
                  </h4>
                </div>
                </Link>
              </div>
              <div className="col-lg-3 col-sm-6">
                <Link to="/noktabakim" className="proje-link">
                <div className="middle-item">
                  <img src={tm} alt="" className="item-image"/>
                </div>
                <div className="middle-item-title">
                  <h4 className="item-title">
                    TEKNOLOJİ
                    YÖNETİMİ
                  </h4>
                </div>
                </Link>
              </div>
              <div className="col-lg-3 col-sm-6">
                <Link to="/fintech" className="proje-link">
                <div className="middle-item">
                  <img src={dm} alt="" className="item-image"/>
                </div>
                <div className="middle-item-title">
                  <h4 className="item-title">
                    VATANDAŞ
                    DENEYİMİ
                    YÖNETİMİ
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