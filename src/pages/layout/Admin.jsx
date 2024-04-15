import { Outlet } from "react-router-dom";
import Header from "../Admin/Header";

const Admin = () => {
  return (
    <div className="pt-[50px]">
      <Header />
      <Outlet />
    </div>
  );
};

export default Admin;
