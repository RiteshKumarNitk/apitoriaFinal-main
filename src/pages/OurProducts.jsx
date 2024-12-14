import React from 'react'
import ProductAZ from '../components/pageComponents/OurBusiness/ProductAZ'
import bg2 from "../assets/pics/bg2.png";
import img1 from "../assets/images/cns.png";
import img2 from "../assets/images/Antidiabetics.png";
import img3 from "../assets/images/Antihistamines.png";
import img4 from "../assets/images/Complex molecules.png";
import img5 from "../assets/images/Oncology.png";
import img6 from "../assets/images/Complex molecules.png";
import OurProduct from "../components/pageComponents/OurBusiness/OurProduct"

import labimg from "../assets/lifeatapitoria/lab2.jpg";
const breadcrumbs = [
  { text: "Home", link: "/" },
  { text: "Our Product", link: "/product" },
];

const products = [
  {
    image: img1,
    title: "Antibiotics",
  },
  {
    image: img2,
    title: "CNS & CVS",
  },
  {
    image: img3,
    title: "Complex Molecules",
  },
  {
    image: img4,
    title: "Advanced Antibiotics",
  },
  {
    image: img5,
    title: "CNS & CVS",
  },
  {
    image: img6,
    title: "CNS & CVS",
  },
];




const OurProducts = () => {


  return (
   <div className=" xl:mt-24 lg:mt-24 md:mt-32 sm:mt-24 mt-8">
     <OurProduct
        backgroundImage={bg2}
        overlayImage={labimg}
        breadcrumbs={breadcrumbs}
        products={products}
      />
        <ProductAZ />
    </div>
  )
}

export default OurProducts
