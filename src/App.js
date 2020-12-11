import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Contact from './components/Footer'
import Projects from './components/pages/Projects'
import Certi_1 from './components/pages/Certification_1'
import Certi_2 from './components/pages/Certification_2'
import Certi_3 from './components/pages/Certification_3'
import About from './components/pages/About'

function App() {
  return (
  <Router>
    <NavBar/>
    <Switch>
     <Route path="/protofolio" exact component={Home}/>
     <Route path="/contact" component={Contact}/>
     <Route path="/projects" component={Projects}/>
     <Route path="/certi_1" component={Certi_1}/>
     <Route path="/certi_2" component={Certi_2}/>
     <Route path="/certi_3" component={Certi_3}/>
     <Route path="/about" component={About}/>

    </Switch>
  </Router>
  );
}

export default App;
