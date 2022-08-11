import Hero from "@components/Web/Home/Hero";
import Manufacture from "@components/Web/Home/Manufacture";
import Service from "@components/Web/Home/Service";
import Molds from "@components/Web/Home/Molds";
import Products from "@components/Web/Home/Products";
import Presentation from "@components/Web/Home/Presentation";

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <Manufacture />
      <Molds />
      <Products />
      <Presentation />
    </>
  );
};

export default Home;
