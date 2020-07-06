import React from "react";
import { slide as Menu } from "react-burger-menu";
import icon from '../../image/hamburger-icon.png'
import cross from '../../image/cross.png'

export default props => {
  return (
    <Menu 
      burgerButtonClassName={ "my-class" } 
      customBurgerIcon={ <img src={icon} alt="" /> } 
      customCrossIcon={ <img src={cross} alt="" /> } 
      right>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};