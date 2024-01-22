"use client";
import "./slider.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sliderimg01 from "/assets/images/slider-img01.png";
import sliderimg02 from "/assets/images/slider-img02.png";

const item1 = (
  <div class="item">
    <div class="container">
      <div class="row">
        <div className="w-full">
          <div class="hb-slidercontent-area">
            
            <figure class="hb-sliderimg">

              {/* <Image src={sliderimg01} alt="image description" /> */}

              <figcaption class="hb-slidercontent">
                <h1>
                  <span>Rest &amp; Relax</span>Beauty &amp; Spa Salon
                </h1>
                <div class="hb-description">
                  <p>
                    Enjoy some much needed me-time during a three-hour spa
                    session.
                  </p>
                </div>
                <a href="booking.html" class="hb-btn">
                  request an appointment
                </a>
              </figcaption>
              
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const item2 = (
  <div class="item">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="hb-slidercontent-area">
            <figure class="hb-sliderimg">
              {/* <Image src={sliderimg02} alt="image description" /> */}
              <figcaption class="hb-slidercontent">
                <h1>
                  <span>Beauty &amp; Spa</span>Refresh &amp; Rejuventate
                </h1>
                <div class="hb-description">
                  <p>
                    Succeed in the beauty world with the acquired skills!
                    Progressive professional beauty courses!
                  </p>
                </div>
                <a href="service.html" class="hb-btn">
                  More infomation
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const slides = [item1, item2];

export default function SliderContent() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([item1, item2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlides((prevSlides) => {
        const lastSlide = prevSlides.pop();
        prevSlides.unshift(lastSlide);
        return [...prevSlides];
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        transform: "translate3d(-2172px, 0px, 0px)",
        transition: "all 0.25s ease 0s",
        width: "4344px",
      }}
      id="hb-homeslider"
      class="hb-homeslider hb-haslayout   bg-[#f5f5f9]"
    >
      {/* <div
      class="slider"
      style={{ transform: `translateX(-${slideIndex * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div key={index} class="slide">
          {slide}
        </div>
      ))}
    </div> */}

      {/* {item1} */}
      {/* {item2} */}

      <div class="item">
        <div class="container">
          <div class="row">


            <div className="w-full">
              <div class="hb-slidercontent-area">
                <figure class="hb-sliderimg">
                  <Image src={sliderimg01} alt="image description" />
                  <figcaption class="hb-slidercontent">
                    <h1>
                      <span>Rest &amp; Relax</span>Beauty &amp; Spa Salon
                    </h1>
                    <div class="hb-description">
                      <p>
                        Enjoy some much needed me-time during a three-hour spa
                        session.
                      </p>
                    </div>
                    <a href="booking.html" class="hb-btn">
                      request an appointment
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="item">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="hb-slidercontent-area">
                <figure class="hb-sliderimg">
                  <Image src={sliderimg02} alt="image description" />
                  <figcaption class="hb-slidercontent">
                    <h1>
                      <span>Beauty &amp; Spa</span>Refresh &amp; Rejuventate
                    </h1>
                    <div class="hb-description">
                      <p>
                        Succeed in the beauty world with the acquired skills!
                        Progressive professional beauty courses!
                      </p>
                    </div>
                    <a href="service.html" class="hb-btn">
                      More infomation
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
