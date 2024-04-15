import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import imgOne from "../../assets/team/img-1.png";
import imgTwo from "../../assets/team/img-2.png";
import imgThree from "../../assets/team/img-3.png";

const Team = () => {
  return (
    <div className="mt-[130px]">
      {/* team heading contents */}

      <div className="text-center mb-[50px]">
        <h3 className="font-bold text-red  text-xl">Team</h3>
        <h2 className="capitalize font-bold text-[45px] my-5">Meet our team</h2>
        <p className="text-darkGray capitalize">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.
        </p>
      </div>

      {/* team card sections */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center mx-auto border border-gray rounded-[10px] p-6">
          <img src={imgOne} alt="" />
          <h2 className="font-bold text-2xl capitalize mt-5 mb-[10px]">
            Car Engine Plug
          </h2>
          <p className="font-semibold text-xl capitalize">Engine Expert</p>
          <div className="flex items-center justify-center gap-3 mt-[15px]">
            <div className="bg-[#395185] p-3 rounded-full">
              <FaFacebookF className="text-white" />
            </div>
            <div className="bg-[#55ACEE] p-3 rounded-full">
              <FaTwitter className="text-white" />
            </div>
            <div className="bg-[#0A66C2] p-3 rounded-full">
              <FaLinkedin className="text-white" />
            </div>
            <div className="bg-[#FF3811] p-3 rounded-full">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
        <div className="text-center mx-auto border border-gray rounded-[10px] p-6">
          <img src={imgTwo} alt="" />
          <h2 className="font-bold text-2xl capitalize mt-5 mb-[10px]">
            Car Engine Plug
          </h2>
          <p className="font-semibold text-xl capitalize">Engine Expert</p>
          <div className="flex items-center justify-center gap-3 mt-[15px]">
            <div className="bg-[#395185] p-3 rounded-full">
              <FaFacebookF className="text-white" />
            </div>
            <div className="bg-[#55ACEE] p-3 rounded-full">
              <FaTwitter className="text-white" />
            </div>
            <div className="bg-[#0A66C2] p-3 rounded-full">
              <FaLinkedin className="text-white" />
            </div>
            <div className="bg-[#FF3811] p-3 rounded-full">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
        <div className="text-center mx-auto border border-gray rounded-[10px] p-6">
          <img src={imgThree} alt="" />
          <h2 className="font-bold text-2xl capitalize mt-5 mb-[10px]">
            Car Engine Plug
          </h2>
          <p className="font-semibold text-xl capitalize">Engine Expert</p>
          <div className="flex items-center justify-center gap-3 mt-[15px]">
            <div className="bg-[#395185] p-3 rounded-full">
              <FaFacebookF className="text-white" />
            </div>
            <div className="bg-[#55ACEE] p-3 rounded-full">
              <FaTwitter className="text-white" />
            </div>
            <div className="bg-[#0A66C2] p-3 rounded-full">
              <FaLinkedin className="text-white" />
            </div>
            <div className="bg-[#FF3811] p-3 rounded-full">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
