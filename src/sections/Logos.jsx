import React from "react";

function Logos() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      <div className="flex md:flex-row flex-col items-center md:gap-1 gap-4 text-sm md:text-base">
        <p>
          Powering developer experiences from fast growing startups to
          enterprises.
        </p>
        <a
          href="/"
          className="flex font-medium w-max items-center hover:text-white"
        >
          Learn more
          <span class="material-symbols-rounded text-sm">chevron_right</span>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1 p-4">
        <div className="p-4 grid place-items-center">
          <img
            src={require("../assets/images/logos/teleport.png")}
            alt="logo"
          />
        </div>
        <div className="p-4 grid place-items-center">
          <img src={require("../assets/images/logos/homebot.png")} alt="logo" />
        </div>
        <div className="p-4 grid place-items-center">
          <img src={require("../assets/images/logos/stedi.png")} alt="logo" />
        </div>
        <div className="p-4 grid place-items-center">
          <img
            src={require("../assets/images/logos/flatfile.png")}
            alt="logo"
          />
        </div>
        <div className="p-4 grid place-items-center">
          <img
            src={require("../assets/images/logos/elevenlabs.png")}
            alt="logo"
          />
        </div>
        <div className="p-4 grid place-items-center">
          <img src={require("../assets/images/logos/mindsdb.png")} alt="logo" />
        </div>
        <div className="p-4 grid place-items-center">
          <img src={require("../assets/images/logos/resend.png")} alt="logo" />
        </div>
        <div className="p-4 grid place-items-center">
          <img src={require("../assets/images/logos/goody.png")} alt="logo" />
        </div>
        <div className="p-4 grid place-items-center">
          <img src={require("../assets/images/logos/whop.png")} alt="logo" />
        </div>
        <div className="p-4 grid place-items-center">
          <img
            src={require("../assets/images/logos/smartcar.png")}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Logos;
