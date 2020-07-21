import React from "react";
import { Link } from 'react-router-dom'
import { slide as Menu } from "react-burger-menu";
import './Sidebar.scss';

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
      <Link className="menu-item" to="/hakkimizda">
        HAKKIMIZDA
      </Link>
      <hr className="line "/>
      <Accordion/>
      <hr className="line "/>
      <Link className="menu-item" to="/iletisim">
        İLETİŞİM
      </Link>
    </Menu>
  );
};