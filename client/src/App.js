import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Header, Cards, About, Contact} from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/">
        <Header/>
        <Cards />
      </Route>
      <Route exact path="/about">
        <Header/>
        <About/>
      </Route>
      <Route exact path="/contact">
        <Header/>
        <Contact/>
      </Route>
    </Router>
    </div>
  );
}

export default App;

