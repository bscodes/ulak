import React from "react";
import { Link } from 'react-router-dom'
import { slide as Menu } from "react-burger-menu";
import './Sidebar.scss';

import { AiOutlineMenu } from 'react-icons/ai';
import cross from '../../image/cross.png'


const Sidebar = props => {
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
      <Link className="menu-item" to="/destek-kadro">
        DESTEK KADRO VE OPERASYON YÖNETİMİ
      </Link>
      <hr className="line "/>
      <Link className="menu-item" to="/proje-yonetimi">
      PROJE YÖNETİMİ
      </Link>
      <hr className="line "/>
      <Link className="menu-item" to="/teknoloji-yonetimi">
      TEKNOLOJİ YÖNETİMİ
      </Link>
      <hr className="line "/>
      <Link className="menu-item" to="/vatandas-deneyimi-yonetimi">
      VATANDAŞ DENEYİMİ YÖNETİMİ
      </Link>
      <hr className="line "/>
      <Link className="menu-item" to="/iletisim">
        İLETİŞİM
      </Link>
      <hr className="line "/>
    </Menu>
  );
};
export default Sidebar
