import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/index";
import Home from "./components/Home/index";
import VideogameDetail from "./components/VideogameDetail/index";
import VideogameCreation from "./components/VideogameCreation/index";
import About from "../src/components/About/About"
//para algo...
function App() {
  return (
    <div className="App">
       
        <Route exact path="/" component={LandingPage}/>
        {/* <NavBar /> */}
        <Route exact path="/videogames" render={({location})=> <Home location={location}/>}/>
        
        <Route exact path="/videogames/:id" render={({match})=> <VideogameDetail match={match}/>}/>
        
        <Route exact path="/videogame" component={VideogameCreation} />
        
        <Route path="/about" render = {() => <About />} />
    </div>
  );
}

export default App;
 