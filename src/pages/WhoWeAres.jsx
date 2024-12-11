import React from "react";
import PurposePage from "../components/whoweare/PurposePage";
import BusinessCare from "../components/whoweare/BusinessCare";
import Card from "../components/common/Card";
const WhoWeAres = () => {
  const accordionData1 = [
    {
      title: "What is Flowbite?",
      content: (
        <>
          <p className="mb-2 text-black">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
    {
      title: "Is there a Figma file available?",
      content: (
        <>
          <p className="mb-2 text-black ">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
    {
      title: "What are the differences ",
      content: (
        <>
          <p className="mb-2 text-black ">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
  ];
  const accordionData2 = [
    {
      title: "What is Flowbite?",
      content: (
        <>
          <p className="mb-2 text-black">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
    {
      title: "Is there a Figma file available?",
      content: (
        <>
          <p className="mb-2 text-black ">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
    {
      title: "What are the differences ",
      content: (
        <>
          <p className="mb-2 text-black ">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
  ];
  const accordionData3 = [
    {
      title: "What is Flowbite?",
      content: (
        <>
          <p className="mb-2 text-black">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
    {
      title: "Is there a Figma file available?",
      content: (
        <>
          <p className="mb-2 text-black ">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
    {
      title: "What are the differences ",
      content: (
        <>
          <p className="mb-2 text-black ">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
  ];
  return (
    <div className=" xl:mt-24 lg:mt-24 md:mt-32 sm:mt-24 mt-8">
      <PurposePage />
      {/* <BusinessCare /> */}
      <div className=" gap-3">
        <Card
          accordionData={accordionData1}
          labimg={
            "https://images.pexels.com/photos/4617316/pexels-photo-4617316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Card
          accordionData={accordionData2}
          labimg={
            "https://images.pexels.com/photos/4617316/pexels-photo-4617316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Card
          accordionData={accordionData3}
          labimg={
            "https://images.pexels.com/photos/4617316/pexels-photo-4617316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </div>
    </div>
  );
};

export default WhoWeAres;
