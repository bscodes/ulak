import React  from 'react'
import './style.scss'

import dokuman from '../../image/dokuman.png'
import sestanima from '../../image/sestanima.png'
import blokzinciri from '../../image/blokzinciri.png'
import santralIcon from '../../image/santral-icon.png'
import crmIcon from '../../image/crm-icon.png'

const ProductAccordion = () => {


  return(
    <>
    <div class="accordion row mb-5">
      <section class="accordion-item">
        <div class="accordion-item-content">
          <img src={dokuman} alt="product" className="card-image"/>
        </div>
      </section>
      <section class="accordion-item">
        <div class="accordion-item-content">
          <img src={sestanima} alt="product" className="card-image"/>
        </div>
      </section>
      <section  class="accordion-item">
        <div class="accordion-item-content">
          <img src={blokzinciri} alt="product" className="card-image"/>
        </div>
      </section>
      <section class="accordion-item">
        <div class="accordion-item-content">
          <img src={santralIcon} alt="product" className="card-image"/>
        </div>
      </section>
      <section class="accordion-item">
        <div class="accordion-item-content">
          <img src={crmIcon} alt="product" className="card-image"/>
        </div>
      </section>
    </div>
    </>
  )
}

export default ProductAccordion