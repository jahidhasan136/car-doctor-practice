import { useContext } from "react";
import { Link } from "react-router-dom";
import authImg from "../../assets/authImg.png";
import facebookIcon from "../../assets/facebookIcon.png";
import googleIcon from "../../assets/googleIcon.png";
import linkedinIcon from "../../assets/linkedinIcon.png";
import { AuthContext } from "../../providers/AuthProviders";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("created user", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-around items-center pt-[23px]">
      <img src={authImg} alt="" />
      <div className="border border-gray rounded-[10px] px-[71px] pt-[88px] pb-[61px]">
        <h1 className="text-center mb-[50px] font-semibold text-[40px]">
          Sign up
        </h1>
        <form onSubmit={handleSignup} className="grid gap-7" action="">
          <div className="grid gap-[10px]">
            <label htmlFor="" className="font-semibold text-lg">
              Name
            </label>
            <input
              className="px-[25px] py-[15px] text-[#A2A2A2] rounded-[10px] border border-gray w-[461px]"
              name="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-[10px]">
            <label htmlFor="" className="font-semibold text-lg">
              Email
            </label>
            <input
              className="px-[25px] py-[15px] text-[#A2A2A2] rounded-[10px] border border-gray w-[461px]"
              name="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="grid gap-[10px]">
            <label htmlFor="" className="font-semibold text-lg">
              Password
            </label>
            <input
              className="px-[25px] py-[15px] text-[#A2A2A2] rounded-[10px] border border-gray w-[461px]"
              name="password"
              type="password"
              placeholder="Your password"
            />
          </div>
          <input
            className="bg-[#FF3811] py-[17px] rounded-[10px] text-white font-semibold text-xl"
            type="submit"
            value="Sign Up"
          />
          <p className="my-[5px] font-medium text-lg text-center">
            or Sign Up with
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="p-[15px] bg-[#F5F5F8] rounded-full cursor-pointer">
              <img src={facebookIcon} alt="" />
            </div>
            <div className="p-[15px] bg-[#F5F5F8] rounded-full cursor-pointer">
              <img src={linkedinIcon} alt="" />
            </div>
            <div className="p-[15px] bg-[#F5F5F8] rounded-full cursor-pointer">
              <img src={googleIcon} alt="" />
            </div>
          </div>
        </form>
        <h2 className="text-lg text-[#737373] mt-[50px] text-center">
          Already have an account?{" "}
          <Link to="/users/login" className="text-[#FF3811] font-bold">
            Login
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default SignUp;
