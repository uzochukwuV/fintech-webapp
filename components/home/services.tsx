import Image from "next/image";
import React from "react";

function Service() {
  return (
    <div id="services" className="h-72 mt-20 md:py-10 relative bg-gradient-to-b from-transparent   w-full service mx-auto my-10  flex flex-col items-center gap-2 justify-center ">
    <Image src="/svg/crypto_flowers.svg" alt="Service" width={1000} height={1000} className=" absolute w-full top-0 -z-10 h-full object-contain"></Image>
      <div className="">
        <h1 className=" leading-none text-3xl md:text-4xl lg:text-6xl  text-black-800  font-semibold text-pretty">
          We offer the best services in the world
        </h1>
      </div>
      <div>
        <p className=" text-sm md:text-xl text-slate-700">
          From global trading strategies to copy trading and lots more.
        </p>
      </div>
      <div>
        <p className=" hover:text-white text-base  border-b-2 border-spacing-4 border-dashed  sm:text-sm md:text-base text-slate-700">
          Join Now
        </p>
      </div>
    </div>
  );
}

export default Service;
