import React from "react";

function About() {
  return (
    <div className="w-11/12 md:w-10/12 text-center py-10 flex-col gap-10 flex justify-center items-center">
      <div className="w-10/12 flex flex-col gap-4 justify-center items-center">
        <small className="text-sm text-white text-opacity-80 flex gap-1 items-center w-max">
          <span class="material-symbols-rounded text-base">local_library</span>
          The modern standard
        </small>
        <p className="head w-full text-2xl md:text-5xl font-[500] tracking-tight text-white md:w-8/12">
          Beautiful documentation that converts users
        </p>
        <span className="text-white text-opacity-70">
          A platform you can rely on to reach your audience
        </span>
      </div>
      <div className="grid gap-2 mt-4">
        <div className="grid gap-2 md:grid-cols-2 grid-cols-1 h-[30rem] md:h-[18rem]">
          <div className="relative w-full h-[15rem] md:h-full border grid place-items-center border-white/20 rounded-lg md:rounded-tl-3xl overflow-hidden">
            <img
              src={require("../assets/images/gorgeous.webp")}
              alt="pic"
              loading="lazy"
              width={494}
              height={360}
              className="rounded-lg  md:w-[85%] md:absolute bottom-0 md:left-1/2 md:-translate-x-1/2"
            />
            <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 text-white p-2 flex flex-col gap-1 w-full">
              <p className="text-sm">Gorgeous out of the box</p>
              <small className="text-xs text-opacity-65 text-white leading-5">
                Opinionated when you're lazy, but infinitely flexible when you
                need it to be
              </small>
            </div>
          </div>
          <div className="relative w-full h-[15rem] md:h-full grid place-items-center border border-white/20 p-4 rounded-lg md:rounded-tr-3xl overflow-hidden">
            <img
              src={require("../assets/images/developer.webp")}
              alt="pic"
              loading="lazy"
              className="rounded-lg md:w-[85%] md:absolute bottom-0 md:left-1/2 md:-translate-x-1/2"
            />
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 w-full text-white p-2 flex flex-col gap-1">
              <p className="text-sm">Developer forward</p>
              <small className="text-xs text-opacity-65 text-white leading-5">
                Content is powered by markdown and lives alongside your codebase
              </small>
            </div>
          </div>
        </div>
        <div className="hidden md:grid gap-2 grid-cols-3 h-[20rem] ">
          <div className="relative border border-white/20 p-4 grid place-items-center rounded-lg md:rounded-bl-3xl overflow-hidden">
            <img
              src={require("../assets/images/performance.webp")}
              alt="pic"
              loading="lazy"
              className="rounded-lg absolute bottom-0 w-[85%] left-1/2 -translate-x-1/2"
            />
            <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 h-1/12 text-white p-2 flex flex-col gap-1">
              <p className="text-sm">Built for performance</p>
              <small className="text-xs text-opacity-65 text-white leading-5">
                Meticulously designed and optimized for a great user experience
              </small>
            </div>
          </div>
          <div className="relative border border-white/20 p-4 flex flex-col justify-between rounded-lg overflow-hidden">
            <img
              src={require("../assets/images/conversion.webp")}
              alt="pic"
              loading="lazy"
              className="rounded-lg absolute bottom-0 w-[85%] left-1/2 -translate-x-1/2"
            />
            <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 w-full justify-center items-center left-0 h-1/12 text-white p-2 flex flex-col gap-1">
              <p className="text-sm">Conversion as a priority</p>
              <small className="text-xs text-opacity-65 text-white leading-5 w-4/5">
                Crafted for more user engagement and conversions
              </small>
            </div>
          </div>
          <div className="relative border border-white/20 p-4 grid place-items-center rounded-lg md:rounded-br-3xl overflow-hidden">
            <img
              src={require("../assets/images/maintained.webp")}
              alt="pic"
              loading="lazy"
              className="rounded-lg w-[85%]"
            />
            <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-3 w-full justify-center items-center left-0 h-1/12 text-white p-2 flex flex-col gap-1">
              <p className="text-sm">Effortlessly maintained</p>
              <small className="text-xs text-opacity-65 text-white leading-5 w-[70%]">
                Designed to make updating documentation easy
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
