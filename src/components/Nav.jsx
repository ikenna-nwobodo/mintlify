import React from "react";

function Nav() {
  return (
    <div className="text-[#CAECF1] flex justify-between items-center px-4 pt-8 pb-4 mb-10 w-full lg:w-11/12">
      <div className="flex gap-2">
        <img src={require("../assets/images/logo.png")} alt="logo" height={10} />
        <p className="text-lg font-bold tracking-wide">Mintlify</p>
      </div>
      <div className="hidden lg:flex lg:gap-4 md:gap-6 items-center text-sm tracking-wide">
        <p className="cursor-pointer hover:text-white">Documentation</p>
        <p className="cursor-pointer hover:text-white">Customers</p>
        <p className="cursor-pointer hover:text-white">Pricing</p>
        <p className="cursor-pointer hover:text-white">Blog</p>
        <p className="cursor-pointer hover:text-white">Careers</p>
        <p className="cursor-pointer hover:text-white">Enterprise</p>
      </div>
      <p className="hidden lg:block cursor-pointer hover:text-white text-sm">Sign In</p>
    </div>
  );
}

export default Nav;
