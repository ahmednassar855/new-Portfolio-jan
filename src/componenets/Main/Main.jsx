import React, { useContext }  from "react";
import {BiSun } from 'react-icons/bi';
import {BsSunFill , BsMoonStarsFill} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';

 
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { SwitchThemeContext } from './../../Context/SwitchThemeStore';

const Main = () => {

  let { switchTheme , changeTheme , width} = useContext(SwitchThemeContext)

  return (
    <div className="" id="main">
        <div className="  fixed top-3 left-3 z-30">
        {switchTheme ? < BsMoonStarsFill fontSize={40} className='cursor-pointer'  onClick={changeTheme}/> : <BiSun fontSize={40} className='cursor-pointer' color={'yellow'} onClick={changeTheme}/>}
        
      </div>
      
      <img
        src="assets/bg-image.jpg"
        alt=""
        className="w-full h-screen object-cover object-left scale-x-[-1]"
      />
      <div className={switchTheme ? "w-full h-screen absolute top-0 left-0 bg-white/50" :  "w-full h-screen absolute top-0 left-0 bg-black/80"  }>
      
        <div className={width <800 ? "hidden" :  " absolute right-10 top-10  flex flex-col items-center justify-center gap-2"}>
          <img src="../../../public/assets/myLogo.png " alt=""  width={150}  className={switchTheme ? "rounded-full border-4  border-[#011139]" : "rounded-full border-4  border-stone-400"}/>
          <div className="flex gap-3">
          <p className={switchTheme ? "text-[#011139] " : "text-stone-300"}>Mr.</p>
          <span className={switchTheme ? "text-[#011139] " : "text-stone-300"}>Ahmed Nassar</span>
          </div>
          
          <Link to={'/createProfile'}  className="flex align-middle items-center gap-3 rounded-2xl px-4 py-3 border-4 border-[#011139] bg-stone-400">
          <FaUser className={switchTheme ? "text-[#011139] font-bold text-3xl" : " text-white font-bold text-4xl"} />
          <p className={switchTheme ? "text-[#011139] font-bold " : " text-white font-bold "}>Log out</p>
          </Link>
         

        </div>
        <div className="max-w[700px] m-auto h-full  flex flex-col justify-center lg:items-center items-center">
          <h1 className={switchTheme ? "sm:text-5xl text-4xl font-bold text-gray-800" : "sm:text-5xl text-4xl font-bold text-stone-300"}>
            I'm Ahmed Nassar
          </h1>
          <h2 className={switchTheme ? "flex sm:text-3xl text-2xl pt-4" : "flex sm:text-3xl text-2xl pt-4 text-stone-300"}>
            I'am a
            <TypeAnimation
              sequence={[
                "Chemist", // Types 'One'
                1000, // Waits 1s
                "Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Coder", // Types 'Three' without deleting 'Two'
                2000, // Waits 2s
                "UI developer", // Types 'Three' without deleting 'Two'
                2000, // Waits 2s
                "React Developer", // Types 'Three' without deleting 'Two'
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2em",
                paddingLeft: "5px",
                fontWeight: "bolder",
              }}
              
            />
          </h2>
          <div className={switchTheme ? "flex justify-between pt-6 max-w-[200px] w-full text-gray-700" : "flex justify-between pt-6 max-w-[200px] w-full  text-stone-300"}>
            <FaTwitter className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
