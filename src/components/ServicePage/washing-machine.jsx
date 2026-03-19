import {Link} from "react-router-dom";
import ServiceData from "./serviceData";
const WashingMachine = () => {
      const { servicesWashingMachine, serviceAbout, popularServicesWP, guaranteeData, bookService } = ServiceData;;
      return (
            <>
            <div className="hero">
                  <div className="container">
                        {servicesWashingMachine.map((item, index) => (
                              <div key={index}>
                                    <div>
                                          <h1>{item.title}</h1>
                                          <p>{item.description}</p>
                                          <Link to="/contact" className="cta-btn">{item.link}</Link>
                                    </div>
                                    {servicesWashingMachine.map((item) => (
                                          <img src={item.image} alt={item.altTxt} />
                                    ))}
                              </div>
                        ))}
                  </div>
            </div>

            <div className="about">
                  <div className="container">
                        {serviceAbout.map((section, index) => (
                              <div key={index}>
                                    <h2>{section.title}</h2>

                                    {section.descriptionWM.map((desc, i) => (
                                          <p key={i}>
                                          {desc.before}

                                          <span className="highlight">{desc.highlight[0]}</span>

                                          {desc.middle && desc.middle[0]}
                                          {desc.middle && desc.middle[1]}

                                          {desc.highlight[1] && (
                                          <span className="highlight">{desc.highlight[1]}</span>
                                          )}


                                          {/* {desc.highlight[2] && (
                                                <span className="highlight">{desc.highlight[2]}</span>
                                          )} */}


                                          {desc.after}
                                          </p>
                                    ))}
                              </div>
                        ))}
                  </div>
            </div>

            <div className="services">
                  <div className="container">
                        {popularServicesWP.map((section) => (
                              <div key={section.hTxt}>
                              <h2>{section.hTxt}</h2>
                                    <div className="service-grid">
                                          {section.serviceList.map((service) => (
                                                <div key={service.id} className="service-card">
                                                      <h3>{service.title}</h3>
                                                      <p>{service.description}</p>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>

            <div className="guarantee">
                  {guaranteeData.map((item) => (
                        <div key={item} className="container">
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                        </div>
                  ))}
            </div>

            <div className="contact-section" id="contact">
                  {bookService.map((item) => (
                        <div key={item.id} className="container">
                              <h2>{item.title}</h2>
                              <p>{item.description}</p>
                              <div class="cta">
                                    <Link to={"tel:+91"} className="cta-btn">{item.btnTxt}</Link>
                              </div>
                        </div>
                  ))}
            </div>
            </>
      )
}

export default WashingMachine;