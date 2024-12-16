"use client";
import { statsData } from "@/constants";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-2.5 md:gap-5">
      {statsData?.map((item, index) => (
        <div
          key={index}
          className="flex flex-1 gap-4 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start"
        >
          <CountUp
            end={item?.num}
            duration={5}
            delay={2}
            className="text-4xl lg:text-6xl font-extrabold text-white"
          />
          <p className="leading-snug text-sm">{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
