import React from "react";
import bg2 from "../assets/images/molicules.png";
import OurBusinessHeader from "../components/pageComponents/OurBusiness/OurBusinessHeader";
const breadcrumbs = [
  { text: "Home", link: "/" },
  { text: "Life At Apitoria", link: "/life-at-apitoria" },
];
const OurBusiness = () => {
  return (
    <div className=" xl:mt-24 lg:mt-24 md:mt-32 sm:mt-24 mt-8">
      <OurBusinessHeader backgroundImage={bg2} breadcrumbs={breadcrumbs} />
    </div>
  );
};

export default OurBusiness;
