import React from "react";
import PurposePage from "../components/whoweare/PurposePage";
import Card from "../components/componentItems/Card";
import ContactCard from "../components/contactUs/ContactCard";
import AddressInfo from "../components/contactUs/AddressInfo";
import bg2 from "../assets/pics/bg2.png";
import labimg from "../assets/pics/building.jpg";
import RegionalOffice from "../components/contactUs/RegionalOffice";

const cardsData = [
  {
    title: "Group/Division Offices",
    description:
      "Division wise address and other contact details of our global office locations.",
    link: "#",
  },
  {
    title: "Inquiries",
    description:
      "For all inquiries not covered by the areas below, please use our General Enquiry Form.",
    link: "#",
  },
  {
    title: "General Enquiry Form",
    description:
      "Enquiry and feedback form of various departments of Apitoria Pharma Pvt. Ltd.",
    link: "#",
  },
];

const cardData = [
  {
    title: "Registered Office",
    description: (
      <>
        <p>
          Aurobindo Pharma Limited,Plot No. 2, Maitrivihar, Ameerpet, Hyderabad –
          500038 Telangana, India.
        </p>
        <br />
        <p>
          Phone: +91 (40) 6672 1200Fax: +91 (40) 2374 1080/+91 (40) 2374
          6833,E-mail: info@aurobindo.com
        </p>
      </>
    ),
    link: "#",
  },
  {
    title: "Corporate Office",
    description: (
      <>
        <p>
          Galaxy, Floors 22-24, Plot No. 1, Survey No. 83/1, Hyderabad Knowledge
          City, Raidurg Panmaktha, Ranga Reddy District, Hyderabad – 500032
          Telangana, India.
        </p>
        <br />
        <p>
          Phone: +91 40 6672 5000/6672 1200 Fax: +91 (40) 2374 1080/+91 (40)
          2374 6833, E-mail: info@aurobindo.com
        </p>
      </>
    ),
    link: "#",
  },
];
const cardData2 = [
  {
    title: "Registered Office",
    description: (
      <>
        <p>
          Aurobindo Pharma Limited, Plot No. 2, Maitrivihar, Ameerpet, Hyderabad
          – 500038 Telangana, India.
        </p>
        <br />
        <p>
          Phone: +91 (40) 6672 1200 Fax: +91 (40) 2374 1080/ +91 (40) 2374 6833,
          E-mail: info@aurobindo.com
        </p>
      </>
    ),
    link: "#",
  },
  {
    title: "Corporate Office",
    description: (
      <>
        <p>
          Aurobindo Pharma Limited, Plot No. 2, Maitrivihar, Ameerpet, Hyderabad
          – 500038 Telangana, India.
        </p>
        <br />
        <p>
          Phone: +91 (40) 6672 1200 Fax: +91 (40) 2374 1080/ +91 (40) 2374 6833,
          E-mail: info@aurobindo.com
        </p>
      </>
    ),
    link: "#",
  },
  {
    title: "Corporate Office",
    description: (
      <>
        <p>
          Aurobindo Pharma Limited, Plot No. 2, Maitrivihar, Ameerpet, Hyderabad
          – 500038 Telangana, India.
        </p>
        <br />
        <p>
          Phone: +91 (40) 6672 1200 Fax: +91 (40) 2374 1080/ +91 (40) 2374 6833,
          E-mail: info@aurobindo.com
        </p>
      </>
    ),
    link: "#",
  },
  {
    title: "Corporate Office",
    description: (
      <>
        <p>
          Aurobindo Pharma Limited, Plot No. 2, Maitrivihar, Ameerpet, Hyderabad
          – 500038 Telangana, India.
        </p>
        <br />
        <p>
          Phone: +91 (40) 6672 1200 Fax: +91 (40) 2374 1080/ +91 (40) 2374 6833,
          E-mail: info@aurobindo.com
        </p>
      </>
    ),
    link: "#",
  },
];

const breadcrumbs = [
  { text: "Home", link: "/" },
  { text: "Contact Us", link: "/contact-us" },
];
const ContactUs = () => {
  return (
    <div className=" xl:mt-24 lg:mt-24 md:mt-32 sm:mt-24 mt-8">
      <ContactCard
        backgroundImage={bg2}
        overlayImage={labimg}
        title="Contact Us"
        description="At Apitoria, we value your feedback as we are committed to continuously improving our products and services, and providing greater value to our patients, customers and other stakeholders."
        cards={cardsData}
        breadcrumbs ={breadcrumbs}
      />
      {/* <BusinessCare /> */}
      <div className="px-8 sm:px-6 lg:px-32">
        <div className="px-6">
          <AddressInfo cards={cardData} />
          <div className=""> 
            <RegionalOffice cards={cardData2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
