import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Header = () => {
  return (
    <div className="container flex justify-between items-center">
      <img src={logo} alt="" />
      <div className="flex gap-5 font-semibold text-lg">
        <Link className="capitalize" to="/">
          Home
        </Link>
        <Link className="capitalize" to="/about">
          About
        </Link>
        <Link className="capitalize" to="/services">
          Services
        </Link>
        <Link className="capitalize" to="/blog">
          Blog
        </Link>
        <Link className="capitalize" to="/Contact">
          contact
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <HiOutlineShoppingBag />
        <CiSearch />
        <button className="px-7 py-4 border border-red rounded-[5px] text-red font-semibold text-lg">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
