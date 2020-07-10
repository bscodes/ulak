import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

/* pages */
import Home from './pages/home/home';
import hakkimizda from './pages/hakkimizda/hakkimizda';
import bulutfilo from './pages/bulutfilo/bulutfilo';
import dijitalcati from './pages/dijitalcati/dijitalcati';

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
        <Route exact path="/" component={Home}/>
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
      <Footer/>
    </Router>
  </>  
  );
}

export default App;
