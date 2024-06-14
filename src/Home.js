import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Truested from "./components/Truested";

const Home = () => {
  const data = {
    name: "Neon's store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Truested />
    </>
  );
};

export default Home;