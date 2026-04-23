import {Link} from "react-router-dom";
import serviceImg1 from "../../assets/images/refrigerator.png";
import serviceImg2 from "../../assets/images/washingMachine.png";
import serviceImg3 from "../../assets/images/acImg.png";
import serviceImg4 from "../../assets/images/roImg.png";
import serviceImg5 from "../../assets/images/mwImg.png";
import aboutImg from "../../assets/images/aboutImg.png";
import ServiceEnquiryIcon from "../../assets/images/icon2.png";
import phoneIcon from "../../assets/images/icon3.png";

//Custom title color first word
function SecTitle({ title }) {  
  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <h2>
      <span>{ firstWord }</span> { restWords }
    </h2>
  );
}
// Custom para 
const SecPara =({ para }) => {
  return (
      <p>{ para }</p>
  );
};


// Service content
const HomeServiceData = {
      
   homeServiceContent: [
            {
            img: serviceImg1,
            alt: "Refrigerator repair service",
            title: "Refrigerator",
            subtitle: "Service and Repairs",
            desc: "Complete refrigerator repair including cooling issues, compressor problems, and electrical faults with genuine spare parts.",
            url: "/services/refrigerator"
            },
            {
            img: serviceImg2,
            alt: "Washing machine repair service",
            title: "Washing Machine",
            subtitle: "Service and Repairs",
            desc: "Expert washing machine repair for all brands including drum cleaning, motor repair, and water drainage issues.",
            url: "/services/washing-machine"
            },
            {
            img: serviceImg3,
            alt: "Air conditioner repair service",
            title: "Air Conditioner",
            subtitle: "Service and Repairs",
            desc: "Professional AC repair and maintenance including gas refilling, compressor repair, and cooling optimization.",
            url: "/services/air-conditioner"
            },
            {
            img: serviceImg4,
            alt: "RO water purifier service",
            title: "RO Purifier",
            subtitle: "Service and Repairs",
            desc: "Complete RO water purifier service including filter replacement, membrane cleaning, and water quality testing.",
            url: "/services/ro-purifier"
            },
            {
            img: serviceImg5,
            alt: "Microwave oven repair service",
            title: "Microwave Oven",
            subtitle: "Service and Repairs",
            desc: "Microwave repair services including heating issues, turntable problems, and electronic control panel repairs.",
            url: "/services/microwave-oven"
            }
   ],

   whoWeAreCont: {
      title: "Why Choose SR Appliance Care For Home Appliance Repair Services?",
      para: "Choosing SR Appliance Care for home appliance repair services in SR ensures quality, reliability, and customer satisfaction. We provide comprehensive solutions with experienced professionals.",
      // aboutImg: "../../assets/images/aboutImg.png",
      serviceList: [
          "Experienced Technicians",
          "Comprehensive Services",
          "Transparent Pricing",
          "Customer Satisfaction"
      ],
   },   
  
  workProcess: {
      title: "Our Work process",
      para: "Get Our Service In 4 Steps",

      progressList: [
            {
                  listImg: serviceImg1,
                  title: "Contact Us",
                  desc: "Reach out to our team to schedule your service and discuss your needs and concerns promptly."
            },
            {
                  listImg: serviceImg2,
                  title: "Breakdown Analysis",
                  desc: "Our experts conduct a thorough assessment to diagnose the issue accurately and formulate an effective solution."
            },
            {
                  listImg: serviceImg3,
                  title: "Performing Repairs",
                  desc: "Skilled technicians implement the necessary repairs with precision and efficiency, addressing the root cause comprehensively."
            },
            {
                  listImg: serviceImg4,
                  title: "Fix the Problem",
                  desc: "Once repairs are completed, your system is thoroughly tested to ensure optimal functionality and performance restoration."
            },
      ]
   },

   lookingForService: {
      image1: ServiceEnquiryIcon,
      title: "Looking for Appliance Repair Services in SR?", 
      des: "Call SR Appliance Care & Get You Booking Done At.",

      image2: phoneIcon,
      phNo: 9696969696", 
      time: "Monday - Saturday : 9.30 am - 6.00 pm"
   },
   
};
 


const HomeService = () => {
      return (
            <>
            <section className="ourService">
                  <div className="container">
                        <div className="hTxt">
                        <SecTitle title="Our Services" />
                        <p>
                              {HomeServiceData.para}
                        </p>
                        </div>

                        <div className="ourServiceList">
                        <ul>
                              {HomeServiceData.homeServiceContent.map((item, index) => (
                                    <li key={index}>
                                          <img src={item.img} alt={item.alt} />
                                          <strong>{item.title}</strong>
                                          <small>{item.subtitle}</small>
                                          <p>{item.desc}</p>
                                          <Link to={item.url} className="readMore">Read more +</Link>
                                    </li>
                              ))}
                        </ul>
                        </div>
                  </div>
            </section>

            <section className="WhyChooseUs">
            <div className="container">
                  <div className="hTxt">
                        <SecTitle title="Why Choose Us" />
                  </div>
                  <p>
                      <SecPara para="With over 10 years of experience in appliance repair, we offer reliable, affordable, and professional services. Our certified technicians use genuine parts, provide same-day service, and guarantee customer satisfaction. We are your trusted local repair
                  experts in SR." />  
                  </p>
                  <Link to="/about" className="button1">More About</Link>

                  <div className="hTxt" style={{padding: "0"}}>
                        <SecTitle title="Our Process" />
                  </div> 

                  <div className="whoWeAreCont">
                        <div>
                              <img src={aboutImg} alt="Our repair process" />
                        </div>
                        <div>
                              <h3>{HomeServiceData.whoWeAreCont.title}</h3>
                              <p>
                                    {HomeServiceData.whoWeAreCont.para}
                              </p>
                              <ul>
                                    {HomeServiceData.whoWeAreCont.serviceList.map((item, index) => (
                                          <li key={index}>{item}</li>
                                    ))}
                              </ul>
                        </div>
                  </div>
            </div>
            </section>

            <section className="ourWorkProcess">
                  <div className="container">
                        <div className="hTxt">
                        <SecTitle title='Our Work process' />
                        <SecPara para='Get Our Service In 4 Steps' />
                        </div>
                        <div className="ourServiceList">
                        <ul>
                              {HomeServiceData.workProcess.progressList.map((item, index) => (
                                    <li key={index}>
                                          <img src={item.listImg} alt={item.title} />
                                          <em>{index+1}</em>
                                          <strong>{item.title}</strong>
                                          <p>{item.desc}</p>
                                    </li>
                              ))}
                              
                        </ul>
                        </div>
                  </div>
            </section>

            <section className="lookingForService">
                  <div className="container">
                        <div>
                              <img src={HomeServiceData.lookingForService.image1} alt="Service inquiry icon" />
                              <div>
                                    <h3>{HomeServiceData.lookingForService.title}</h3>
                                    <span>{HomeServiceData.lookingForService.des}</span>
                              </div>
                        </div>
                        <div>
                              <img src={HomeServiceData.lookingForService.image2} alt="Phone contact icon" />
                              <div>
                                    <h4>{HomeServiceData.lookingForService.phNo}</h4>
                                    <span>{HomeServiceData.lookingForService.time}</span>
                              </div>
                        </div>
                  </div>
            </section>
            </>
      );
};

export default HomeService;
