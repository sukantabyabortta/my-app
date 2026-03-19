import ImageSlider from "./ImageSlider";
import image1 from "../../assets/images/aboutImg.png";
import image2 from "../../assets/images/icon1.png";
import HomeService from "./homeServiceData";
import CustomerReview from "./CustomerReview";
import FaqPage from "../Faq/FaqPage";


const Home = () => {

  return (
    <>
      <ImageSlider />
      <section className="customPanel1">
        <div className="cbox1">
            <div>
                <strong>10+<small>year of experience</small></strong>
                <span>
                Many years of experience in the repair of home equipment of various complexity.
            </span>
            </div>
        </div>
        <div className="cbox3">
            <img src={image1} alt="Professional repair team" />
        </div>
        <div className="cbox2">
            <img src={image2} alt="Customer satisfaction rating" />
            <span>Customers Trust and Love us. We're rated 5/5 out of 300 customer reviews.</span>
        </div>
    </section>
    <HomeService {...HomeService} />
    <CustomerReview />
    <FaqPage/>
    </>
  )
}

export default Home;
