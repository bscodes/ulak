import React from 'react';
import './CatiAccordion.scss';


import Collapsible from 'react-collapsible';
import crmIcon from '../../image/crm-icon.png'
import santralIcon from '../../image/santral-icon.png'
import sestanima from '../../image/sestanima.png'
import goruntuisleme from '../../image/goruntuisleme.png'
import gys from '../../image/gys.png'
import ik from '../../image/ik.png'
import dokuman from '../../image/dokuman.png'

const CatiAccordion = () => {
  return (
    <div className="collapse-wrapper">
    <Collapsible
      
      className="cati-accordion text-dark text-left"
      openedClassName="cati-accordion opened text-dark text-left" 
      trigger={
        <div className="acc-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-2">
                <div className="acc-image-holder mt-2 mb-2">
                  <img src={crmIcon} alt="" className="acc-image"/>
                  <div className="acc-title-holder ml-4">
                    <h3 className="acc-title">
                      CRM
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      triggerTagName="div"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ml-auto">
            <div className="acc-text-holder mt-2 mb-2">
              <p className="accordion-text">
              VİYS MÜŞTERİ HİZMETLERİ YONETİM PLATFORMLARININ 
                TÜRKİYE'DEKİ KAYNAKLARLA DÜNYA STANDARDINDA 
                OLMASINI SAĞLAMAK ÜZERE GELİŞTİRİLEN YAZILIMDIR. 
                MEVCUTTA BIR KURUM VE KURULUŞ TARAFINDAN DA 
                KULLANILMAKTADIR.

              </p>
            </div>
          </div>
        </div>
      </div>
    </Collapsible>
    <Collapsible 
      open
      className="cati-accordion text-dark text-left"
      openedClassName="cati-accordion opened text-dark text-left" 
      trigger={
        <div className="acc-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-2">
                <div className="acc-image-holder mt-2 mb-2">
                  <img src={santralIcon} alt="" className="acc-image"/>
                  <div className="acc-title-holder ml-4">
                    <h3 className="acc-title">
                      SANTRAL
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      triggerTagName="div"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ml-auto">
            <div className="acc-text-holder mt-2 mb-2">
              <p className="accordion-text">
              SANTRAL SES VE TELEKOM TEKNOLOJİLERİNİN YÖNETİLDİĞİ ÜRÜN GRUBUDUR. KURUM VE KURULUŞLARIN İHTİYACI OLAN TELEKOMÜNİKASYON YAZILIMLARININ SAĞLANDIĞI ÜRÜNDÜR
              </p>
            </div>
          </div>
        </div>
      </div>
    </Collapsible>
    <Collapsible 
      className="cati-accordion text-dark text-left"
      openedClassName="cati-accordion opened text-dark text-left" 
      trigger={
        <div className="acc-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-2">
                <div className="acc-image-holder mt-2 mb-2">
                  <img src={sestanima} alt="" className="acc-image"/>
                  <div className="acc-title-holder ml-4">
                    <h3 className="acc-title">
                      SES TANIMA VE BİYOMETRİ
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      triggerTagName="div"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ml-auto">
            <div className="acc-text-holder mt-2 mb-2">
              <p className="accordion-text">
              VİYS MÜŞTERİ HİZMETLERİ YONETİM PLATFORMLARININ 
                TÜRKİYE'DEKİ KAYNAKLARLA DÜNYA STANDARDINDA 
                OLMASINI SAĞLAMAK ÜZERE GELİŞTİRİLEN YAZILIMDIR. 
                MEVCUTTA BIR KURUM VE KURULUŞ TARAFINDAN DA 
                KULLANILMAKTADIR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Collapsible>
    <Collapsible 
      className="cati-accordion text-dark text-left"
      openedClassName="cati-accordion opened text-dark text-left" 
      trigger={
        <div className="acc-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-2">
                <div className="acc-image-holder mt-2 mb-2">
                  <img src={goruntuisleme} alt="" className="acc-image"/>
                  <div className="acc-title-holder ml-4">
                    <h3 className="acc-title">
                      GÖRÜNTÜ İŞLEME SİSTEMİ
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      triggerTagName="div"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ml-auto">
            <div className="acc-text-holder mt-2 mb-2">
              <p className="accordion-text">
              GİYS KAMERALARIN OLUŞTURDUĞU GÖRÜNTÜLERİN İŞLENDİĞİ VE ANALİZ EDİLDİĞİ YAZILIMDIR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Collapsible>
    <Collapsible 
      className="cati-accordion text-dark text-left"
      openedClassName="cati-accordion opened text-dark text-left" 
      trigger={
        <div className="acc-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-2">
                <div className="acc-image-holder mt-2 mb-2">
                  <img src={gys} alt="" className="acc-image"/>
                  <div className="acc-title-holder ml-4">
                    <h3 className="acc-title">
                      GYS: GAYRİMENKUL Yönetim Sistemi
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      triggerTagName="div"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ml-auto">
            <div className="acc-text-holder mt-2 mb-2">
              <p className="accordion-text">
              GYS GAYRİMENKULLERİN DEĞERLENDİRİLMESİ, YÖNETİLMESİNİN GÜNCEL OLARAK TAKİP EDİLMESİNİ SAĞLAYAN YAZILIMDIR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Collapsible>
    <Collapsible 
      className="cati-accordion text-dark text-left"
      openedClassName="cati-accordion opened text-dark text-left" 
      trigger={
        <div className="acc-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-2">
                <div className="acc-image-holder mt-2 mb-2">
                  <img src={ik} alt="" className="acc-image"/>
                  <div className="acc-title-holder ml-4">
                    <h3 className="acc-title">
                      İNSAN KAYNAKLARI
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      triggerTagName="div"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ml-auto">
            <div className="acc-text-holder mt-2 mb-2">
              <p className="accordion-text">
              IK PERSONELLERİN ÖZLÜK VE İŞ HAYATINI DÜZENLEYEN YAZILIMDIR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Collapsible>
    <Collapsible 
      className="cati-accordion text-dark text-left"
      openedClassName="cati-accordion opened text-dark text-left" 
      trigger={
        <div className="acc-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-2">
                <div className="acc-image-holder mt-2 mb-2">
                  <img src={dokuman} alt="" className="acc-image"/>
                  <div className="acc-title-holder ml-4">
                    <h3 className="acc-title">
                      DYS: DOKÜMAN YÖNETİM SİSTEMİ
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      triggerTagName="div"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ml-auto">
            <div className="acc-text-holder mt-2 mb-2">
              <p className="accordion-text">
              DYS DOKÜMANLARIN DİJİTALLEŞTİRİLMESİ VE DİJİTAL OLUŞMUŞ YA DA ÜRETİLEN DOKÜMANLARIN YÖNETİLMESİ İÇİN GELİŞTİRİLEN YAZILIMDIR
              </p>
            </div>
          </div>
        </div>
      </div>
    </Collapsible>
    </div>
  );
}

export default CatiAccordion