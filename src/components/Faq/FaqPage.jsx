import { useState } from "react";
import AccordionItem from "./AccordionItem";
import FaqData from "./FaqData";

function SecTitle({ title }) {
  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <h2>
      <span>{firstWord}</span> {restWords}
    </h2>
  );
}
 

const FaqPage = () => {
  // const [openIndex, setOpenIndex] = useState(0); // initially none open
  const [openIndex, setOpenIndex] = useState(0); // first open
  const { hTxt, faqList } = FaqData; // destructure your imported data

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  // const toggleAccordion = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  const [formData, setFormData] = useState({
    name: "",
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

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // You can send data to API here

    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="home_faq_panel">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="hTxt">
          <SecTitle title="Frequently Asked Questions" />
          <p>{hTxt.subtitle}</p>
        </div>

        <div className="faqBox">
          <div className="custom_accodion">
            {faqList.map((item, index) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                open={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          <div className="enquiryBox">
            <div className="inquiryForm">
                  <h4>Send Your Message to Us</h4>
                  <p>
                  Please feel free to get in touch using the form below. We'd love
                  to hear from you.
                  </p>

                  {submitted && <p style={{ color: "green" }}>Message sent successfully!</p>}

                  <form onSubmit={handleSubmit}>
                  <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  />

                  <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  />

                  <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  ></textarea>
                  <input type="submit" value="Send Message" />
                  </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;