import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const Main = () => {
  return (
    <div className="pt-[50px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
