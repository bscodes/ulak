/* ----------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------PACKAGE JSON'DAN HOMEPAGE KISMINI DEĞİŞTİR------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
------------------------------------------------------------------------------- */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

/* pages */
import home from './pages/home/home';
import hakkimizda from './pages/hakkimizda/hakkimizda';
import iletisim from './pages/iletisim/iletisim';

import Hizmetlerimiz from './pages/hizmetlerimiz/hizmetlerimiz';

import DestekKadro from './pages/cozumlerimiz/DestekKadro';
import ProjeYonetimi from './pages/cozumlerimiz/ProjeYonetimi';
import TeknolojiYonetimi from './pages/cozumlerimiz/TeknolojiYonetimi';
import VatandasDeneyimi from './pages/cozumlerimiz/VatandasDeneyimi';


/* components */
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hamburger from './components/Sidebar/Sidebar'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
    
    <Router>
      
      <ScrollToTop/>
      <Hamburger />
      <Navbar/>
      
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/hakkimizda" component={hakkimizda}/>

        <Route exact path="/iletisim" component={iletisim}/>

        <Route  path="/hizmetlerimiz" component={Hizmetlerimiz}/>
        <Route exact path="/hizmetlerimiz/1" component={Hizmetlerimiz}/>
        <Route exact path="/hizmetlerimiz/2" component={Hizmetlerimiz}/>
        <Route exact path="/hizmetlerimiz/3" component={Hizmetlerimiz}/>
        <Route exact path="/hizmetlerimiz/4" component={Hizmetlerimiz}/>
        <Route exact path="/hizmetlerimiz/5" component={Hizmetlerimiz}/>
        <Route exact path="/hizmetlerimiz/6" component={Hizmetlerimiz}/>
        <Route exact path="/hizmetlerimiz/7" component={Hizmetlerimiz}/>





        <Route exact path="/destek-kadro" component={DestekKadro}/>
        <Route exact path="/proje-yonetimi" component={ProjeYonetimi}/>
        <Route exact path="/teknoloji-yonetimi" component={TeknolojiYonetimi}/>
        <Route exact path="/vatandas-deneyimi-yonetimi" component={VatandasDeneyimi}/>

        
      </Switch>
      <Footer/>
      
    </Router>
  </>  
  );
}

export default App;
