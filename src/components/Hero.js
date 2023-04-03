import React from "react";

import WomanImg from "../img/woman_hero.png";
const Hero = () => {
  return (
    <section className="pt-48 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="items-center container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3 "></div>New Trend
          </div>
          <h1 className="text-[70px] leaeding-[1.1] font-light mb-4">
            AUTUM SALE STYLISH
          </h1>{" "}
          <br />
          <span className="font-semibold">WOMEN'S</span>
        </div>
        {/* image */}
        <div>
          <img alt="" src={WomanImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
