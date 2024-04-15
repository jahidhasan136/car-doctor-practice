import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ serviceItem }) => {
  console.log(serviceItem);
  const { title, img, price, _id } = serviceItem;
  return (
    <div>
      <div className="grid gap-5 p-[25px] border border-[#E8E8E8] rounded-[10px]">
        <img src={img} alt="" />
        <h2 className="text-2xl font-bold text-[#444444]">{title}</h2>
        <div className="flex justify-between items-center">
          <h3 className="text-red text-xl font-bold">price: ${price}</h3>
          <Link to={`/service-details/${_id}`}>
            <FaArrowRight className="text-red" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
