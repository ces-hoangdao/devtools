'use client';
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/lottie/coding.json';
const index = () => {
  return (
    <div className="flex py-8">
      <div className="flex flex-col basis-3/5">
        <div className="pt-16">
          <h1 className="text-[#2A2C31] text-4xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-center">
            Tools for developer,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 leading-4">
              All-in-one-place!
            </span>
          </h1>
          <div className="text-[#2A2C31] mt-10 text-xl font-[Poppins] font-light ">
            <div>
              Tired of juggling countless
              development tools and resources?
            </div>
            <br />
            <span className="text-transparent bg-clip-text font-semibold text-3xl bg-gradient-to-br from-cyan-500 to-blue-500 leading-4">
              Tools4dev
            </span>{' '}
            is a “free all-in-one toolbox”
            solution created to ease your life by
            preventing bookmark mess. Designed by
            developers, for developers.
          </div>
          <div className="text-[#2A2C31] mt-10 text-xl font-[Poppins] font-light">
            * Ok, maybe you need bookmark this
            website just in case ;)
          </div>
        </div>
      </div>
      <Lottie
        className="basis-2/5"
        animationData={animationData}
        loop={true}
      />
    </div>
  );
};

export default index;
