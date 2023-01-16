import React, { useContext } from "react";
import CourseSwiper from "../Swiper/CourseSwiper";
import WorkItem from "../Work/WorkItem";
import { SwitchThemeContext } from "./../../Context/SwitchThemeStore";
import { myProfile } from './../../data';

// const data = [
//   {
//     year: 2020,
//     title: " developer",
//     duration: " 3 years",
//     startDate: 2017,
//     endDate: 2020,
//     company: "cccccc",
//     details:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum ut harum ipsam laboriosam ab amet soluta nam dolore quos? ",
//   },
//   {
//     year: 2020,
//     title: "Front End developer",
//     duration: " 3 years",
//     startDate: 2017,
//     endDate: 2020,
//     company: "cccccc",
//     details:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum ut harum ipsam laboriosam ab amet soluta nam dolore quos? ",
//   },
//   {
//     year: 2017,
//     title: " Ui developer",
//     duration: " 2 years",
//     startDate: 2016,
//     endDate: 2017,
//     company: "cccccc",
//     details:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum ut harum ipsam laboriosam ab amet soluta nam dolore quos? ",
//   },
//   {
//     year: 2016,
//     title: "ux designer",
//     duration: " 1 years",
//     startDate: 2015,
//     endDate: 2016,
//     company: "cccccc",
//     details:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum ut harum ipsam laboriosam ab amet soluta nam dolore quos? ",
//   },
// ];



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

      <div className="group relative  h-[600px]  border-2 border-stone-200 w-1/2 m-auto mt-5 flex items-center  justify-center">
        <CourseSwiper />
        <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-stone-700/60 group-hover:h-full group-hover:opacity-100 duration-500 ease-in group-hover:z-50 overflow-hidden">
        
          <button
            class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
            href="#"
          >
            More Info.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Works;
