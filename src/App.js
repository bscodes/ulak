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

/* components */
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hamburger from './components/Sidebar/Sidebar'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
    <Page loader={"bubble-spin"} color={"#A9A9A9"} size={7} duration={3}>
    <Router>
      
      <ScrollToTop/>
      <Hamburger />
      <Navbar/>
      
      <Switch>
        <Route exact path="/" component={home}/>
      </Switch>
      <Switch>
        <Route exact path="/hakkimizda" component={hakkimizda}/>
      </Switch>
      <Switch>
        <Route exact path="/bulutfilo" component={bulutfilo}/>
      </Switch>
      <Switch>
        <Route exact path="/cati" component={dijitalcati}/>
      </Switch>
      <Switch>
        <Route exact path="/stratejikplan" component={stratejikplan}/>
      </Switch>
      <Switch>
        <Route exact path="/drive" component={drive}/>
      </Switch>
      <Switch>
        <Route exact path="/scada" component={scada}/>
      </Switch>
      <Switch>
        <Route exact path="/iletisim" component={iletisim}/>
      </Switch>
      <Switch>
        <Route exact path="/fintech" component={fintech}/>
      </Switch>
      <Switch>
        <Route exact path="/parmakizi" component={parmakizi}/>
      </Switch>
      <Switch>
        <Route exact path="/noktabakim" component={sahaurun}/>
      </Switch>
      <Switch>
        <Route exact path="/eksigorta" component={eksigorta}/>
      </Switch>
      <Footer/>
      
    </Router>
    </Page>
  </>  
  );
}

export default App;
