import React from "react";

function Service() {
  return (
    <div id="services" className="h-40 mt-20 md:py-10 overflow-hidden  service mx-auto my-10 px-4 md:px-8 lg:px-12 flex flex-col items-start gap-2 justify-center relative">
    <video src="/coin.mp4" muted loop autoPlay playsInline className=" absolute top-0 -mt-52 right-0 left-0 bottom-0 -z-10"></video>
      <div>
        <h1 className=" leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-green-500  font-semibold text-pretty">
          We offer the best services in the world
        </h1>
      </div>
      <div>
        <p className=" text-xs sm:text-sm md:text-base text-slate-200">
          From global trading strategies to copy trading and lots more.
        </p>
      </div>
      <div>
        <p className=" hover:text-white  border-b-2 border-spacing-4 border-dashed text-xs sm:text-sm md:text-base text-slate-200">
          Join Now
        </p>
      </div>
    </div>
  );
}

export default Service;
