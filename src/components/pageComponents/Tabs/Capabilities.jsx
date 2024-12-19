import React from "react";
import overlayImage from "../../../assets/lifeatapitoria/groupPic.jpg";
import svg from "../../../assets/icons/ssvvgg.svg";
import star from "../../../assets/icons/star.svg";
import icon from "../../../assets/images/Complexmolecules.png";
import map from "../../../assets/images/global_map.png";

const Capabilities = () => {
  return (
    <div className="px-0 md:px-4 lg:px-32">
      <div className="text-center py-6 pt-12 font-sans">
        <h6 className="text-[#3c286b] text-2xl md:text-3xl lg:text-4xl font-semibold">
          R&D Capabilities
        </h6>
        <p className="text-[#000000] text-center text-[14px] lg:max-w-3xl md:max-w-5xl max-w-full mx-auto mt-4">
          Investing deeply in our R&D capabilities, we’ve formed a solid
          foundation for the business, and the future. Our dedicated facilities
          are home to state-of-the-art equipment and infrastructure. Our
          innovative processes and technologies, and cost-effective development,
          have helped us emerge as a trusted partner of choice for global
          players.
        </p>
      </div>
      <section>
        <div className="h-auto rounded-3xl mx-auto max-w-screen-xl relative">
          {/* Overlay Image */}
          <img
            src={overlayImage || "placeholder.jpg"}
            alt="Overlay"
            className="w-full h-[400px] md:h[500px] lg:h-[600px] xl:h-[600px] object-cover rounded-3xl "
          />
          <img
            src={star}
            alt="star"
            className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 h-[50px] w-auto hidden sm:block"
          />
          {/* Features Section */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center px-6 w-full">
            <section className=" bg-gradient-to-r from-[rgba(60,40,107,0.8)] via-[rgba(194,31,40,0.8)] to-[rgba(194,31,40,0.8)] text-white py-8 px-6 sm:px-10 lg:px-16 rounded-t-2xl shadow-lg max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center lg:py-3 md:py-3 gap-4">
                {/* First Column */}
                <div className="flex flex-col items-center">
                  <p className="font-normal text-white text-sm sm:text-lg md:text-lg text-center">
                    Installed with{" "}
                    <span className="font-bold">special technologies</span>{" "}
                    capable of complex reactions
                  </p>
                </div>

                {/* Vertical Divider */}
                {/* <div className="hidden sm:block border-l-2 border-white h-20"></div> */}
                <img
                  src={svg}
                  alt="Divider"
                  className="h-[153px] sm:h-[120px] w-auto mx-4 hidden sm:block"
                />

                {/* Second Column */}
                <div className="flex flex-col items-center">
                  <p className="font-normal text-white text-sm sm:text-lg md:text-lg text-center">
                    <span className="font-bold">Highly experienced </span>
                    workforce equipped with regular trainings
                  </p>
                </div>

                {/* Vertical Divider */}
                <img
                  src={svg}
                  alt="Divider"
                  className="h-[120px] w-auto mx-4 hidden sm:block"
                />

                {/* Third Column */}
                <div className="flex flex-col items-center">
                  <p className="font-normal text-white text-sm sm:text-lg md:text-lg text-center">
                    Dedicated teams focussed on{" "}
                    <span className="font-bold">continuous improvements</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="relative px-6 ">
          <section className="bg-[#efeeec] text-black py-4 px-4 md:px-16 lg:px-16 xl:px-16 lg:py-8 md:py-8 xl:py-8 rounded-b-2xl shadow-lg max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center lg:py-3 md:py-3">
              <div className="col-span-3 overflow-x-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-start lg:py-3 md:py-3 gap-11 h-full">
                  {/* First Column */}
                  <div className="flex flex-col text-start h-full">
                    <p className="font-normal text-black text-sm sm:text-lg md:text-lg">
                      <span className="text-[#c21f28] font-bold">
                        Subject Matter
                      </span>{" "}
                      Experts (SMEs) in the wide spectrum of R&D
                    </p>
                    <ul className="mt-6 text-start">
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        PAT/QBD
                      </li>
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        PGI & Nitrosamine
                      </li>
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        Flow Chemistry
                      </li>
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        Process Safety
                      </li>
                    </ul>
                  </div>

                  {/* Second Column */}
                  <div className="flex flex-col text-start h-full">
                    <p className="font-normal text-black text-sm sm:text-lg md:text-lg">
                      Experience in handling{" "}
                      <span className="text-[#c21f28] font-bold">
                        diversified portfolio
                      </span>{" "}
                      of APIs
                    </p>
                    <ul className="mt-auto text-start">
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        PAT/QBD
                      </li>
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        PGI & Nitrosamine
                      </li>
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        Flow Chemistry
                      </li>
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        Process Safety
                      </li>
                    </ul>
                  </div>

                  {/* Third Column */}
                  <div className="flex flex-col text-start h-full">
                    <p className="font-normal text-black text-sm sm:text-lg md:text-lg">
                      Expertise in achieving various{" "}
                      <span className="font-bold text-[#c21f28]">
                        formulation requirements
                      </span>
                    </p>
                    <ul className="mt-auto text-start">
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        PAT/QBD
                      </li>
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        PGI & Nitrosamine
                      </li>
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        Flow Chemistry
                      </li>
                      <li className="border-b-2 border-[#828282] border-opacity-35">
                        Process Safety
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="mt-12">
        <div className="text-black font-extralight text-center">
          Scroll to explore
        </div>
        <div className="m-auto h-[80px] w-[1px] bg-black mt-[10px]"></div>
      </section>
      <section>
        <div className="text-center py-6 pt-12 font-sans">
          <h6 className="text-[#3c286b] text-2xl md:text-3xl lg:text-4xl font-semibold">
            Regulatory Excellence
          </h6>
          <p className="text-[#000000] text-center text-[14px] lg:max-w-3xl md:max-w-5xl max-w-full mx-auto mt-4">
            Regulatory excellence is at the core of what we’re proud to offer.
            Our expertise focuses on international markets, and our quality
            ensures every product meets every stringent requirement.
          </p>
        </div>
        <div className="h-auto rounded-3xl mx-auto max-w-screen-xl relative">
          {/* Overlay Image */}
          <img
            src={overlayImage || "placeholder.jpg"}
            alt="Overlay"
            className="w-full h-64 lg:h-[200px] object-cover rounded-3xl "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#402869] via-[#7F2449] to-[#C21F28] opacity-75 pointer-events-none rounded-2xl"></div>
          <img
            src={star}
            alt="star"
            className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 h-[50px] w-auto hidden sm:block"
          />
          <div className="absolute top-1/2 px-6 text-red-50 transform -translate-y-1/2 w-full">
            <div className="grid grid-cols-1 gap-6 text-center lg:grid-cols-2">
              <div className="grid grid-cols-3 tracking-wide">
                <div className="mx-auto flex flex-col ">
                  <div className="text-2xl md:text-4xl lg:text-5xl text-white">
                    280
                  </div>
                  <div className=" text-md font-normal text-white ">USDMFs</div>
                </div>
                <div className="mx-auto flex flex-col ">
                  <div className="text-2xl md:text-4xl lg:text-5xl text-white">
                    167
                  </div>
                  <div className=" text-md font-normal text-white ">CEPs</div>
                </div>
                <div className="mx-auto flex flex-col ">
                  <div className="text-2xl md:text-4xl lg:text-5xl text-white">
                    149
                  </div>
                  <div className=" text-md font-normal text-white ">
                    Canadian DMFs
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="mx-auto flex flex-col ">
                  <div className="text-2xl md:text-4xl lg:text-5xl text-white">
                    42
                  </div>
                  <div className=" text-md font-normal text-white ">KDMFs</div>
                </div>
                <div className="mx-auto flex flex-col ">
                  <div className="text-2xl md:text-4xl lg:text-5xl  text-white">
                    31
                  </div>
                  <div className=" text-md font-normal text-white ">
                    JDMFs Filed
                  </div>
                </div>
                <div className="mx-auto flex max-w-xs flex-col ">
                  <div className="text-2xl md:text-4xl lg:text-5xl text-white">
                    800+
                  </div>
                  <div className=" text-md font-normal text-white ">
                    Patents Filed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="text-center py-6 pt-12 font-sans">
          <h6 className="text-[#c21f28] text-2xl md:text-3xl lg:text-4xl font-normal">
            Our Global Accreditations
          </h6>
          <div className="bg-slate-400">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-x-6 ">
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-500"
                src={icon}
                alt=""
              />
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-500"
                src={icon}
                alt=""
              />
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-500"
                src={icon}
                alt=""
              />
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-500"
                src={icon}
                alt=""
              />
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-500"
                src={icon}
                alt=""
              />
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-500"
                src={icon}
                alt=""
              />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-x-6 sm:gap-x-6">
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-500"
                src={icon}
                alt=""
              />
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-500"
                src={icon}
                alt=""
              />
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-500"
                src={icon}
                alt=""
              />
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-500"
                src={icon}
                alt=""
              />
              <img
                className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 dark:text-neutral-500"
                src={icon}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center py-6 pt-12 font-sans">
          <h6 className="text-[#3c286b] text-2xl md:text-3xl lg:text-4xl font-semibold">
            Regulatory Excellence
          </h6>
          <p className="text-[#000000] text-center text-[14px] lg:max-w-3xl md:max-w-5xl max-w-full mx-auto mt-4">
            Regulatory excellence is at the core of what we’re proud to offer.
            Our expertise focuses on international markets, and our quality
            ensures every product meets every stringent requirement.
          </p>
        </div>
        <div className="h-auto rounded-3xl mx-auto max-w-screen-xl relative">
          {/* Overlay Image */}
          <img
            src={overlayImage || "placeholder.jpg"}
            alt="Overlay"
            className="w-full h-[400px] md:h[500px] lg:h-[600px] xl:h-[600px] object-cover rounded-3xl "
          />
          <img
            src={star}
            alt="star"
            className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 h-[50px] w-auto hidden sm:block"
          />
          {/* Features Section */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center px-6 w-full">
            <section className=" bg-gradient-to-r from-[rgba(60,40,107,0.8)] via-[rgba(194,31,40,0.8)] to-[rgba(194,31,40,0.8)] text-white py-8 px-6 sm:px-10 lg:px-16 rounded-t-2xl shadow-lg max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center lg:py-3 md:py-3 gap-4">
                {/* First Column */}
                <div className="flex flex-col items-center">
                  <p className="font-normal text-white text-sm sm:text-lg md:text-lg text-center">
                    Installed with{" "}
                    <span className="font-bold">special technologies</span>{" "}
                    capable of complex reactions
                  </p>
                </div>

                {/* Vertical Divider */}
                {/* <div className="hidden sm:block border-l-2 border-white h-20"></div> */}
                <img
                  src={svg}
                  alt="Divider"
                  className="h-[153px] sm:h-[120px] w-auto mx-4 hidden sm:block"
                />

                {/* Second Column */}
                <div className="flex flex-col items-center">
                  <p className="font-normal text-white text-sm sm:text-lg md:text-lg text-center">
                    <span className="font-bold">Highly experienced </span>
                    workforce equipped with regular trainings
                  </p>
                </div>

                {/* Vertical Divider */}
                <img
                  src={svg}
                  alt="Divider"
                  className="h-[120px] w-auto mx-4 hidden sm:block"
                />

                {/* Third Column */}
                <div className="flex flex-col items-center">
                  <p className="font-normal text-white text-sm sm:text-lg md:text-lg text-center">
                    Dedicated teams focussed on{" "}
                    <span className="font-bold">continuous improvements</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="relative px-6 ">
          <section className=" bg-[#efeeec] text-black py-4 px-4 md:px-16 lg:px-16 xl:px-16 lg:py-8 md:py-8 xl:py-8 rounded-b-2xl shadow-lg max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center lg:py-3 md:py-3">
              {/* Left Content - 25% */}
              <div className="col-span-1 scroll-auto">
                <p className=" text-[#c21f28] text-2xl font-normal text-right sm:text-xl md:text-xl">
                  10 manufacturing facilities with{" "}
                  <p className="font-bold"> {">"} 18,000 MT </p> installed
                  capacity
                </p>
              </div>
              <div className="col-span-2 overflow-x-auto">
                <table className="table-auto w-full border-collapse  text-start border-gray-300 text-sm sm:text-base ">
                  <thead className="bg-transparent ">
                    <tr>
                      <th className="border-b-4 border-[#828282] font-normal text-start text-xl text-[#c21f28] px-4 py-2">
                        Unit
                      </th>
                      <th className="border-b-4 border-[#828282] font-normal text-start text-xl text-[#c21f28] px-4 py-2">
                        Capacity
                      </th>
                      <th className="border-b-4 border-[#828282] font-normal text-start text-xl text-[#c21f28] px-4 py-2">
                        APIs
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        Apitoria Unit 1 - Non-Ceph
                      </td>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        700 KL
                      </td>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        Non-Cephalosporins
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        Apitoria Unit 1 - Ceph
                      </td>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        500 KL
                      </td>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        Cephalosporins
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        Apitoria Unit 1 - Ceph
                      </td>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        500 KL
                      </td>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        Cephalosporins
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        Apitoria Unit 1 - Ceph
                      </td>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        500 KL
                      </td>
                      <td className="border-b-2 border-gray-300 px-4 py-2">
                        Cephalosporins
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b-4 border-[#828282] px-4 py-2">
                        Apitoria Unit 1 - Ceph
                      </td>
                      <td className="border-b-4 border-[#828282] px-4 py-2">
                        500 KL
                      </td>
                      <td className="border-b-4 border-[#828282] px-4 py-2">
                        Cephalosporins
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-transparent">
                    <tr>
                      <th
                        className=" text-[#c21f28] text-start text-xl font-normal px-4 py-2"
                        colSpan={2}
                      >
                        Overall Capacity
                      </th>
                      <th className=" text-[#c21f28] text-start text-xl font-normal px-4 py-2">
                        ~8,500 KL
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </section>
          <section className="py-12">
            <div className="m-auto  h-[80px] w-[1px] bg-black mt-[10px]"></div>
            <div className="text-center py-6 pt-12 font-sans">
              <h6 className="text-[#3c286b] text-2xl md:text-3xl lg:text-4xl font-normal">
              Global Customer Base
              </h6>
              <p className="text-[#000000] text-center text-[14px] lg:max-w-3xl md:max-w-5xl max-w-full mx-auto mt-4">
              Across continents. Reaching corners.
              <br />
              To be your partner, in health
              </p>
            </div>
            <div className="h-auto rounded-3xl mx-auto max-w-screen-xl relative">
          {/* Overlay Image */}
          <img
            src={map || "map.jpg"}
            alt="Overlay"
            className="w-full h-[400px] md:h[500px] lg:h-[600px] xl:h-[600px] object-cover rounded-3xl "
          />
          <img
            src={star}
            alt="star"
            className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 h-[50px] w-auto hidden sm:block"
          />

        </div>
            
          </section>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;
