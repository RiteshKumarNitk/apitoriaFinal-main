import bg2 from "../assets/pics/bg2.png";
import labimg from "../assets/lifeatapitoria/lab2.jpg";
import HeaderCard from "../components/LifeAtApitoria/HeaderCard";
import Impect from "../components/LifeAtApitoria/Impect";
import CardBox from "../components/LifeAtApitoria/CardBox";

const breadcrumbs = [
  { text: "Home", link: "/" },
  { text: "life at apitoria", link: "/life-at-apitoria" },
];
const LifeAtApitoria = () => {
  return (
    <div className=" xl:mt-24 lg:mt-24 md:mt-32 sm:mt-24 mt-8">
      <HeaderCard
        backgroundImage={bg2}
        overlayImage={labimg}
        breadcrumbs={breadcrumbs}
      />
      <Impect  backgroundImage={bg2} />
      <CardBox />
    </div>
  );
};

export default LifeAtApitoria;
