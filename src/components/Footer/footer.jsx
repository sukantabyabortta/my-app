import { NavLink } from "react-router-dom";
import navData from "../Header/NavData";
import LocationIcon from '../../assets/images/location-icon.png';
import EmailIcon from '../../assets/images/email-icon.png';
import CallIcon from '../../assets/images/call-icon.png';
import FooterLogo from '../../assets/images/footer-logo.png';


const Footer = () => {
      return (
            <>
                  <footer className="footer">
                        <div className="topBar">
                              <div className="infoItem">
                              <img src={LocationIcon} alt="Location Icon" />
                              <div><strong>Address</strong><a href="contact.html">Get Direction</a></div>
                              </div>
                              <div className="infoItem">
                              <img src={EmailIcon} alt="Email Icon" />
                              <div><strong>Email us:</strong><a href="mailto:SRappliancecare@gmail.com">SRappliancecare@gmail.com</a></div>
                              </div>
                              <div className="infoItem">
                              <img src={CallIcon} alt="Call Icon" />
                              <div><strong>Call us on:</strong><a href="tel:+91 7980011385">+91 7980011385</a></div>
                              </div>
                        </div>

                        <div className="footerBottom">
                              <div className="container">
                              <div>
                                    <div className="footerCol brand-col">
                                          <NavLink to="/" className="footerLogo">
                                                <img src={FooterLogo} alt="Site Logo" />
                                          </NavLink>
                                          <p className="gstTxt">Goods and Services Tax<br />08BADPJ1881L1ZG</p>
                                    </div>

                                    <div className="footerCol">
                                          <h4>Useful Links</h4>
                                          <ul>
                                                {navData.map((item, index) => (
                                                <li key={index}>
                                                <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")}>
                                                      {item.label}
                                                </NavLink>
                                                </li>
                                                ))}
                                          </ul>
                                    </div>

                                    <div className="footerCol">
                                          <h4>Our Services</h4>
                                          <ul>
                                                {navData.find((item) => item.dropdown)?.dropdown.map((item, index) => (
                                                <li key={index}>
                                                      <NavLink
                                                      to={item.path}
                                                      className={({ isActive }) => (isActive ? "active" : "")}
                                                      >
                                                      {item.label}
                                                      </NavLink>
                                                </li>
                                                ))}
                                          </ul>
                                    </div>

                                    <div className="footerCol">
                                          <h4>Contact Info</h4>
                                          <address>
                                          Kolkata, Westbengal, India<br />
                                          <strong>Phone:</strong> +91 7980011385
                                    </address>
                                    </div>
                              </div>
                              </div>
                        </div>
                  </footer>
            </>
      )
}

export default Footer;