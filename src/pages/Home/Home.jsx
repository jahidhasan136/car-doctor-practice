import About from "./About";
import Banner from "./Banner";
import PopularProducts from "./PopularProducts";
import Service from "./Service";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <About />
      <Service />
      <PopularProducts />
      <Team />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
