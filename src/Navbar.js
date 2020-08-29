import React from 'react';
import './App.css';
import ArticleCard from './ArticleCard';
import About from './Components/About';
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import {Route, Link, Switch} from "react-router-dom";

function Routercopy() {
  return (
    <div className="App">
      <nav className="navbar"> 
      
            <Link to="/Home" >Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Samples"> Samples </Link>
            <Link to="/Contact">Contact</Link>
      </nav>
      <Switch>
  <Route path="/Home" component={Home} />       
  <Route path="/Samples" component={ArticleCard} />
  <Route path="/About" component={About} />
  <Route path="/Services" component={Services} />
  <Route path="/Contact" component={Contact} />
  </Switch>
    </div>
  );
}
export default Routercopy;