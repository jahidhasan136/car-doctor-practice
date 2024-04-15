import deliveryIcon from "../../assets/choose-us/delivery.svg";
import equipmentIcon from "../../assets/choose-us/equipment.svg";
import expertTeamIcon from "../../assets/choose-us/expert-team.svg";
import gurantyIcon from "../../assets/choose-us/guaranty.svg";
import supportIcon from "../../assets/choose-us/support.svg";
import timelyDeliveryIcon from "../../assets/choose-us/timely-delivery.svg";

const WhyChooseUs = () => {
  return (
    <div className="mt-[130px]">
      {/* why choose us heading contents */}

      <div className="text-center mb-[50px]">
        <h3 className="font-bold text-red text-xl capitalize">core Features</h3>
        <h2 className="capitalize font-bold text-[45px] my-5">Why choose us</h2>
        <p className="text-darkGray capitalize">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.
        </p>
      </div>

      {/* choose us card contents */}

      <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div className="grid gap-5 border border-gray rounded-[10px] px-[15px] pt-[31px] pb-[29px]">
          <img className="mx-auto" src={expertTeamIcon} alt="" />
          <h2 className="capitalize font-bold text-lg text-center">
            Expert Team
          </h2>
        </div>
        <div className="grid gap-5 bg-[#FF3811] text-white border border-gray rounded-[10px] px-[15px] pt-[31px] pb-[29px]">
          <img className="mx-auto" src={timelyDeliveryIcon} alt="" />
          <h2 className="capitalize font-bold text-lg text-center">
            Expert Team
          </h2>
        </div>
        <div className="grid gap-5 border border-gray rounded-[10px] px-[15px] pt-[31px] pb-[29px]">
          <img className="mx-auto" src={supportIcon} alt="" />
          <h2 className="capitalize font-bold text-lg text-center">
            Expert Team
          </h2>
        </div>
        <div className="grid gap-5 border border-gray rounded-[10px] px-[15px] pt-[31px] pb-[29px]">
          <img className="mx-auto" src={equipmentIcon} alt="" />
          <h2 className="capitalize font-bold text-lg text-center">
            Expert Team
          </h2>
        </div>
        <div className="grid gap-5 border border-gray rounded-[10px] px-[15px] pt-[31px] pb-[29px]">
          <img className="mx-auto" src={gurantyIcon} alt="" />
          <h2 className="capitalize font-bold text-lg text-center">
            Expert Team
          </h2>
        </div>
        <div className="grid gap-5 border border-gray rounded-[10px] px-[15px] pt-[31px] pb-[29px]">
          <img className="mx-auto" src={deliveryIcon} alt="" />
          <h2 className="capitalize font-bold text-lg text-center">
            Expert Team
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
