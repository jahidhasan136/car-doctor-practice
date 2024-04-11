import imgOne from "../../assets/popular-products/img-1.png";

const PopularProducts = () => {
  return (
    <div className="mt-[130px]">
      {/* popular products heading contents */}
      <div className="text-center mb-[50px]">
        <h3 className="font-bold text-red  text-xl">Service</h3>
        <h2 className="capitalize font-bold text-[45px] my-5">
          Browse Out Products
        </h2>
        <p className="text-darkGray capitalize">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.
        </p>
      </div>

      {/* popular products card sections */}
      <div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="grid gap-5 border border-[#E8E8E8] rounded-[10px] py-[25px] px-[19px] text-center">
            <div className="bg-[#F3F3F3] px-[85px] py-[31px] rounded-[10px]">
              <img className="mx-auto" src={imgOne} alt="" />
            </div>
            <div className="grid gap-[10px]">
              <h2 className="text-2xl font-bold">Car Engine Plug</h2>
              <p className="text-xl font-semibold text-red">$20.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
