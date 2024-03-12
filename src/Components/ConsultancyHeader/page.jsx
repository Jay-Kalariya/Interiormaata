"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Online_Consultancy_banner from "@/images/consultancy_header.png";
import styles from "@/Components/ConsultancyHeader/consultancyHeader.module.css";
const Page = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <div className={styles.Online_consultancy_banner}>
        <div className={styles.Online_consultancy_img}>
          <Image
            src={Online_Consultancy_banner}
            alt="none"
            className={styles.Consultancy_Banner}
          />
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.9 }}
            className={styles.Online_Consultancy_Content}
          >
            <HeadingTextAnimation
              heading={"Transforming  "}
              justifyContent={"center"}
              className={styles.Consultancy_Banner_text}
            />
            <HeadingTextAnimation
              heading={"Spaces,"}
              justifyContent={"left"}
              className={styles.Consultancy_Banner_text}
            />

            <HeadingTextAnimation
              heading={"Inspiring Lives"}
              justifyContent={"center"}
              className={styles.Consultancy_Banner_text}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
