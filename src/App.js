import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

/* pages */
import home from './pages/home/home';
import hakkimizda from './pages/hakkimizda/hakkimizda';
import bulutfilo from './pages/bulutfilo/bulutfilo';
import dijitalcati from './pages/dijitalcati/dijitalcati';
import stratejikplan from './pages/stratejikplan/stratejikplan';
import drive from './pages/drive/drive';

/* components */
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hamburger from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
    <Router>
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
      <Footer/>
    </Router>
  </>  
  );
}

export default App;
