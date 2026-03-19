import ACRepairImg from "../../assets/images/img5.jpg";
import WashingMachineImg from "../../assets/images/img4.jpg";

const serviceData = {
      servicesAC: [
            {
                  title: "Best AC Repair and Service in SR",
                  description: "SR Appliacne Care - Your trusted AC repair and service provider",
                  image: ACRepairImg,
                  altTxt: "AC Image",
                  link: "Call Now for Instant Service!"
            },
      ],
      
      servicesWashingMachine: [
            {
                  title: "Best Washing Machine Repair and Service in SR",
                  description: "SR Appliance Care - Your trusted washing machine repair and service provider",
                  image: WashingMachineImg,
                  link: "Call Now for Instant Service!"
            },
      ],

      serviceAbout: [
            {
            title: "About SR Appliance Care",
                        descriptionAC: [
                              {
                              before:
                              "SR Appliacne Care is a leading AC repair and service provider in SR. We offer a wide range of services to our customers including ",
                              highlight: [
                              "AC installation, AC repair, AC Servicing, and AC shifting, Gas charging, compressor replacement "
                              ],
                              after: "and much more.",
                              },

                              {
                              before: "We have a team of ",
                              highlight: [
                              "experienced and certified technicians",
                              "100% satisfaction guarantee",
                              " Sukanta Byabortta",
                              ],
                              middle: [
                                    " who are always available to provide you ",
                                    "with the best possible service. We also offer a ",
                              ],
                              
                              after: " on all of our services.",
                              },
                        ],

                        descriptionWM: [
                              {
                              before:
                              "SR Appliance Care is a leading washing machine repair and service provider in SR. We offer services including ",
                              highlight: [
                              "washing machine installation, repair, servicing, drum replacement, motor repair, "
                              ],
                              after: "and much more.",
                              },

                              {
                              before: "We have a team of ",
                              highlight: [
                              "experienced and certified technicians",
                              "100% satisfaction guarantee",
                              ],
                              middle: [
                                    " who provide the best possible service with ",
                              ],
                              
                              // after: " on all of our services.",
                              },
                        ],
                  },
            ],

      popularServicesAC: [
      {
            hTxt: "Our Most Popular Services",
            serviceList: [
                  {
                  id: "1",
                  title: "AC Deep Cleaning with Foam",
                  description: "Professional AC Deep Cleaning with Foam. AC Cleaning Foam is used for cleaning of the interior of air conditioner. It evaporates completely & keeps the air conditioner working more smoothly.",
                  },
                  {
                  id: "2",
                  title: "AC Deep Cleaning with Foam and Jet Pump",
                  description: "We clean air filters, cooling coil with blower using water with high pressure jet spray. We also clean outdoor unit and remove dust and choking of condenser coil.",
                  },
                  {
                  id: "3",
                  title: "AC Repair",
                  description: "We offer all types of repairing solutions like water dropping, less cooling, no cooling or AC not starting. Our expert technicians diagnose and fix all AC problems.",
                  },
                  {
                  id: "4",
                  title: "AC Installation & Shifting",
                  description: "We provide all brands AC Installation Service in SR at reasonable price with warranty. Professional installation and shifting services available.",
                  },
                  {
                  id: "5",
                  title: "AMC Servicing",
                  description: "Annual Maintenance Contract (AMC) for Air conditioners for offices and corporates. Regular maintenance to ensure optimal performance.",
                  },
            ]
      }
      ],
      
      popularServicesWP: [
      {
            hTxt: "Our Washing Machine Services",
            serviceList: [
                  {
                  id: "1",
                  title: "Washing Machine Repair",
                  description: "We fix all issues like not starting, water not draining, excessive vibration, door problems, and spin cycle issues for all brands.",
                  },
                  {
                  id: "2",
                  title: "Motor Replacement",
                  description: "Complete motor replacement and repair services for both front load and top load washing machines with genuine parts.",
                  },
                  {
                  id: "3",
                  title: "Drum Cleaning & Repair",
                  description: "Professional drum cleaning, bearing replacement, and drum repair services to ensure smooth operation.",
                  },
                  {
                  id: "4",
                  title: "Installation & Shifting",
                  description: "Expert installation and shifting services for all washing machine brands with proper setup and testing.",
                  },
            ]
      }
      ],

      guaranteeData : [
            {
            title: "100% Satisfaction Guarantee",
            description: "We stand behind our work with a complete satisfaction guarantee on all services"
            }
      ],

      bookService : [
            {
            title: "Ready to Book Your AC Service?",
            description: "Get instant service from certified technicians",
            btnTxt: "Book Service Now"
            }
      ]
  
}

export default serviceData;