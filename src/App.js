import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";
import Programs from "./components/pages/Programs/Programs";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/Auth/SignUp";
import Footer from "./components/pages/Footer/Footer";
import UserContext from "./context/UserContext";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/programs" component={Programs} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
          <Footer />
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
