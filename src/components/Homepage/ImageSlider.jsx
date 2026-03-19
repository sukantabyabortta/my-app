import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
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

// Images
import slide1 from "../../assets/images/bannerImage.png";
import slide2 from "../../assets/images/bannerImage2.png";
import slide3 from "../../assets/images/bannerImage3.png";

const bannerSlide = [
  {
    img: slide1,
  },
  {
    img: slide2,
  },
  {
    img: slide3,
  },
];

function BannerTopTxt({ title }) {  
  const words = title.split(" ");
  const firstWord = words[0];
  const secondtWord = words[1];
  const thirdtWord = words[2];
  const restWords = words.slice(3).join(" ");

  return (
    <strong>
      <span>{ firstWord }</span> <small>{ secondtWord }</small> <em>{ thirdtWord }</em> { restWords }
    </strong>
  );
}

const bannerText = {
  mainTxt: "Your Trusted Partner for Home Appliance Repair in SR",
  desc: "Expert repair services for all major home appliances. Fast, reliable, and affordable solutions with genuine parts and skilled technicians at your doorstep.",
}

function ImageSlider() {
 
  return (
    <>
      <section className="heroBanner">
        <div className="heroBannerSlider">
            <Slider {...settings}>
                  {bannerSlide.map((item, index) => (
                    <div key={index}>
                      <div className="item">
                            <img src={item.img} alt="Banner" />
                      </div>
                    </div>
                  ))}
            </Slider>
        </div>

        <div className="bannerTextOuter">
            <div className="container">
                <div className="bannerText">
                    <BannerTopTxt title="We Provide Value Added Services" />
                    <h1>{bannerText.mainTxt}</h1>
                    <p>
                        {bannerText.desc}
                    </p>
                    <Link to="/contact" className="button1">Contact us</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default ImageSlider;