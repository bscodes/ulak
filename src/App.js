import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from 'react-page-loading';
import './App.scss';

/* pages */
import home from './pages/home/home';
import hakkimizda from './pages/hakkimizda/hakkimizda';
import bulutfilo from './pages/bulutfilo/bulutfilo';
import dijitalcati from './pages/dijitalcati/dijitalcati';
import stratejikplan from './pages/stratejikplan/stratejikplan';
import drive from './pages/drive/drive';
import scada from './pages/scada/scada';
import iletisim from './pages/iletisim/iletisim';
import fintech from './pages/fintech/fintech';
import parmakizi from './pages/parmakizi/parmakizi';
import sahaurun from './pages/sahaurun/sahaurun';
import eksigorta from './pages/eksigorta/eksigorta';

/* inner pages */
import catiSantral from './pages/dijitalcati/catiSantral';
import catiSesTanima from './pages/dijitalcati/catiSesTanima';
import catiGiys from './pages/dijitalcati/catiGiys';
import catiGys from './pages/dijitalcati/catiGys';
import catiIk from './pages/dijitalcati/catiIK';
import catiDys from './pages/dijitalcati/catiDys';

/* components */
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hamburger from './components/Sidebar/Sidebar'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
    <Page loader={"bubble-spin"} color={"#A9A9A9"} size={7} duration={"8"}>
    <Router>
      
      <ScrollToTop/>
      <Hamburger />
      <Navbar/>
      
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/hakkimizda" component={hakkimizda}/>
        <Route exact path="/bulutfilo" component={bulutfilo}/>
        <Route exact path="/cati" component={dijitalcati}/>
        <Route exact path="/stratejikplan" component={stratejikplan}/>
        <Route exact path="/drive" component={drive}/>
        <Route exact path="/scada" component={scada}/>
        <Route exact path="/iletisim" component={iletisim}/>
        <Route exact path="/fintech" component={fintech}/>
        <Route exact path="/parmakizi" component={parmakizi}/>
        <Route exact path="/noktabakim" component={sahaurun}/>
        <Route exact path="/eksigorta" component={eksigorta}/>
        {/* inner routes */}
        <Route exact path="/cati/santral" component={catiSantral}/>
        <Route exact path="/cati/sestanima" component={catiSesTanima}/>
        <Route exact path="/cati/giys" component={catiGiys}/>
        <Route exact path="/cati/gys" component={catiGys}/>
        <Route exact path="/cati/ik" component={catiIk}/>
        <Route exact path="/cati/dys" component={catiDys}/>
        
      </Switch>
      <Footer/>
      
    </Router>
    </Page>
  </>  
  );
}

export default App;
