import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1_src1 from "@/images/AboutUs1.png";
import slide1_src2 from "@/images/AboutUs2.png";
import slide1_src3 from "@/images/AboutUs3.png";
import slide1_src4 from "@/images/AboutUs4.png";
import slide1_src5 from "@/images/AboutUs5.png";
import slide1_src6 from "@/images/AboutUs6.png";
import slide1_src7 from "@/images/Ellipse 10.png";
import slide1_src8 from "@/images/Ellipse 11.png";
import slide1_src9 from "@/images/Ellipse 12.png";
import slide1_src10 from "@/images/Ellipse 13.png";
import slide1_src11 from "@/images/Ellipse 14.png";

import slide2_src1 from "@/images/aboutUsSlideimage1.png";
import slide2_src2 from "@/images/aboutUsSlideimage2.png";
import slide2_src3 from "@/images/aboutUsSlideimage3.png";
import slide2_src4 from "@/images/aboutUsSlideimage4.png";
import slide2_src5 from "@/images/aboutUsSlideimage5.png";
import slide2_src6 from "@/svgs/aboutUsSlideimage6.svg";
import slide2_src7 from "@/images/aboutUsSlideimage7.png";
import slide2_src8 from "@/images/aboutUsSlideimage8.png";
import slide2_src9 from "@/images/aboutUsSlideimage9.png";
import slide2_src10 from "@/images/aboutUsSlideimage10.png";
import slide2_src11 from "@/images/aboutUsSlideimage11.png";

import slide3_src1 from "@/images/aboutUsSlideThreeImage1.png";
import slide3_src2 from "@/images/aboutUsSlideThreeImage2.png";
import slide3_src3 from "@/images/aboutUsSlideThreeImage3.png";
import slide3_src4 from "@/images/aboutUsSlideThreeImage4.png";
import slide3_src5 from "@/images/aboutUsSlideThreeImage5.png";
import slide3_src6 from "@/images/aboutUsSlideThreeImage6.png";
import slide3_src7 from "@/images/aboutUsSlideThreeImage7.png";
import slide3_src8 from "@/images/aboutUsSlideThreeImage8.png";
import slide3_src9 from "@/images/aboutUsSlideThreeImage9.png";
import slide3_src10 from "@/images/aboutUsSlideThreeImage10.png";
import slide3_src11 from "@/images/aboutUsSlideThreeImage11.png";

import slide4_src1 from "@/images/aboutUsSlideFourImage1.png";
import slide4_src2 from "@/images/aboutUsSlideFourImage2.png";
import slide4_src3 from "@/images/aboutUsSlideFourImage3.png";
import slide4_src4 from "@/images/aboutUsSlideFourImage4.png";
import slide4_src5 from "@/images/aboutUsSlideFourImage5.png";
import slide4_src6 from "@/images/aboutUsSlideFourImage6.png";
import slide4_src7 from "@/images/aboutUsSlideFourImage7.png";
import slide4_src8 from "@/images/aboutUsSlideFourImage8.png";
import slide4_src9 from "@/images/aboutUsSlideFourImage9.png";
import slide4_src10 from "@/images/aboutUsSlideFourImage10.png";
import slide4_src11 from "@/images/aboutUsSlideFourImage11.png";

import slide5_src1 from "@/images/aboutUsSlideFiveImage1.png";
import slide5_src2 from "@/images/aboutUsSlideFiveImage2.png";
import slide5_src3 from "@/images/aboutUsSlideFiveImage3.png";
import slide5_src4 from "@/images/aboutUsSlideFiveImage4.png";
import slide5_src5 from "@/images/aboutUsSlideFiveImage5.png";
import slide5_src6 from "@/images/aboutUsSlideFiveImage6.png";
import slide5_src7 from "@/images/aboutUsSlideFiveImage7.png";
import slide5_src8 from "@/images/aboutUsSlideFiveImage8.png";
import slide5_src9 from "@/images/aboutUsSlideFiveImage9.png";
import slide5_src10 from "@/images/aboutUsSlideFiveImage10.png";
import slide5_src11 from "@/images/aboutUsSlideFiveImage11.png";


import PrevArrow from "@/Components/AboutUs_Carousel2/Arrows/PrevArrow";
import NextArrow from "@/Components/AboutUs_Carousel2/Arrows/NextArrow";
import "@/Components/AboutUs_Carousel2/Inbuilt.css";
import styles from "@/Components/AboutUs_Carousel2/AboutUS_Carousel2.module.css";

const Page = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: false,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
  });


  const [ref4, inView4] = useInView({
    triggerOnce: false,
  });


  const [ref5, inView5] = useInView({
    triggerOnce: false,
  });


  // Separate animation controls for each slider
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  const [currentSlide, setCurrentSlide] = useState(0);

  const imageAnimations = [
    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 1.5,
          delay: 1.3,
          x: { duration: 1.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          ease: "linear",
          duration: 1,
          delay: 0.8,
          x: { duration: 0.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: -100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.5,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 2,
          delay: 1.5,
          ease: "easeOut",
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.5,
          delay: 1.5,
          x: { duration: 2.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.2,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.2,
          delay: 1.4,
          x: { duration: 2.2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.4,
          delay: 1.6,
          x: { duration: 2.4 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.6,
          delay: 1.8,
          x: { duration: 2.6 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.8,
          delay: 2,
          x: { duration: 2.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },


// second slider animations




    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          ease: "linear",
          duration: 2,
          delay: 1,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 1.5,
          delay: 1.3,
          x: { duration: 1.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          ease: "linear",
          duration: 1,
          delay: 0.8,
          x: { duration: 0.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: -100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.5,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 2,
          delay: 1.5,
          ease: "easeOut",
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.5,
          delay: 1.5,
          x: { duration: 2.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.2,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.2,
          delay: 1.4,
          x: { duration: 2.2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.4,
          delay: 1.6,
          x: { duration: 2.4 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.6,
          delay: 1.8,
          x: { duration: 2.6 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.8,
          delay: 2,
          x: { duration: 2.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },



    // slider three animations

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 1.5,
          delay: 1.3,
          x: { duration: 1.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          ease: "linear",
          duration: 1,
          delay: 0.8,
          x: { duration: 0.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: -100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.5,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 2,
          delay: 1.5,
          ease: "easeOut",
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.5,
          delay: 1.5,
          x: { duration: 2.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.2,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.2,
          delay: 1.4,
          x: { duration: 2.2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.4,
          delay: 1.6,
          x: { duration: 2.4 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.6,
          delay: 1.8,
          x: { duration: 2.6 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.8,
          delay: 2,
          x: { duration: 2.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },


    // slider four animations


    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 1.5,
          delay: 1.3,
          x: { duration: 1.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          ease: "linear",
          duration: 1,
          delay: 0.8,
          x: { duration: 0.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: -100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.5,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 2,
          delay: 1.5,
          ease: "easeOut",
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.5,
          delay: 1.5,
          x: { duration: 2.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.2,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.2,
          delay: 1.4,
          x: { duration: 2.2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.4,
          delay: 1.6,
          x: { duration: 2.4 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.6,
          delay: 1.8,
          x: { duration: 2.6 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.8,
          delay: 2,
          x: { duration: 2.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },


    // slider animations five


    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 1.5,
          delay: 1.3,
          x: { duration: 1.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          ease: "linear",
          duration: 1,
          delay: 0.8,
          x: { duration: 0.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: -100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.5,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 2,
          delay: 1.5,
          ease: "easeOut",
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.5,
          delay: 1.5,
          x: { duration: 2.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.2,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.2,
          delay: 1.4,
          x: { duration: 2.2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.4,
          delay: 1.6,
          x: { duration: 2.4 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.6,
          delay: 1.8,
          x: { duration: 2.6 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.8,
          delay: 2,
          x: { duration: 2.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },


  ];

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    }
  }, [controls4, inView4]);

  useEffect(() => {
    if (inView5) {
      controls5.start("visible");
    }
  }, [controls5, inView5]);

  const totalImages = 5;

  const resetAnimations = () => {
    controls1.start("hidden").then(() => controls1.start("visible"));
    controls2.start("hidden").then(() => controls2.start("visible"));
    controls3.start("hidden").then(() => controls3.start("visible"));
    controls4.start("hidden").then(() => controls4.start("visible"));
    controls5.start("hidden").then(() => controls5.start("visible"));
  };

  var settings = {
    dots: false,
    speed: 5,
    centerMode: true,
    centerPadding: "0px",
    fade: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow onClick={resetAnimations} />,
    nextArrow: <NextArrow onClick={resetAnimations} />,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    afterChange: (currentIndex) => {
      resetAnimations();
    },
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          // arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 476,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={styles.main_carousel}>
      <div className={styles.wrapper}>
        <Slider {...settings}>
          <div className={styles.slide} ref={ref1}>
            <div className={styles.slideContent}>
              <motion.div
                className={styles.image1}
                variants={imageAnimations[0]}
                initial="hidden"
                animate={controls1}
              >
                <Image src={slide1_src1} alt="image" />
              </motion.div>
              <motion.div
                className={styles.image2}
                variants={imageAnimations[1]}
                initial="hidden"
                animate={controls1}
              >
                <Image src={slide1_src2} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image3}
                variants={imageAnimations[2]}
                initial="hidden"
                animate={controls1}
              >
                <Image src={slide1_src3} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image4}
                variants={imageAnimations[3]}
                initial="hidden"
                animate={controls1}
              >
                <Image src={slide1_src4} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image5}
                variants={imageAnimations[4]}
                initial="hidden"
                animate={controls1}
              >
                <Image src={slide1_src5} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image6}
                variants={imageAnimations[5]}
                initial="hidden"
                animate={controls1}
              >
                <Image src={slide1_src6} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image7}
                variants={imageAnimations[6]}
                initial="hidden"
                animate={controls1}
              >
                <Image src={slide1_src7} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image8}
                variants={imageAnimations[7]}
                initial="hidden"
                animate={controls1}
              >
                <Image src={slide1_src8} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image9}
                variants={imageAnimations[8]}
                initial="hidden"
                animate={controls1}
              >
                <Image src={slide1_src9} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image10}
                variants={imageAnimations[9]}
                initial="hidden"
                animate={controls1}
              >
                <Image src={slide1_src10} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image11}
                variants={imageAnimations[10]}
                initial="hidden"
                animate={controls1}
              >
                <Image src={slide1_src11} alt="image" />
              </motion.div>
            </div>
          </div>

          {/* slide 2 */}

          <div className={styles.slid2} ref={ref2}>
            <div className={styles.slideContent}>
              <motion.div
                className={styles.image12}
                variants={imageAnimations[11]}
                initial="hidden"
                animate={controls2}
              >
                <Image src={slide2_src1} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image13}
                variants={imageAnimations[12]}
                initial="hidden"
                animate={controls2}
              >
                <Image src={slide2_src2} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image14}
                variants={imageAnimations[13]}
                initial="hidden"
                animate={controls2}
              >
                <Image src={slide2_src3} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image15}
                variants={imageAnimations[14]}
                initial="hidden"
                animate={controls2}
              >
                <Image src={slide2_src4} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image16}
                variants={imageAnimations[15]}
                initial="hidden"
                animate={controls2}
              >
                <Image src={slide2_src5} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image17}
                variants={imageAnimations[16]}
                initial="hidden"
                animate={controls2}
              >
                <Image src={slide2_src6} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image18}
                variants={imageAnimations[17]}
                initial="hidden"
                animate={controls2}
              >
                <Image src={slide2_src7} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image19}
                variants={imageAnimations[18]}
                initial="hidden"
                animate={controls2}
              >
                <Image src={slide2_src8} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image20}
                variants={imageAnimations[19]}
                initial="hidden"
                animate={controls2}
              >
                <Image src={slide2_src9} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image21}
                variants={imageAnimations[20]}
                initial="hidden"
                animate={controls2}
              >
                <Image src={slide2_src10} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image22}
                variants={imageAnimations[21]}
                initial="hidden"
                animate={controls2}
              >
                <Image src={slide2_src11} alt="image" />
              </motion.div>
            </div>
          </div>

          {/* slide 3 */}

          <div className={styles.slid2} ref={ref3}>
            <div className={styles.slideContent}>
              <motion.div
                className={styles.image23}
                variants={imageAnimations[22]}
                initial="hidden"
                animate={controls3}
              >
                <Image src={slide3_src1} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image24}
                variants={imageAnimations[23]}
                initial="hidden"
                animate={controls3}
              >
                <Image src={slide3_src2} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image25}
                variants={imageAnimations[24]}
                initial="hidden"
                animate={controls3}
              >
                <Image src={slide3_src3} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image26}
                variants={imageAnimations[25]}
                initial="hidden"
                animate={controls3}
              >
                <Image src={slide3_src4} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image27}
                variants={imageAnimations[26]}
                initial="hidden"
                animate={controls3}
              >
                <Image src={slide3_src5} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image28}
                variants={imageAnimations[27]}
                initial="hidden"
                animate={controls3}
              >
                <Image src={slide3_src6} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image29}
                variants={imageAnimations[28]}
                initial="hidden"
                animate={controls3}
              >
                <Image src={slide3_src7} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image30}
                variants={imageAnimations[29]}
                initial="hidden"
                animate={controls3}
              >
                <Image src={slide3_src8} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image31}
                variants={imageAnimations[30]}
                initial="hidden"
                animate={controls3}
              >
                <Image src={slide3_src9} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image32}
                variants={imageAnimations[31]}
                initial="hidden"
                animate={controls3}
              >
                <Image src={slide3_src10} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image33}
                variants={imageAnimations[32]}
                initial="hidden"
                animate={controls3}
              >
                <Image src={slide3_src11} alt="image" />
              </motion.div>

            </div>
          </div>

            {/* slide 4 */}

            <div className={styles.slid2} ref={ref4}>
            <div className={styles.slideContent}>
              <motion.div
                className={styles.image34}
                variants={imageAnimations[33]}
                initial="hidden"
                animate={controls4}
              >
                <Image src={slide4_src1} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image35}
                variants={imageAnimations[34]}
                initial="hidden"
                animate={controls4}
              >
                <Image src={slide4_src2} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image36}
                variants={imageAnimations[35]}
                initial="hidden"
                animate={controls4}
              >
                <Image src={slide4_src3} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image37}
                variants={imageAnimations[36]}
                initial="hidden"
                animate={controls4}
              >
                <Image src={slide4_src4} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image38}
                variants={imageAnimations[37]}
                initial="hidden"
                animate={controls4}
              >
                <Image src={slide4_src5} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image39}
                variants={imageAnimations[38]}
                initial="hidden"
                animate={controls4}
              >
                <Image src={slide4_src6} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image40}
                variants={imageAnimations[39]}
                initial="hidden"
                animate={controls4}
              >
                <Image src={slide4_src7} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image41}
                variants={imageAnimations[40]}
                initial="hidden"
                animate={controls4}
              >
                <Image src={slide4_src8} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image42}
                variants={imageAnimations[41]}
                initial="hidden"
                animate={controls4}
              >
                <Image src={slide4_src9} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image43}
                variants={imageAnimations[42]}
                initial="hidden"
                animate={controls4}
              >
                <Image src={slide4_src10} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image44}
                variants={imageAnimations[43]}
                initial="hidden"
                animate={controls4}
              >
                <Image src={slide4_src11} alt="image" />
              </motion.div>

            </div>
          </div>


           {/* slide 5 */}


           <div className={styles.slid2} ref={ref5}>
            <div className={styles.slideContent}>
              <motion.div
                className={styles.image45}
                variants={imageAnimations[44]}
                initial="hidden"
                animate={controls5}
              >
                <Image src={slide5_src1} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image46}
                variants={imageAnimations[45]}
                initial="hidden"
                animate={controls5}
              >
                <Image src={slide5_src2} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image47}
                variants={imageAnimations[46]}
                initial="hidden"
                animate={controls5}
              >
                <Image src={slide5_src3} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image48}
                variants={imageAnimations[47]}
                initial="hidden"
                animate={controls5}
              >
                <Image src={slide5_src4} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image49}
                variants={imageAnimations[48]}
                initial="hidden"
                animate={controls5}
              >
                <Image src={slide5_src5} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image50}
                variants={imageAnimations[49]}
                initial="hidden"
                animate={controls5}
              >
                <Image src={slide5_src6} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image51}
                variants={imageAnimations[50]}
                initial="hidden"
                animate={controls5}
              >
                <Image src={slide5_src7} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image52}
                variants={imageAnimations[51]}
                initial="hidden"
                animate={controls5}
              >
                <Image src={slide5_src8} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image53}
                variants={imageAnimations[41]}
                initial="hidden"
                animate={controls5}
              >
                <Image src={slide5_src9} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image54}
                variants={imageAnimations[52]}
                initial="hidden"
                animate={controls5}
              >
                <Image src={slide5_src10} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image55}
                variants={imageAnimations[53]}
                initial="hidden"
                animate={controls5}
              >
                <Image src={slide5_src11} alt="image" />
              </motion.div>

            </div>
          </div>



        </Slider>
      </div>

      <div className={styles.imageNumbering}>
        <div className={styles.number}>
          <span>0{currentSlide + 1}</span>/0{totalImages}
        </div>
      </div>
    </div>
  );
};

export default Page;
