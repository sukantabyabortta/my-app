import aboutImg from "../../assets/images/img2.png";

const aboutData = {
  intro: {
    // heading: "<span>About Us</span> SR Trusts <br /> <em>SR Appliance Care</em>",
    heading: (
      <>
        SR Trusts <br />
        <em>SR Appliance Care</em>
      </>
    ),
    paragraphs: [
      {
        id: 1,
        text: "SR Appliance Care has been **SR’s** trusted home appliance repair service for over **10 years**. We specialize in AC, refrigerator, washing machine, microwave, and geyser repairs.",
      },
      {
        id: 2,
        text: "SR Appliance Care has been **SR’s**.",
      },
    ],
  },

  trustList: [
    {
      id: 1,
      text: "Same-day service for most repairs",
    },
    {
      id: 2,
      text: "Use of genuine spare parts",
    },
    {
      id: 1,
      text: "SR Appliance Care has been **SR’s** trusted home appliance repair service for over **10 years**. We specialize in AC, refrigerator, washing machine, microwave, and geyser repairs.",
    },
    {
      id: 3,
      text: "Skilled and background-verified technicians",
    },
  ],

  call: {
    text: "Call Now :",
    number: "9696969696",
  },

  aboutImage: aboutImg,
  floatingBadge: {
    number: "10+",
    text: (
      <>
        Years of
        <br />
        Expertise
      </>
    ),
  },

  statsSec: [
    {
      id: 1,
      icon: "👥",
      number: "35,000+",
      text: "Happy Clients",
    },
    {
      id: 2,
      icon: "🛠️",
      number: "50+",
      text: "Expert Team",
    },
    {
      id: 3,
      icon: "📅",
      number: "10+",
      text: "Years Experience",
    },
    {
      id: 4,
      icon: "📍",
      number: "90+",
      text: "Pin Codes Covered",
    },
  ],
};

export default aboutData;
