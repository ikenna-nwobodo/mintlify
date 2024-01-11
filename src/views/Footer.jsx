import React from "react";

function Footer() {
  return (
    <footer className="w-11/12 md:w-9/12 mb-40">
      <div className="">
        <div className="sm:flex grid gap-4">
          <div className="flex flex-wrap flex-1 sm:flex-col justify-between gap-3">
            <div className="flex gap-2">
              <img
                src={require("../assets/images/logo.png")}
                alt="logo"
                height={10}
              />
              <p className="text-lg font-bold tracking-wide">Mintlify</p>
            </div>
            <div className="flex md:flex-1 items-end gap-4">
              <div className="bg-white h-6 w-6"></div>
              <div className="bg-white h-6 w-6"></div>
              <div className="bg-white h-6 w-6"></div>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap gap-3 justify-between">
            <div className="flex flex-col md:flex-1 gap-2 text-sm">
              <p className="text-white">Product</p>
              <p className="text-gray-500">Documentation</p>
              <p className="text-gray-500">Pricing</p>
              <p className="text-gray-500">Enterprise</p>
            </div>
            <div className="flex flex-col md:flex-1 gap-2 text-sm">
              <p className="text-white">Company</p>
              <p className="text-gray-500">Customers</p>
              <p className="text-gray-500">Careers</p>
              <p className="text-gray-500">Blog</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
