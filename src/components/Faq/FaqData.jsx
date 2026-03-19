
const faqData = {
      hTxt: {
            title: "Frequently Asked Questions",
            subtitle: "Do You Have Questions About Appliance Repairs?",
      },
      faqList: [
            {
            id: 1, 
            question: "What types of appliances do you repair?",
            answer:
                  "We repair all major home appliances including refrigerators, washing machines, air conditioners, microwave ovens, RO water purifiers, geysers, and other kitchen appliances. Our technicians are trained to work on all popular brands and models."
            },
            {
            id: 2, 
            question: "Do you provide same-day repair service?",
            answer:
                  "Yes, we offer same-day repair service for most appliances depending on the availability of parts and the complexity of the issue. We strive to resolve your appliance problems as quickly as possible to minimize inconvenience."
            },
            {
            id: 3, 
            question: "What is your service area in SR?",
            answer:
                  "We provide appliance repair services across all areas of SR including Malviya Nagar, Vaishali Nagar, Mansarovar, Jagatpura, Tonk Road, and surrounding areas. Contact us to confirm service availability in your specific location."
            },
            {
            id: 4, 
            question: "Do you use genuine spare parts for repairs?",
            answer:
                  "Yes, we use only genuine and high-quality spare parts for all repairs. This ensures the longevity of your appliances and maintains their warranty. We source parts directly from authorized dealers and manufacturers."
            },
            {
            id: 5, 
            question: "What are your service charges?",
            answer:
                  "Our service charges are transparent and competitive. We provide free diagnosis and quote before starting any repair work. The final cost depends on the type of repair and parts required. No hidden charges guaranteed."
            },
            {
            id: 6, 
            question: "Do you provide warranty on repairs?",
            answer:
                  "Yes, we provide warranty on all our repair services and spare parts used. The warranty period varies depending on the type of repair and parts. We stand behind our work and ensure customer satisfaction."
            },
            {
            id: 7, 
            question: "How can I schedule a repair service?",
            answer:
                  "You can schedule a repair service by calling us at +91 7980011385 or filling out our online contact form. Our customer service team will arrange a convenient time for our technician to visit your location."
            },
            {
            id: 8, 
            question: "What payment methods do you accept?",
            answer:
                  "We accept various payment methods including cash, UPI, credit/debit cards, and online bank transfers. Payment is due after the successful completion of the repair service and your satisfaction with the work performed."
            }
      ],

      faqFormData: {
            title: "Send Your Message to Us",
            description:
                  "Please feel free to get in touch using the form below. We'd love to hear from you.",
            fields: [
                  {
                  type: "text",
                  name: "name",
                  placeholder: "Enter your name",
                  },
                  {
                  type: "email",
                  name: "email",
                  placeholder: "Enter your email",
                  },
                  {
                  type: "textarea",
                  name: "message",
                  placeholder: "Enter your message",
                  },
            ],
            buttonText: "Send Message",
      },
};

export default faqData;