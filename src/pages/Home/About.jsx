import aboutImgOne from "../../assets/about/about-1.png";
import aboutImgTwo from "../../assets/about/about-2.png";

const About = () => {
  return (
    <div className="mt-[130px] grid md:grid-cols-2 gap-16">
      <div className="relative">
        <img src={aboutImgOne} alt="" />
        <img
          className="absolute top-1/2 right-0 2xl:right-1/4"
          src={aboutImgTwo}
          alt=""
        />
      </div>
      <div>
        <h3 className="capitalize font-bold text-red">About us</h3>
        <h2 className="pt-5 pb-[30px] text-[45px]  font-bold">
          We are qualified & of experience in this field
        </h2>
        <div className="grid gap-5 text-darkGray mb-[30px]">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.{" "}
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.{" "}
          </p>
        </div>
        <button className="bg-red px-7 py-4 rounded-[5px] text-white capitalize">
          Get more info
        </button>
      </div>
    </div>
  );
};

export default About;
