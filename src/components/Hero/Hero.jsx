import React from "react";
import HeroImg from "../../assets/shoe_image.png";
import fb from "../../assets/flipkart.png";
import amz from "../../assets/amazon.png";

const Hero = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col-reverse md:flex-row p-4 md:p-12 lg:p-14 justify-center ">
        {/* content */}
        <div className="flex flex-col max-w-[600px] p-5 ">
          <div>
            <h1 className="text-black text-4xl md:text-5xl lg:text-8xl font-bold">
              YOUR FEET DESERVE THE BEST
            </h1>
          </div>
          <div>
            <p className="text-gray-600 text-md lg:text-xl max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              ipsum at justo ornare efficitur. Donec in purus vel mauris
              facilisis finibus.
            </p>
          </div>
          <div className="flex gap-10 mt-4">
            <button className="bg-[#D01C28] ">Shop Now</button>
            <button className="border border-r-4">Category</button>
          </div>

          <p className="text-gray-500 mt-4">Also Available On</p>
          <div className="flex align-center gap-6 mt-2">
            <img src={fb} alt="" />
            <img src={amz} alt="" />
          </div>
        </div>
        {/* image */}
        <div className="p-12 md:p-0 flex flex-col justify-center items-center ">
          <img src={HeroImg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
