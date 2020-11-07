import React/* , { useState } */ from 'react'
import './style.scss'

import dokuman from '../../image/dokuman.png'
import dokumanLogo from '../../image/1ulak_4.png'
import sestanima from '../../image/ses.jpeg'
import sesLogo from '../../image/1ulak_5.png'
import blokzinciri from '../../image/blokzinciri.png'
import blokzinciriLogo from '../../image/1ulak_7.png'
import santral from '../../image/santral.jpg'
import santralIcon from '../../image/1ulak_10.png'
import viys from '../../image/viys.jpg'
import viysLogo from '../../image/1ulak_9.png'

const ProductAccordion = () => {

  return(
    <>
    <div className="acc-wrapper">
      <div class="__container">
        <div class="card">
          <img src={dokumanLogo} alt="product" className="acc-logo" />
          <img src={dokuman} alt="product" className="acc-bg"/>
          
        </div>
        <div class="card">
          <img src={sesLogo} alt="product" className="acc-logo" />
          <img src={sestanima} alt="product"  className="acc-bg"/>
  
        </div>
        <div class="card" >
          <img src={blokzinciriLogo} alt="product" className="acc-logo" />
          <img src={blokzinciri} alt="product"  className="acc-bg"/>
        
        </div>
        <div class="card">
          <img src={santralIcon} alt="product" className="acc-logo" />
          <img src={santral} alt="product" className="acc-bg"/>
        
        </div>
        <div class="card">
          <img src={viysLogo} alt="product" className="acc-logo" />
          <img src={viys} alt="product" className="acc-bg"/>
         
        </div>
      </div>
    </div>

    </>
  )
}

export default ProductAccordion