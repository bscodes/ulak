import React from "react";
import { slide as Menu } from "react-burger-menu";

import icon from '../../image/hamburger-icon.png'
import cross from '../../image/cross.png'
import Accordion from '../../components/Accordion/Accordion'

export default props => {
  return (
    <Menu 
      burgerButtonClassName={ "my-class" } 
      customBurgerIcon={ <img src={icon} alt="" /> } 
      customCrossIcon={ <img src={cross} alt="" /> } 
      right>
      <hr className="line "/>
      <a className="menu-item" href="/hakkimizda">
        HAKKIMIZDA
      </a>
      <hr className="line "/>
      <Accordion/>
      <hr className="line "/>
      <a className="menu-item" href="/yetkinlik">
        PROJE YETKİNLİKLERİMİZ
      </a>
      <hr className="line "/>
      <a className="menu-item" href="/iletisim">
        İLETİŞİM
      </a>
    </Menu>
  );
};