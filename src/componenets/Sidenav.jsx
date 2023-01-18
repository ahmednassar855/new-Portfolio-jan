import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { SwitchThemeContext } from './../Context/SwitchThemeStore';



const menuList = [
  { id: 1, title: "Home", icon: <AiOutlineHome size={20} />, link: "#main" },
  { id: 2, title: "Work", icon: <GrProjects size={20} />, link: "#works" },
  {
    id: 3,
    title: "Project",
    icon: <AiOutlineProject size={20} />,
    link: "#projects",
  },
  // { id: 4, title: "Resume", icon: <BsPerson size={20} />, link: "#resume" },
  {
    id: 4,
    title: "Contact",
    icon: <AiOutlineMail size={20} />,
    link: "#contact",
  },
];

const Sidenav = () => {
  let { switchTheme ,width  } = useContext(SwitchThemeContext)

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("nav change ok");
  };


  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className={switchTheme ? "fixed top-4 right-4 z-[99] md:hidden text-black cursor-pointer" : "fixed top-4 right-4 z-[99] md:hidden text-white cursor-pointer" }
        fontSize={40}
        
      />  
      {nav && width < 800 ? (
        <div className={switchTheme ? "fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 gap-y-6" :"fixed w-full h-screen bg-black/60 flex flex-col justify-center items-center z-20 gap-y-6"}>
          {menuList.map((li, idx) => (
            <a onClick={handleNav}
              href={li.link}
              key={idx}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              {li.icon}
              <span className="p-4 ">{li.title}</span>
            </a>
          ))}
        </div>
      ) : (
        " "
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          {menuList.map((li, idx) => (
            <a
              
              key={idx}
              href={li.link}
              className={switchTheme ?"rounded-full shadow-lg bg-[#011139] shadow-[#011139] text-stone-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" : "rounded-full shadow-lg bg-gray-100 shadow-gray-400  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"}
            >
              {li.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
