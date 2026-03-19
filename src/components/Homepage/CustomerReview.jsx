import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import customerImg1 from "../../assets/images/img1.png";
import customerImg2 from "../../assets/images/img12.png";


const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
};

const slideCont = [
  {
    img: customerImg2,
    name: "Asha Kumawat",
    review:
      "Excellent service! Very punctual and professional. Fixed my refrigerator quickly with genuine parts."
  },
  {
    img: customerImg1,
    name: "Rajesh Sharma",
    review:
      "Great experience with AC repair. Technician was knowledgeable and completed work on time."
  },
  {
    img: customerImg1, // replace img11.png with proper import
    name: "Priya Gupta",
    review:
      "Affordable pricing and quality service. My washing machine works perfectly now. Highly recommended!"
  },
  {
    img: customerImg1,
    name: "Amit Singh",
    review:
      "Quick response and efficient repair. The team is very professional and trustworthy."
  },
  {
    img: customerImg2,
    name: "Sunita Jain",
    review:
      "Best appliance repair service in SR. Fixed my microwave at reasonable cost with warranty."
  },
  {
    img: customerImg1,
    name: "Vikash Kumar",
    review:
      "Satisfied with RO service. Technician explained the problem clearly and provided good solution."
  }
];



const CustomerReview = () => {
      return (
            <>
                  <section className="customReview">
                        <div className="container">
                              <div className="hTxt">
                              <h2><span>Customer</span> Review</h2>
                              </div>
                              <Slider {...settings}>
                                    {slideCont.map((item, index) => (
                                          <div className="reviewSlider">
                                                <div className="item" key={index}>
                                                      <div className="reviewBox">
                                                            <img src={item.img} alt="Customer review" />
                                                            <strong>{item.name}</strong>
                                                            <p>{item.review}</p>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </Slider>
                        </div>
                  </section>
            </>
      );
};

export default CustomerReview;














