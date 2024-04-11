import { FaArrowRight } from "react-icons/fa";
import serviceImg from "../../assets/serviceImg.png";

const Service = () => {
  return (
    <div className="mt-[130px]">
      {/* service heading contents */}
      <div className="text-center mb-[50px]">
        <h3 className="font-bold text-red  text-xl">Service</h3>
        <h2 className="capitalize font-bold text-[45px] my-5">
          Our service area
        </h2>
        <p className="text-darkGray capitalize">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.
        </p>
      </div>

      {/* service cart */}
      <div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="grid gap-5 p-[25px] border border-[#E8E8E8] rounded-[10px]">
            <img src={serviceImg} alt="" />
            <h2 className="text-2xl font-bold text-[#444444]">
              Electrical System
            </h2>
            <div className="flex justify-between items-center">
              <h3 className="text-red text-xl font-bold">price: $20.00</h3>
              <FaArrowRight className="text-red" />
            </div>
          </div>
          <div className="grid gap-5 p-[25px] border border-[#E8E8E8] rounded-[10px]">
            <img src={serviceImg} alt="" />
            <h2 className="text-2xl font-bold text-[#444444]">
              Electrical System
            </h2>
            <div className="flex justify-between items-center">
              <h3 className="text-red text-xl font-bold">price: $20.00</h3>
              <FaArrowRight className="text-red" />
            </div>
          </div>
          <div className="grid gap-5 p-[25px] border border-[#E8E8E8] rounded-[10px]">
            <img src={serviceImg} alt="" />
            <h2 className="text-2xl font-bold text-[#444444]">
              Electrical System
            </h2>
            <div className="flex justify-between items-center">
              <h3 className="text-red text-xl font-bold">price: $20.00</h3>
              <FaArrowRight className="text-red" />
            </div>
          </div>
          <div className="grid gap-5 p-[25px] border border-[#E8E8E8] rounded-[10px]">
            <img src={serviceImg} alt="" />
            <h2 className="text-2xl font-bold text-[#444444]">
              Electrical System
            </h2>
            <div className="flex justify-between items-center">
              <h3 className="text-red text-xl font-bold">price: $20.00</h3>
              <FaArrowRight className="text-red" />
            </div>
          </div>
          <div className="grid gap-5 p-[25px] border border-[#E8E8E8] rounded-[10px]">
            <img src={serviceImg} alt="" />
            <h2 className="text-2xl font-bold text-[#444444]">
              Electrical System
            </h2>
            <div className="flex justify-between items-center">
              <h3 className="text-red text-xl font-bold">price: $20.00</h3>
              <FaArrowRight className="text-red" />
            </div>
          </div>
          <div className="grid gap-5 p-[25px] border border-[#E8E8E8] rounded-[10px]">
            <img src={serviceImg} alt="" />
            <h2 className="text-2xl font-bold text-[#444444]">
              Electrical System
            </h2>
            <div className="flex justify-between items-center">
              <h3 className="text-red text-xl font-bold">price: $20.00</h3>
              <FaArrowRight className="text-red" />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[50px]">
          <button className="btn_outline">More Services</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
