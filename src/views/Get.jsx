import React from "react";
import GetTabs from "../sections/GetTabs";

function Get() {
    return (
      <div className="w-full rounded-3xl border-x border-t border-[#181a21] mb-14">
        <div className="w-full h-14 rounded-t-3xl border-b border-[#181a21]"></div>
        <div className="w-full text-center py-10 flex-col gap-10 flex justify-center items-center">
          <div className="w-10/12 flex flex-col gap-4 justify-center items-center">
            <p className="head w-full text-2xl md:text-5xl font-[500] tracking-tight text-white md:w-8/12">
              The documentation you want, available today
            </p>
            <span className="text-white text-opacity-70">
              Begin your documentation journey
            </span>
            <div className="z-40 w-max sm:w-5/12 md:w-max flex md:flex-row flex-col items-center justify-center gap-4">
              <div className="p-1 flex-1 w-full rounded-full border border-secondary">
                <div className="bg-white hover:bg-opacity-60 text-black flex gap-1 justify-center items-center px-6 py-1 rounded-full cursor-pointer">
                  <p className="">Get Started</p>
                  <span class="material-symbols-rounded text-sm">
                    chevron_right
                  </span>
                </div>
              </div>
              <div className="w-full flex-1 hover:bg-white/20 p-1 rounded-full border border-secondary">
                <div className="flex text-white justify-center items-center gap-1 px-6 py-1 rounded-full cursor-pointer">
                  <p>Documentation</p>
                  <span class="material-symbols-rounded text-sm">
                    chevron_right
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-imgbg p-3 w-10/12">
            <GetTabs />
          </div>
        </div>
      </div>
    );
}

export default Get;
