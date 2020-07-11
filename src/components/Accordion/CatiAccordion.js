import React from 'react';
import Collapsible from 'react-collapsible';
import crmIcon from '../../image/crm-icon.png'
 
const CatiAccordion = () => {
  return (
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
                VİYS Müşteri Hizmetleri yönetim platformlarının 
                Türkiye’deki kaynaklarla dünya standardında 
                olmasını sağlamak üzere geliştirilen yazılımdır. 
                Mevcutta bir kurum ve kuruluş tarafından da 
                kullanılmaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>



      
    </Collapsible>
  );
}

export default CatiAccordion