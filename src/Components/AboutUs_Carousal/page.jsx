"use client";
import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Navigation } from "swiper/modules";
import Image from "next/image";
import AboutUs_carousal_image from "@/images/AboutUs_carousal_image1.png";
import AboutUs_carousal_image2 from "@/images/AboutUs_carousal_image3.jpg";
// import sliderArrow from "@/Svgs/AboutUs_carousal_icon.svg"

import styles from "@/Components/AboutUs_Carousal/AboutUs_Carousal.module.css";
import "./AboutUsCarousal.css"
export default function App() {
    // const arrowRef1 = useRef(null);
    // const arrowRef2 = useRef(null);
  return (
    <>
      {/* effect={'fade'} */}
      <Swiper
      navigation={true}
        // navigation={true}
        modules={[Navigation, EffectFade]}
        // speed={2500}
        loop={true}
        effect="fade"
        speed={1500}
        fadeEffect={{
          crossFade: true,
        }}
        // navigation={{
        //       nextEl: ".sliderArrow_next",
        //       prevEl: ".sliderArrow_prev",
        //       disabledClass: "swiper-button-disabled",
        //     }}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <div className={styles.third_section_content}>
            <Image
              src={AboutUs_carousal_image}
              alt="carousal_image"
              className={styles.third_section_image}
            />
            <div className={styles.third_section_overlay}>
              <p className={styles.third_section_overlay_text}>
                "Designing spaces, sparking joy:  
                <span className={styles.third_section_overlay_span}>
                      where elegance meets functionality effortlessly."
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.third_section_content}>
            <Image
              src={AboutUs_carousal_image2}
              alt="carousal_image"
              className={styles.third_section_image}
            />
            <div className={styles.third_section_overlay}>
              <p className={styles.third_section_overlay_text}>
                "Designing spaces, sparking joy:
                <span className={styles.third_section_overlay_span}>
                  where elegance meets functionality effortlessly."
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.third_section_content}>
            <Image
              src={AboutUs_carousal_image}
              alt="carousal_image"
              className={styles.third_section_image}
            />
            <div className={styles.third_section_overlay}>
              <p className={styles.third_section_overlay_text}>
                "Designing spaces, sparking joy:
                <span className={styles.third_section_overlay_span}>
                  where elegance meets functionality effortlessly."
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.third_section_content}>
            <Image
              src={AboutUs_carousal_image2}
              alt="carousal_image"
              className={styles.third_section_image}
            />
            <div className={styles.third_section_overlay}>
              <p className={styles.third_section_overlay_text}>
                "Designing spaces, sparking joy:
                <span className={styles.third_section_overlay_span}>
                  where elegance meets functionality effortlessly."
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className={"sliderArrow"}>
            <div className={"sliderArrow_next"} ref={arrowRef1}>
            <Image
            src={sliderArrow}
            alt="arrow-btn"
            
          
          />
            </div>
            <div className={"sliderArrow_prev"} ref={arrowRef2}>
            <Image
            src={sliderArrow}
            alt="arrow-button"
            
           
          />
            </div>
          </div> */}
    </>
  );
}
