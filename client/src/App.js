import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Header, Cards, About, Contact, Footer} from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/">
        <Header/>
        <Cards />
        <Footer />
      </Route>
      <Route exact path="/about">
        <Header/>
        <About/>
        <Footer />
      </Route>
      <Route exact path="/contact">
        <Header/>
        <Contact/>
        <br></br>
        <br></br>
        <Footer />
      </Route>
    </Router>
    </div>
  );
}

export default App;

