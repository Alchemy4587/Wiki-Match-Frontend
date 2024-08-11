import React from "react";

export function HeroSection() {
  return (
    <div className=" w-full flex flex-col gap-10 px-10 items-center">
      <div className="w-full flex flex-col gap-10 px-10 items-center pt-16">
        <div className="flex flex-col bg-primary-color w-[90%] items-center justify-center font-bold h-44 ">
          <span className="text-nowrap text- lg:text-2xl">Welcome to</span>
          <h1 className="text-2xl lg:text-6xl ">WikiMatch</h1>
        </div>
      </div>

      <div>{/* add the button */}</div>
    </div>
  );
}