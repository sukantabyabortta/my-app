import { useState } from "react";
import {Link} from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import ContactData from "./contactData";
const Contact = () => {
      const { contactInfo, contactForm, map } = ContactData;
      const [formData, setFormData] = useState({
            name: "",
            phone: "",
            email: "",
            message: "",
      });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

// Handle form submit and reset
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');

    setSubmitted(true); // Submitted successfully message

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

      return (
            <>
                  <Breadcrumbs 
                        pageTitle="Contact Us" 
                        items={[
                        { label: "Home", link: "/" }
                        ]}
                  />

                  <section className="contactPageCont">
                        <div className="aboutPageCont">
                              <div className="container">
                              <div className="aboutContent">
                                    {contactInfo.map (({id, nameTag, title, des, phone, email, address, ServiceNo}) => (
                                    <div key={id} className="aboutTxt">
                                          <span>{nameTag}</span>
                                          <h2>{title}</h2>
                                          <p>{des}</p>
                                          <ul className="trustList">
                                                <li><i className="fa fa-phone" aria-hidden="true"></i>
                                                      <Link to={`tel:${phone}`}>{phone}</Link>
                                                </li>
                                                <li><i className="fa fa-envelope-o" aria-hidden="true"></i>
                                                      <Link to={`mailto:${email}`}>{email}</Link>
                                                </li>
                                                <li><i className="fa fa-map-marker" aria-hidden="true"></i>{address}</li>
                                          </ul>
                                          <Link to={`tel:${ServiceNo}`} className="button1">BOOK SERVICE NOW: {ServiceNo}</Link>
                                    </div>
                                    ))}

                                    <div className="contactSec">
                                          <div className="contactBox">
                                          <h2>{contactForm.title}</h2>
                                          {submitted && <p style={{ color: "green", marginBottom: "10px" }}>Message sent successfully!</p>}

                                          <form id="contactForm" onSubmit={handleSubmit}>

                                                      {contactForm.fields.map((field) => {

                                                      if (field.type === "textarea") {
                                                            return (
                                                                  <textarea
                                                                        key={field.name}
                                                                        name={field.name}
                                                                        value={formData[field.name]}
                                                                        onChange={handleChange}
                                                                        placeholder={field.placeholder}
                                                                        className={field.className}
                                                                        rows="5"
                                                                        required
                                                                  />
                                                            );
                                                      }

                                                      return (
                                                                  <input
                                                                        key={field.name}
                                                                        type={field.type}
                                                                        name={field.name}
                                                                        value={formData[field.name]}
                                                                        onChange={handleChange}
                                                                        placeholder={field.placeholder}
                                                                        className={field.className}
                                                                        required
                                                                  />
                                                            );

                                                      })}

                                                      <button type="submit" className="btn-submit">
                                                      {contactForm.buttonText}
                                                      </button>
                                                </form>
                                          
                                          </div> 
                                    </div>
                              </div>
                              </div>
                        </div>
                  </section>

                  <section className="customMap">
                        <div className="container">
                              <div>
                              <iframe src={map.src} width="600" height="450" style={{border: "0"}} loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                              </div>
                        </div>
                  </section>
            </>
      );
}

export default Contact;