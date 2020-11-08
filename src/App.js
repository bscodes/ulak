import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

/* pages */
import home from './pages/home/home';
import hakkimizda from './pages/hakkimizda/hakkimizda';
import bulutfilo from './pages/bulutfilo/bulutfilo';
import stratejikplan from './pages/stratejikplan/stratejikplan';
import drive from './pages/drive/drive';
import scada from './pages/scada/scada';
import iletisim from './pages/iletisim/iletisim';

import Dijitalcati from './pages/dijitalcati/dijitalcati';

import DestekKadro from './pages/cozumlerimiz/DestekKadro';
import ProjeYonetimi from './pages/cozumlerimiz/ProjeYonetimi';
import TeknolojiYonetimi from './pages/cozumlerimiz/TeknolojiYonetimi';
import VatandasDeneyimi from './pages/cozumlerimiz/VatandasDeneyimi';


import parmakizi from './pages/parmakizi/parmakizi';
import sahaurun from './pages/sahaurun/sahaurun';
import eksigorta from './pages/eksigorta/eksigorta';

/* inner pages */
/* import catiSantral from './pages/dijitalcati/catiSantral';
import catiSesTanima from './pages/dijitalcati/catiSesTanima';
import catiGiys from './pages/dijitalcati/catiGiys';
import catiGys from './pages/dijitalcati/catiGys';
import catiIk from './pages/dijitalcati/catiIK';
import catiDys from './pages/dijitalcati/catiDys'; */

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
        <Route exact path="/bulutfilo" component={bulutfilo}/>
        <Route exact path="/stratejikplan" component={stratejikplan}/>
        <Route exact path="/drive" component={drive}/>
        <Route exact path="/scada" component={scada}/>
        <Route exact path="/iletisim" component={iletisim}/>

        <Route exact path="/cati" component={Dijitalcati}/>
        

        <Route exact path="/destek-kadro" component={DestekKadro}/>
        <Route exact path="/proje-yonetimi" component={ProjeYonetimi}/>
        <Route exact path="/teknoloji-yonetimi" component={TeknolojiYonetimi}/>
        <Route exact path="/vatandas-deneyimi-yonetimi" component={VatandasDeneyimi}/>

        <Route exact path="/parmakizi" component={parmakizi}/>
        <Route exact path="/noktabakim" component={sahaurun}/>
        <Route exact path="/eksigorta" component={eksigorta}/>
        {/* inner routes */}
{/*         <Route exact path="/cati/santral" component={catiSantral}/>
        <Route exact path="/cati/sestanima" component={catiSesTanima}/>
        <Route exact path="/cati/giys" component={catiGiys}/>
        <Route exact path="/cati/gys" component={catiGys}/>
        <Route exact path="/cati/ik" component={catiIk}/>
        <Route exact path="/cati/dys" component={catiDys}/> */}
        
      </Switch>
      <Footer/>
      
    </Router>
  </>  
  );
}

export default App;
