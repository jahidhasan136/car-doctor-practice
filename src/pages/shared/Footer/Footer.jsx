import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-black mt-[130px]">
      <div className="container py-[130px] grid md:gap-10 2xl:gap-0 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-start 2xl:place-items-center text-white">
        <div className="grid gap-5">
          <img src={logo} alt="" />
          <p className="text-gray">
            Edwin Diaz is a sofware and web <br /> technologies engineer, a life
            coach <br /> trainer who is also a serial.
          </p>
          <div className="flex gap-2 text-white">
            <div className="bg-[#4444] p-4 rounded-full">
              <FaGoogle />
            </div>
            <div className="bg-[#4444] p-4 rounded-full">
              <FaTwitter />
            </div>
            <div className="bg-[#4444] p-4 rounded-full">
              <FaInstagram />
            </div>
            <div className="bg-[#4444] p-4 rounded-full">
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="grid gap-10">
          <h3 className="font-semibold">About</h3>
          <div className="grid gap-5">
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="grid gap-10">
          <h3 className="font-semibold">Company</h3>
          <div className="grid gap-5">
            <Link to="/why_car_doctor">Why Car Doctor</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="grid gap-10">
          <h3 className="font-semibold">Support</h3>
          <div className="grid gap-5">
            <Link to="/support_center">Support Center</Link>
            <Link to="/feedback">Feedback</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
