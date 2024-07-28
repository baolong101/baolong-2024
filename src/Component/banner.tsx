import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

type Props = {};

const Banner = (props: Props) => {
  const [index, setIndex] = useState(0);
  const images = ["src/assets/banner.png", "src/assets/banner3 (2).png"];

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  useEffect(() => {
    const interval = setInterval(next, 2000);
    return () => clearInterval(interval);
  }, [index]);
  const next = () => setIndex((index + 1) % images.length);
  return (
    <div className="bg-gradient-to-r transition-transform from-banner-left to-banner-right h-[582px] overflow-hidden mt-[120px] ">
      <div className=" float-right w-full transition-transform">
        <div  className="max-w">
          <img className="w-full " src={images[index]} alt="" />
        </div>
        <button
          onClick={prev}
          className="absolute top-2/3 left-4 transform -translate-y-1/2  text-black text-[15px] px-2 py-1 rounded ml-[45px]"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          onClick={next}
          className="absolute top-2/3 ml-[1200px] left-4 transform -translate-y-1/2  text-black text-[15px] px-2 py-1 rounded"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <div className="w-[650px] mt-[-450px] ml-[130px] *:text-left">
          <h1 className="text-[47px] font-black ml-[21px]">
            Wir kümmern uns um Ihre <br />
            schöner Garten und Haus
          </h1>
          <p className="text-[15px] ml-[21px]">
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's <br />
            standard dummy text ever since the 1500s,
          </p>
          <button className="inline-block rounded border border-indigo-600 px-10 py-2 text-[24px] font-medium text-[#505F4E] mt-[15px] ml-[-415px]">
            Lern mehr
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
