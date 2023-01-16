import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./courseStyle.css";
import "../../data.js";

import { Autoplay, Pagination, Navigation } from "swiper";
import { courseCertifcate } from "../../data.js";

const CourseSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {courseCertifcate.map((course, idx) => (
          
            <SwiperSlide key={idx}>
              <img src={course.src} alt="" className="w-full  object-cover" />
            </SwiperSlide>
            
          
        ))}
      </Swiper>
    </>
  );
};

export default CourseSwiper;
