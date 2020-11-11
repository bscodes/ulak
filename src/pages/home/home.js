import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero';
import ProductAccordion from '../../components/ProductAccordion/ProductAccordion';
import './home.scss'


import outbound from '../../image/outbound.jpg'
import inbound from '../../image/inbound.jpg'
import altyapi from '../../image/altyapi.jpg'
import danismanlik from '../../image/danismanlik.jpg'
import otomasyon from '../../image/otomasyon.jpg'
import teknik from '../../image/teknik.jpg'
import sm from '../../image/sm.jpg'

import om from '../../image/om.jpg'
import pm from '../../image/pm.jpg'
import tm from '../../image/tm.png'
import dm from '../../image/dm.jpg'


import sgk from '../../image/sgk.jpg'
import myk from '../../image/myk.jpg'
import iskur from '../../image/iskur.jpg'
import ailecalisma from '../../image/ailecalisma.jpg'
import ibb from '../../image/ibb_logo-2-rgb-300dpi.jpg'



const Home = () => {
  return(
    <>
      <div className="custom-body text-light">
        <Hero />

        <section className="middle">
          <div className="container">

            {/* ------------------------HİZMETLERİMİZ--------------------------------------- */}
            <div className="row">
              <div className="col-lg-12">
                <h1 className="middle-title text-center mt-4 mb-4">
                  HİZMETLERİMİZ
                </h1>
              </div>
            </div>
            <div className="row mb-5 text-center">
              
              <div className="col-lg-6">
                <Link className="text-light text-decoration-none" to="/hizmetlerimiz/1">
                <div className="service-card" 
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.6)
                  ), url(${outbound})`}} >

                  <div className="title-wrapper">
                    <h4 className="service-card-title">
                      OUTBOUND
                    </h4>
                  </div>  

                </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="text-light text-decoration-none" to="/hizmetlerimiz/2">
                <div className="service-card" 
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.6)
                  ), url(${inbound})`}}>
                  <h4 className="service-card-title">
                  INBOUND
                  </h4>

                </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="text-light text-decoration-none" to="/hizmetlerimiz/3">
                <div className="service-card"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.6)
                  ), url(${altyapi})`}}>
                  <h4 className="service-card-title">
                  TEKNOLOJİK ALTYAPI 
                  </h4>

                </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="text-light text-decoration-none" to="/hizmetlerimiz/4">
                <div className="service-card"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.6)
                  ), url(${danismanlik})`}}>
                  <h4 className="service-card-title">
                  DANIŞMANLIK 
                  </h4>

                </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="text-light text-decoration-none" to="/hizmetlerimiz/5">
                <div className="service-card"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.6)
                  ), url(${otomasyon})`}}>
                  <h4 className="service-card-title">
                  OTOMASYON
                  </h4>

                </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link className="text-light text-decoration-none" to="/hizmetlerimiz/6">
                <div className="service-card"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.6)
                  ), url(${teknik})`}}>
                  <h4 className="service-card-title">
                  İLETİŞİM MERKEZİ
                  </h4>

                </div>
                </Link>
              </div>
              <div className="col-lg-6 mx-auto">
                <Link className="text-light text-decoration-none" to="/hizmetlerimiz/7">
                <div className="service-card"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.6)
                  ), url(${sm})`}}>
                  <h4 className="service-card-title">
                  SOSYAL MEDYA
                  </h4>

                </div>
                </Link>
              </div>
            </div>
            {/* ------------------------HİZMETLERİMİZ end--------------------------------------- */}

            
            {/* ------------------------ÜRÜNLERİMİZ--------------------------------------- */}

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
            {/* ------------------------ÜRÜNLERİMİZ end--------------------------------------- */}


            {/* ------------------------çözümlerimiz--------------------------------------- */}
            <div className="row">
              <div className="col-lg-12">
                <h1 className="middle-title text-center mt-4 mb-4">
                  ÇÖZÜMLERİMİZ
                </h1>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <Link to="/destek-kadro" className="proje-link">
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
                <Link to="/proje-yonetimi" className="proje-link">
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
                <Link to="/teknoloji-yonetimi" className="proje-link">
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
                <Link to="/vatandas-deneyimi-yonetimi" className="proje-link">
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
            {/* ------------------------çözümlerimiz end--------------------------------------- */}
            

          </div>
        </section>

        {/* ------------------------section footer--------------------------------------- */}
        <div className="section-footer">
          <div className="footer-inner">
            
          </div>
        </div>
        {/* ------------------------section footer end--------------------------------------- */}


        {/* ------------------------references--------------------------------------- */}
        <div className="costom-body">
          <section className="middle">
            <div className="container">

              {/* title  */}
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="middle-title text-center mt-5 mb-4">
                    REFERANSLARIMIZ
                  </h1>
                </div>
              </div>
              {/* title end */}

              <div className="row">
                <div className="references-section ">
                  

                  <div className="reference-wrapper">
                    <img src={sgk} alt="" className="reference"/>
                  </div>

                  <div className="reference-wrapper">
                    <img src={myk} alt="" className="reference"/>
                  </div>

                  <div className="reference-wrapper">
                    <img src={iskur} alt="" className="reference"/>
                  </div>

                  <div className="reference-wrapper">
                    <img src={ailecalisma} alt="" className="reference"/>
                  </div>

                  <div className="reference-wrapper">
                    <img src={ibb} alt="" className="reference"/>
                  </div>
                    
                  
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ------------------------references end--------------------------------------- */}

      </div>
    </>
  );
}

export default Home;