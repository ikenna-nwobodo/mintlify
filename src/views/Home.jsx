import React from "react";

import Hero from "../sections/Hero";
import Herotabs from "../sections/Herotabs";
import Logos from "../sections/Logos";

function Home() {
  return (
    <div className="text-center py-10 flex-col gap-10 flex justify-center items-center">
      <Hero />
      <div className="home h-[30rem] w-10/12 md:w-[50rem] absolute top-[40%]"></div>
      <Herotabs />
      <Logos />
    </div>
  );
}

export default Home;
