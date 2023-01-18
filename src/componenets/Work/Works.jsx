import React, { useContext } from "react";
import CourseSwiper from "../Swiper/CourseSwiper";
import WorkItem from "../Work/WorkItem";
import { SwitchThemeContext } from "./../../Context/SwitchThemeStore";
import { myProfile } from './../../data';

const Works = () => {
  let { switchTheme } = useContext(SwitchThemeContext);

  return (
    <div
      id="works"
      className={
        switchTheme
          ? "max-w-1040px m-auto md:pl-20 p-4 py-16"
          : "max-w-1040px m-auto md:pl-20 p-4 py-16 bg-[#001b5e]"
      }
    >
      <h1
        className={
          switchTheme
            ? "text-4xl font-bold text-center text-[#001b5e]"
            : "text-4xl font-bold text-center text-stone-300"
        }
      >
        Works
      </h1>
      <div className="grid md:grid-cols-2 mt-3">
        {myProfile.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.endDate}
            title={item.title}
            duration={item.duration}
            startDate={item.startDate}
            endDate={item.endDate}
            company={item.company}
            details={item.details.split("?")}
          />
        ))}
      </div>

      <div className="h-[600px]  border-2 border-stone-200  w-full lg:w-1/2 m-auto mt-5">
        <CourseSwiper />
      </div>
    </div>
  );
};

export default Works;
