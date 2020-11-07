import React from "react";
import { Link } from 'react-router-dom'
import { slide as Menu } from "react-burger-menu";
import './Sidebar.scss';

import { AiOutlineMenu } from 'react-icons/ai';
import cross from '../../image/cross.png'


export default props => {
  return (
    <Menu 
      burgerButtonClassName={ "my-class" } 
      customBurgerIcon={ <AiOutlineMenu /> } 
      customCrossIcon={ <img src={cross} alt="" /> } 
      right>
      <hr className="line "/>
      <Link className="menu-item" to="/hakkimizda">
        HAKKIMIZDA
      </Link>
      <hr className="line "/>
      <Link className="menu-item" to="/hizmetlerimiz">
        HİZMETLERİMİZ
      </Link>
      <hr className="line "/>
      <Link className="menu-item" to="/iletisim">
        İLETİŞİM
      </Link>
      <hr className="line "/>
    </Menu>
  );
};