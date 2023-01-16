import React, { useContext } from "react";
import { SwitchThemeContext } from './../../Context/SwitchThemeStore';

const WorkItem = ({
  year,
  title,
  duration,
  startDate,
  endDate,
  company,
  details,
}) => {

  let { switchTheme  } = useContext(SwitchThemeContext);

  
  return (
 
      <ol className={switchTheme ? "flex flex-col md:flex-row relative border-l border-[#011139]" : "flex flex-col md:flex-row relative border-l border-stone-200"}>
        <li className="mb-10 ml-4 ">
          <div className={switchTheme ? "aboslute m-2 w-3 h-3 bg-[#011139] rounded-full mt-1.5 -left-1.5 border-[#011139]" : "aboslute m-2 w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"}></div>
          <p className="flex flex-wrap gap-4 flex-row  items-center justify-start text-xs md:text-sm">
            <span className={switchTheme ? "inline-block px-2 py-1 font-semibold text-white bg-[#011139] rounded-md" : "inline-block px-2 py-1 font-semibold text-[#011139] bg-stone-500 rounded-md"}>
              {year}
            </span>
           
            <span className={switchTheme ? "text-lg font-semibold text-[#001b5e]" : "text-lg font-semibold text-stone-200"}>
              {title}
            </span>
            <span className={switchTheme ? "my-1 text-sm font-normal leading-none text-stone-800" : "my-1 text-sm font-normal leading-none text-stone-100"}>
              {duration + " Year"}
            </span>
          </p>
          <span className={switchTheme ? " my-3 inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md" : "inline-block px-2 py-1 font-semibold text-[#001b5e] bg-stone-200 rounded-md"}>
              {company}
            </span>
          <p className={switchTheme ? "flex gap-8 justify-start text-center" : "flex gap-8 justify-start text-center text-stone-300"}>
            
            <span>{startDate}</span>
            <span>{endDate}</span>
          </p>

          <p className={switchTheme ? "my-2 text-base font-normal text-stone-500" : "my-2 text-base font-normal text-stone-100"}>
            {details}
          </p>
        </li>
      </ol>
   
  );
};

export default WorkItem;
