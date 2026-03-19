import Breadcrumbs from "../Breadcrumbs";
import aboutData from "./aboutData";
import FaqPage from "../Faq/FaqPage";

// function SecTitle({ title }) {  
//   const words = title.split(" ");
//   const firstWord = words[0];
//   const restWords = words.slice(1).join(" ");

//   return (
//     <h2>
//       <span>{ firstWord }</span> { restWords }
//     </h2>
//   );
// }
const About = () => {
      const { intro, trustList, call, aboutImage, floatingBadge, statsSec } = aboutData;
      const { heading, paragraphs } = intro;

      return (
            <>
                  <Breadcrumbs 
                        pageTitle="About Us" 
                        items={[
                        { label: "Home", link: "/" }
                        ]}
                  />
                  <section className="aboutPageCont">
                        <div className="container">
                              <div className="aboutContent">
                                    <div className="aboutTxt">
                                          {/* <h2 dangerouslySetInnerHTML={{ __html: aboutData.intro.heading }}></h2> */}
                                          <h2>{heading}</h2>
                                          {paragraphs.map((para) => (
                                                <p key={para.id}>{para.text}</p>
                                          ))}

                                          <ul className="trustList">
                                                {trustList.map((item) => (
                                                <li key={item.id}>
                                                      <i className="fa fa-check-circle"></i> {item.text}
                                                </li>
                                                ))}
                                          </ul>

                                          <a href={`tel:${call.number}`} className="button1">
                                                {call.text} {call.number}
                                          </a>
                                    </div>

                                    <div className="aboutImage">
                                          <img src={aboutImage} alt="Technician at work" />
                                          <div className="floatingBadge">
                                                <span className="number">{floatingBadge.number}</span>
                                                <span className="text">{floatingBadge.text}</span>
                                          </div>
                                    </div>
                              </div>
                        </div> 
                  </section>
                  <section className="statsSec">
                        <div className="container">
                              <div className="hTxt">
                              <h2>Our Impact in Numbers</h2>
                              </div>
                              <div className="statsGrid">
                                    {statsSec.map((stat) => (
                                    <div className="statBlock" key={stat.id}>
                                          <div className="icon">{stat.icon}</div>
                                          <h3>{stat.number}</h3>
                                          <p>{stat.text}</p>
                                    </div>
                                    ))}
                              </div>
                        </div>
                  </section>
                  <FaqPage/>
            </>
      )
};

export default About;