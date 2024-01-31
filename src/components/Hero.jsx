import React from "react";
import conference from "../assets/conference.svg";
import exhibition from "../assets/exhibition.svg";
import live from "../assets/live.svg";
import meetup from "../assets/meetup.svg";
import wave6 from "../assets/wave6.svg";
import bg from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full hero-section z-0">
        <div className="absolute w-full bottom-0 left-0 right-0 z-0 wavy ">
          <img
            src={wave6}
            alt=""
            className="w-full object-cover mb-[-10px] z-0"
          />
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row  relative top-[10vw] sm:top-[5vw] md:top-[-5vw]">
        <div className="w-full flex flex-col justify-center items-center md:items-start md:justify-start  px-5 sm:px-24 gap-6">
          <h1 className="text-xl font-medium text-[#44375f] max-w-[350px]">
            Discover and Engage with Exciting Events in Your Area
          </h1>
          <button className="bg-[#dd8c12] font-medium py-3  w-[200px] text-white">
            Find your Next Event
          </button>
          <button className="w-[200px] font-medium text-[#3b1686] py-3 px-5 border-2 border-[#3b1686]">
            Host and Event
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 w-full py-10 sm:py-20">
          <div className="flex flex-col w-full items-center justify-center gap-6">
            <div className="w-full h-full max-w-[100px] max-h-[100px] rounded-[50%] border-2 border-[#3a0c96] p-5">
              <img
                src={conference}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg tracking-wide text-center ">Conference</h2>
          </div>
          <div className="flex flex-col w-full items-center justify-center gap-6">
            <div className="w-full h-full max-w-[100px] max-h-[100px] rounded-[50%] border-2 border-[#3a0c96] p-5">
              <img
                src={exhibition}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg tracking-wide text-center ">Exhibition</h2>
          </div>
          <div className="flex flex-col w-full items-center justify-center gap-6">
            <div className="w-full h-full max-w-[100px] max-h-[100px] rounded-[50%] border-2 border-[#3a0c96] p-5">
              <img src={live} alt="" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-lg tracking-wide text-center ">
              Live Performances
            </h2>
          </div>
          <div className="flex flex-col w-full items-center justify-center gap-6">
            <div className="w-full h-full max-w-[100px] max-h-[100px] rounded-[50%] border-2 border-[#3a0c96] p-5">
              <img src={meetup} alt="" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-lg tracking-wide text-center ">Meetup</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
