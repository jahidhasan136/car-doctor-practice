import { useEffect, useState } from "react";
import ServiceCard from "../../sections/ServiceCard";

const Service = () => {
  const [service, setSerivce] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSerivce(data);
      });
  }, []);

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
          {service?.map((item) => (
            <ServiceCard key={item._id} serviceItem={item} />
          ))}
        </div>
        <div className="flex justify-center mt-[50px]">
          <button className="btn_outline">More Services</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
