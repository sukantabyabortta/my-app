const navData = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Service",
    path: "/ac-repair",
    dropdown: [
      { label: "AC Repair", path: "/ac-repair" },
      { label: "Washing Machine", path: "/washing-machine" },
      { label: "Kitchen Chimney", path: "/kitchen-chimney" },
      { label: "Geyser", path: "/geyser" },
      { label: "Water Purifier", path: "/water-purifier" },
      { label: "Refrigerator", path: "/refrigerator" },
      { label: "Microwave", path: "/microwave" },
    ],
  },
  {
    label: "Blog",
    path: "/blog",
  },
  // {
  //   label: "User",
  //   path: "/users",
  // },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

export default navData;