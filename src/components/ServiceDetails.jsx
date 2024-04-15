import { useLoaderData } from "react-router";
import bgImg from "../assets/service-details/bgImg.png";
import mainImg from "../assets/service-details/img.png";
import imgOne from "../assets/service-details/imgOne.png";
import rightOne from "../assets/service-details/rightOne.png";
import rightTwo from "../assets/service-details/rightTwo.png";
import stepOne from "../assets/service-details/step-1.png";
import stepTwo from "../assets/service-details/step-2.png";
import stepThree from "../assets/service-details/step-3.png";
import videoImg from "../assets/service-details/videoImg.png";

const ServiceDetails = () => {
  const services = useLoaderData();

  const { description, img, price, title, facility } = services;

  console.log(services);
  return (
    <div className="mt-[50px] container">
      {/* heading links */}

      <div className="relative">
        <img src={mainImg} alt="" />
        <img className="absolute top-0" src={bgImg} alt="" />
      </div>

      {/* body contents */}

      <div className="flex gap-6 mt-[130px]">
        <div>
          <img src={imgOne} alt="" />
          <h2 className="capitalize text-[35px] font-bold my-[30px]">
            Unique Car Engine service
          </h2>
          <p className="mb-[30px] text-[#737373]">{description}</p>

          {/* four cards contents */}

          <div className="grid md:grid-cols-2 gap-6">
            {facility.map((item) => (
              <>
                <div className="p-[40px] bg-[#F3F3F3] border-t-4 border-[#FF3811] rounded-[10px]">
                  <h3 className="capitalize text-xl font-bold mb-[10px]">
                    {item?.name}
                  </h3>
                  <p className="text-[#737373]">{item.details}</p>
                </div>
              </>
            ))}
          </div>
          <p className="mt-[30px] text-[#737373]">{description}</p>
          <h2 className="capitalize text-[35px] font-bold my-[30px]">
            3 Simple Steps to Process
          </h2>
          <p className="mb-[30px] text-[#737373]">{description}</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-[#E8E8E8] rounded-[10px] py-[39px] px-9 text-center">
              <img className="mx-auto" src={stepOne} alt="" />
              <h3 className="uppercase font-bold text-xl my-5">Step One</h3>
              <p className="text-[#737373]">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="border border-[#E8E8E8] rounded-[10px] py-[39px] px-9 text-center">
              <img className="mx-auto" src={stepTwo} alt="" />
              <h3 className="uppercase font-bold text-xl my-5">Step One</h3>
              <p className="text-[#737373]">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="border border-[#E8E8E8] rounded-[10px] py-[39px] px-9 text-center">
              <img className="mx-auto" src={stepThree} alt="" />
              <h3 className="uppercase font-bold text-xl my-5">Step One</h3>
              <p className="text-[#737373]">
                It uses a dictionary of over 200 .
              </p>
            </div>
          </div>
          <img className="mt-[30px]" src={videoImg} alt="" />
        </div>
        <div>
          <img className="w-[100vw] mb-[30px]" src={rightOne} alt="" />
          <img className="w-[100vw]" src={rightTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
