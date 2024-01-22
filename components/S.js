"use client";

import "./slider.css";
import Link from "next/link";
// import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper/core';
// import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper/core';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import sliderimg01 from "/assets/images/slider-img01.png";
import sliderimg02 from "/assets/images/slider-img02.png";
import Image from "next/image";

const Carousel = () => {
  const slides = [sliderimg01, sliderimg02];

  //   SwiperCore.use([Autoplay, Pagination]);

  // const [curr, setCurr] = useState(0)

  // const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  // const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  // useEffect(() => {
  //     if (!autoSlide) return
  //     const slideInterval = setInterval(next, autoSlideInterval)
  //     return () => clearInterval(slideInterval)
  // }, [])

  // return (
  //   <div className="overflow-hidden w-full ">

  //     <div
  //       className="flex transition-transform ease-out duration-500"
  //       style={{ transform: `translateX(-${curr * 100}%)` }}
  //     >
  //       {/* {slides} */}

  //       <div className="flex w-full">
  //         <div className="flex flex-col justify-center text-left ">

  //           <span>Rest and relax</span>
  //           <h1 className="text-6xl bold">Beauty and Spa</h1>
  //           <p>Enjoy some much needed me-time during a three-hour spa session.</p>
  //         </div>

  //         <div>{slides[0]}</div>
  //       </div>
  //     </div>

  //     {/* <div className="absolute inset-0 flex items-center justify-between p-4">
  //             <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
  //                 <FaArrowLeft />
  //             </button>

  //             <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
  //                 <FaArrowRight />
  //             </button>
  //         </div>

  //         <div className='absolute bottom-4 right-0 left-0'>
  //             <div className='flex items-center justify-center gap-2'>
  //                 {slides.map((s, i) => (
  //                     <div key={i} className={`transition-all w-full bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
  //                 ))}
  //             </div>
  //         </div> */}
  //   </div>
  // );

  return (
    <div>
      <Swiper
        className="bg-[#f5f5f8]"
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        // modules={[Autoplay, Pagination]}

        spaceBetween={50}
        autoplay={{ delay: 4000 }}
        slidesPerView={1}
        // allowSlidePrev={false}
        loop={true}
      >
        <FaArrowLeft className="absolute top-1/2 left-10  bg-{#c1bfda]" />

        <SwiperSlide>
          <div className="mx-auto md:lg:px-10 ">
            <div className="grid md:grid-cols-2  ">
              <div className="flex flex-col justify-center items-center  md:lg:items-end  ">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  sm:md:lg:text-left sm:md:lg:md:block">
                  {/*              
              <span class="">Rest and relax</span>
              <h1 className="text-6xl bold mb-8">Beauty and Spa</h1>
              <p>
                Enjoy some much needed me-time during a three-hour spa session.
              </p> */}

                  <h1>
                    <span className="text-[#2d2c40] ">Rest &amp; Relax</span>
                    <h1 className="text-2xl sm:text-4xl md:text-7xl font-light mb-5  capitalize">
                      Beauty &amp; Spa Salon
                    </h1>
                  </h1>

                  <div class="text-sm sm:md:lg:text-[16px] text-[#7a7992]">
                    <p className="m-0">
                      Enjoy some much needed me-time during a three-hour spa
                      session.
                    </p>
                  </div>

                  <Link href="booking.html" class="hb-btn">
                    request an appointment
                  </Link>
                </div>
              </div>
              {/* 
              <figcaption class="absolute md:lg:flex-col justify-center items-end">
                <h1>
                  <span className="text-[#2d2c40] ">Rest &amp; Relax</span>
                  <h1 className="text-2xl sm:text-4xl md:text-7xl font-light mb-5  capitalize">Beauty &amp; Spa Salon</h1>
                </h1>
                <div class="text-sm sm:md:lg:text-[16px] text-[#7a7992]">
                  <p className="m-0"> 
                    Enjoy some much needed me-time during a three-hour spa
                    session.
                  </p>
                </div>
                <a href="booking.html" class="hb-btn">
                  request an appointment
                </a>
              </figcaption> */}

              <div className="">
                {/* <Image src={slides[0]} alt="" /> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-auto md:lg:px-10 ">
            <div className="grid md:grid-cols-2  ">
              <div className="flex flex-col justify-center items-center  md:lg:items-end  ">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  sm:md:lg:text-left sm:md:lg:md:block">
                  {/*              
              <span class="">Rest and relax</span>
              <h1 className="text-6xl bold mb-8">Beauty and Spa</h1>
              <p>
                Enjoy some much needed me-time during a three-hour spa session.
              </p> */}

                  <h1>
                    <span className="text-[#2d2c40] ">Rest &amp; Relax</span>
                    <h1 className="text-2xl sm:text-4xl md:text-7xl font-light mb-5  capitalize">
                      Beauty &amp; Spa Salon
                    </h1>
                  </h1>

                  <div class="text-sm sm:md:lg:text-[16px] text-[#7a7992]">
                    <p className="m-0">
                      Enjoy some much needed me-time during a three-hour spa
                      session.
                    </p>
                  </div>

                  <Link href="booking.html" class="hb-btn">
                    request an appointment
                  </Link>
                </div>
              </div>
              {/* 
              <figcaption class="absolute md:lg:flex-col justify-center items-end">
                <h1>
                  <span className="text-[#2d2c40] ">Rest &amp; Relax</span>
                  <h1 className="text-2xl sm:text-4xl md:text-7xl font-light mb-5  capitalize">Beauty &amp; Spa Salon</h1>
                </h1>
                <div class="text-sm sm:md:lg:text-[16px] text-[#7a7992]">
                  <p className="m-0"> 
                    Enjoy some much needed me-time during a three-hour spa
                    session.
                  </p>
                </div>
                <a href="booking.html" class="hb-btn">
                  request an appointment
                </a>
              </figcaption> */}

              <div className="">
                <Image src={slides[0]} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-auto md:lg:px-10 ">
            <div className="grid md:grid-cols-2  ">
              <div className="flex flex-col justify-center items-center  md:lg:items-end  ">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  sm:md:lg:text-left sm:md:lg:md:block">
                  {/*              
              <span class="">Rest and relax</span>
              <h1 className="text-6xl bold mb-8">Beauty and Spa</h1>
              <p>
                Enjoy some much needed me-time during a three-hour spa session.
              </p> */}

                  <h1>
                    <span className="text-[#2d2c40] ">Rest &amp; Relax</span>
                    <h1 className="text-2xl sm:text-4xl md:text-7xl font-light mb-5  capitalize">
                      Beauty &amp; Spa Salon
                    </h1>
                  </h1>

                  <div class="text-sm sm:md:lg:text-[16px] text-[#7a7992]">
                    <p className="m-0">
                      Enjoy some much needed me-time during a three-hour spa
                      session.
                    </p>
                  </div>

                  <Link href="booking.html" class="hb-btn">
                    request an appointment
                  </Link>
                </div>
              </div>
              {/* 
              <figcaption class="absolute md:lg:flex-col justify-center items-end">
                <h1>
                  <span className="text-[#2d2c40] ">Rest &amp; Relax</span>
                  <h1 className="text-2xl sm:text-4xl md:text-7xl font-light mb-5  capitalize">Beauty &amp; Spa Salon</h1>
                </h1>
                <div class="text-sm sm:md:lg:text-[16px] text-[#7a7992]">
                  <p className="m-0"> 
                    Enjoy some much needed me-time during a three-hour spa
                    session.
                  </p>
                </div>
                <a href="booking.html" class="hb-btn">
                  request an appointment
                </a>
              </figcaption> */}

              <div className="">
                <Image src={slides[0]} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <FaArrowRight className="absolute top-1/2 fill-white  rounded-full right-10  p-4 " />



      </Swiper>
    </div>
  );
};

export default Carousel;

// <SwiperSlide>
// <div className="grid md:grid-cols-2  ">
//   {/* <div className="flex flex-col justify-center items-center md:items-end "> */}
//     {/*
//   <div className="sm:text-center">

//     <span>Rest and relax</span>
//     <h1 className="text-6xl bold">Beauty and Spa</h1>
//     <p>
//       Enjoy some much needed me-time during a three-hour spa session.
//     </p>

//     </div> */}

// {/* <div class="hb-slidercontent-area"> */}
//       <figure class="hb-sliderimg">
//     <Image src={slides[1]} alt="" />
//     </figure>

//     <figcaption class="hb-slidercontent">
//       <h1>
//         <span>Beauty &amp; Spa</span>Refresh &amp; Rejuventate
//       </h1>
//       <div class="hb-description">
//         <p>
//           Succeed in the beauty world with the acquired skills!
//           Progressive professional beauty courses!
//         </p>
//       </div>
//       <a href="service.html" class="hb-btn">
//         More infomation
//       </a>
//     </figcaption>

//   {/* </div> */}

//   {/* <div className="">
//     <Image src={slides[1]} alt="" />
//   </div> */}

// </div>
// </SwiperSlide>
