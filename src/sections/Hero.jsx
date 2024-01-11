import React from "react";

function Hero() {
  return (
    <div className="z-50 w-11/12 lg:w-8/12 flex flex-col gap-8 items-center">
      <div className="w-11/12 flex justify-center items-center">
        <p className="w-11/12 text-3xl md:text-5xl lg:text-6xl font-medium head tracking-tight">
          The documentation you want, effortlessly
        </p>
      </div>
      <div className="w-11/12 flex justify-center">
        <p className="text-sm md:text-base font-medium w-10/12 leading-[2rem]">
          Meet the modern standard for public facing documentation. Beautiful
          out of the box, easy to maintain, and optimized for user engagement.
        </p>
      </div>
      <div className="flex w-full sm:flex-row flex-col items-center justify-center gap-4">
        <div className="p-1 rounded-full grid place-items-center border border-secondary w-6/12 sm:w-max">
          <div className="bg-secondary w-full hover:bg-teal-700 hover:bg-opacity-40 flex justify-center gap-1 text-sm font-semibold items-center px-4 py-2 rounded-full cursor-pointer">
            <p className="">Get Started</p>
            <span class="material-symbols-rounded text-sm">chevron_right</span>
          </div>
        </div>
        <div className="hover:text-white p-1 rounded-full grid place-items-center w-6/12 sm:w-max">
          <div className="flex text-sm items-center gap-1 font-semibold px-4 py-2 rounded-full cursor-pointer">
            <p>Documentation</p>
            <span class="material-symbols-rounded text-sm">chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
