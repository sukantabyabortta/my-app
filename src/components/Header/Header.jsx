import logo from "../../assets/images/site-logo.png";
import callIcon from "../../assets/images/call-icon-red.png";
import wpIcon from "../../assets/images/whatsapp-icon.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const showNav = () => {
            setIsOpen(true); // always add, never remove
      };
      const hidenav = () => {
            setIsOpen(false); // always add, never remove
      };
      return (
            <>
                  <div className="floatIcon">
                        <Link to=""><img src={callIcon} alt="Call Icon" /></Link>
                        <Link to=""><img src={wpIcon} alt="WP Icon" /></Link>
                  </div>
                  <header className="header">
                        <div className="container">
                              <div className="siteLogo">
                              <Link to="/">
                                    <img src={logo} alt="Site Logo" />
                              </Link>
                              </div>

                              <nav className={`headerNav ${isOpen ? "change" : ""}`}>
                                    <span href="#" className="closeButton" onClick={hidenav}><i class="fa fa-times"></i></span>
                                    <Navigation  />
                              </nav>

                              <span href="#" className="mobileButton" onClick={showNav}><i class="fa fa-bars"></i></span>
                        </div>
                  </header>
            </>
      )
}

export default Header;
