import { useContext } from "react";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container flex justify-between items-center">
      <img src={logo} alt="" />
      <div className="flex items-center gap-5 font-semibold text-lg">
        <Link className="capitalize" to="/">
          Order
        </Link>
        <Link className="capitalize" to="/about">
          Order Review
        </Link>
        <Link className="capitalize" to="/services">
          Manage Inventory
        </Link>
        {user ? (
          <div className="flex items-center gap-5">
            <CiUser />
            <CiSearch />
            <CiHeart />
            <RiShoppingBagLine />
          </div>
        ) : (
          <Link className="capitalize" to="/blog">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
