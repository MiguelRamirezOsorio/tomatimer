import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";
import Programs from "./components/pages/Programs/Programs";
import SignUp from "./components/pages/SignUp/SignUp";
import Footer from "./components/pages/Footer/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services'  component={Services}/>
        <Route path='/programs'  component={Programs}/>
        <Route path='/sign-up'  component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
  