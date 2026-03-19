import logo from "../../assets/images/site-logo.png";
import callIcon from "../../assets/images/call-icon-red.png";
import wpIcon from "../../assets/images/whatsapp-icon.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
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

                              <nav className="headerNav">
                                    <Navigation  />
                              </nav>
                        </div>
                  </header>
            </>
      )
}

export default Header;