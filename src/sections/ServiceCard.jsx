import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ serviceItem }) => {
  console.log(serviceItem);
  const { title, img, price } = serviceItem;
  return (
    <div>
      <div className="grid gap-5 p-[25px] border border-[#E8E8E8] rounded-[10px]">
        <img src={img} alt="" />
        <h2 className="text-2xl font-bold text-[#444444]">{title}</h2>
        <div className="flex justify-between items-center">
          <h3 className="text-red text-xl font-bold">price: ${price}</h3>
          <FaArrowRight className="text-red" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
