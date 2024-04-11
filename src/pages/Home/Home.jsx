import About from "./About";
import Banner from "./Banner";
import PopularProducts from "./PopularProducts";
import Service from "./Service";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <About />
      <Service />
      <PopularProducts />
    </div>
  );
};

export default Home;
