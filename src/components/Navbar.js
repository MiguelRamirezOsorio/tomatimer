import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiTomato } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
//import AuthOptions from "./pages/Auth/AuthOptions";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiTomato  className="navbar-icon" />
              TOMATIMER
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/programs"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Programs
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-in" className="btn-link">
                    <Button buttonStyle="btn--outline2">SIGN IN</Button>
                  </Link>
                ) : (
                  <Link
                    to="/sign-in"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline2" buttonSize="btn--mobile">
                      SIGN IN
                    </Button>
                  </Link>
                )}
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>

    </>
  );
}

export default Navbar;
