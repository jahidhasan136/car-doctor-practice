import bannerBgImg from "../../assets/banner/banner-bg.png";
import bannerImg from "../../assets/banner/banner.png";

const Banner = () => {
  return (
    <div className="mt-[50px]">
      <div className="relative">
        <img className="w-full" src={bannerImg} alt="" />
        <img className="absolute top-0 w-full" src={bannerBgImg} alt="" />
        <div className="grid gap-[30px] absolute top-1/4 text-white pl-[100px]">
          <h1 className="font-bold text-6xl leading-[75px] capitalize">
            Affordable <br /> Price for <br /> car servicing
          </h1>
          <p className="text-lg leading-[30px] capitalize">
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div className="flex gap-5 items-center">
            <button className="bg-red px-7 py-4 rounded-[5px] text-white">
              Discover More
            </button>
            <button className="border border-white px-7 py-4 rounded-[5px]">
              Latest project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
