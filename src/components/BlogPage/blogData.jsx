import MicrowaveImg from "../../assets/images/img3.jpg";
import WashingMachineImg from "../../assets/images/img4.jpg";
import acImg from "../../assets/images/img5.jpg";

const blogData = {
      blogList: [
            {
                  id: 1,
                  slug: "microwave-repair-service",
                  category: "Appliance Repair",
                  title: "Microwave repair service near me",
                  image: MicrowaveImg,
                  altTxt: "Microwave",
                  price: "Starting from ₹299",
                  description: "When your microwave stops working properly, it can disrupt your daily routine and meal preparation. At SR Appliance Care, we provide expert microwave repair services in Mansarovar and surrounding areas of SR. Our skilled technicians are equipped with the latest tools and genuine spare parts to diagnose and fix all types of microwave issues including heating problems, turntablelfunctions, door latch issues, and control panel repairs. We offer same-day service with transparent pricing and guarantee customer satisfaction for all our repair work.",
            },
            {
                  id: 2,
                  slug: "washing-machine-repair-service",
                  category: "Appliance Repair",
                  title: "Best Washing Machine Repair Service",
                  image: WashingMachineImg,
                  altTxt: "Washing Machine",
                  price: "Starting from ₹299",
                  description: "We provide Best Washing Machine Repair Service",
            },
            {
                  id: 3,
                  slug: "ac-repair-service",
                  category: "Appliance Repair",
                  title: "Best AC Repair Service",
                  image: acImg,
                  altTxt: "AC Image",
                  price: "Starting from ₹399",
                  description: "Book Online AC Repair Services at Home",
            },
      ],

      social: [
            {     id: "1",
                  link: "https://www.facebook.com/",
                  icon: "fa fa-facebook-f",
            },
            {     id: "2",
                  link: "https://www.linkedin.com/in/sukanta-byabortta/",
                  icon: "fa fa-linkedin",
            },
            {     id: "3",
                  link: "https://www.instagram.com/",
                  icon: "fa fa-instagram",
            },
      ]
};

export default blogData;