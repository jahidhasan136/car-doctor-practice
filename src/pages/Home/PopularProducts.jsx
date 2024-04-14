import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import imgOne from "../../assets/popular-products/img-1.png";
import imgTwo from "../../assets/popular-products/img-2.png";
import imgThree from "../../assets/popular-products/img-3.png";
import imgFour from "../../assets/popular-products/img-4.png";
import imgFive from "../../assets/popular-products/img-5.png";
import imgSix from "../../assets/popular-products/img-6.png";

const PopularProducts = () => {
  // rating styles
  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#FF912C",
    inactiveFillColor: "#F3F3F3",
    // display: "flex",
  };
  return (
    <div className="mt-[130px]">
      {/* popular products heading contents */}
      <div className="text-center mb-[50px]">
        <h3 className="font-bold text-red  text-xl">Popular Products</h3>
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
              <Rating
                className="max-w-[90px] mx-auto"
                value={5}
                itemStyles={myStyles}
                readOnly
              />
              <p className="text-xl font-semibold text-red">$20.00</p>
            </div>
          </div>
          <div className="grid gap-5 border border-[#E8E8E8] rounded-[10px] py-[25px] px-[19px] text-center">
            <div className="bg-[#F3F3F3] px-[85px] py-[31px] rounded-[10px]">
              <img className="mx-auto" src={imgTwo} alt="" />
            </div>
            <div className="grid gap-[10px]">
              <h2 className="text-2xl font-bold">Car Engine Plug</h2>
              <Rating
                className="max-w-[90px] mx-auto"
                value={5}
                itemStyles={myStyles}
                readOnly
              />
              <p className="text-xl font-semibold text-red">$20.00</p>
            </div>
          </div>
          <div className="grid gap-5 border border-[#E8E8E8] rounded-[10px] py-[25px] px-[19px] text-center">
            <div className="bg-[#F3F3F3] px-[85px] py-[31px] rounded-[10px]">
              <img className="mx-auto" src={imgThree} alt="" />
            </div>
            <div className="grid gap-[10px]">
              <h2 className="text-2xl font-bold">Car Engine Plug</h2>
              <Rating
                className="max-w-[90px] mx-auto"
                value={5}
                itemStyles={myStyles}
                readOnly
              />
              <p className="text-xl font-semibold text-red">$20.00</p>
            </div>
          </div>
          <div className="grid gap-5 border border-[#E8E8E8] rounded-[10px] py-[25px] px-[19px] text-center">
            <div className="bg-[#F3F3F3] px-[85px] py-[31px] rounded-[10px]">
              <img className="mx-auto" src={imgFour} alt="" />
            </div>
            <div className="grid gap-[10px]">
              <h2 className="text-2xl font-bold">Car Engine Plug</h2>
              <Rating
                className="max-w-[90px] mx-auto"
                value={5}
                itemStyles={myStyles}
                readOnly
              />
              <p className="text-xl font-semibold text-red">$20.00</p>
            </div>
          </div>
          <div className="grid gap-5 border border-[#E8E8E8] rounded-[10px] py-[25px] px-[19px] text-center">
            <div className="bg-[#F3F3F3] px-[85px] py-[31px] rounded-[10px]">
              <img className="mx-auto" src={imgFive} alt="" />
            </div>
            <div className="grid gap-[10px]">
              <h2 className="text-2xl font-bold">Car Engine Plug</h2>
              <Rating
                className="max-w-[90px] mx-auto"
                value={5}
                itemStyles={myStyles}
                readOnly
              />
              <p className="text-xl font-semibold text-red">$20.00</p>
            </div>
          </div>
          <div className="grid gap-5 border border-[#E8E8E8] rounded-[10px] py-[25px] px-[19px] text-center">
            <div className="bg-[#F3F3F3] px-[85px] py-[31px] rounded-[10px]">
              <img className="mx-auto" src={imgSix} alt="" />
            </div>
            <div className="grid gap-[10px]">
              <h2 className="text-2xl font-bold">Car Engine Plug</h2>
              <Rating
                className="max-w-[90px] mx-auto"
                value={5}
                itemStyles={myStyles}
                readOnly
              />
              <p className="text-xl font-semibold text-red">$20.00</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[50px]">
          <button className="btn_outline">More Products</button>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
