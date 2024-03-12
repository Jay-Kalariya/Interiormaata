"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import img1 from "@/svgs/Team_image1.svg";
import img4 from "@/svgs/Team_image3.svg";
import img2 from "@/svgs/Team_image4.svg";
import img5 from "@/svgs/Team_image5.svg";
import img3 from "@/svgs/Team_image2.svg";
import img7 from "@/images/Team_image7.png";
import Marquee from "react-marquee-slider";
import styles from "@/Components/TeamsPage/teamsPage.module.css";
import "./imx.css";

const TeamPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });


  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });


  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const photos = [img1, img2, img3, img4, img5];
  return (
    <>
      <div className={styles.TeamPage_Section}>
        <div className={styles.Header}>
          <div className={styles.teamPage_content1}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.9 }}
            >
              <HeadingTextAnimation
                heading={"Meet the Minds "}
                justifyContent={"center"}
              />
              <HeadingTextAnimation
                heading={"Behind the Magic"}
                justifyContent={"center"}
              />
            </motion.div>
          </div>
          <div className={styles.teamPage_content2}>
            Our Team, Your Success.
          </div>
        </div>
        <div className={styles.marquee_section}>
          <Marquee>
            {photos.map((photo, index) => (
              <div
                key={`marquee-image-${index}`}
                className={styles.marquee_imageSection}
              >
                <Image src={photo} alt={`image`} />
              </div>
            ))}
          </Marquee>
        </div>
        <div className={styles.teamPage_content3}>
          <div className={styles.teamPage_content3_Text}>
          <motion.div
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              transition={{ duration: 0.9 }}
            >
              <HeadingTextAnimation
                heading={"United by Passion, Driven by"}
                justifyContent={"center"}
              />
              <HeadingTextAnimation
                heading={"Excellence: Get To Know The Faces"}
                justifyContent={"center"}
              />
               <HeadingTextAnimation
                heading={"Behind Our Success."}
                justifyContent={"center"}
              />
            </motion.div>

          </div>
        </div>
        <div className={styles.teamPage_content4}>
          <div className={styles.teamPage_content4_Text}>
            <div>
              <p>
                And When It Stops, It’s Not Over - It’s In You Now, In Your
                Head, Your Heart, And Spirit.
              </p>
              <p>
                You Have To Tell Someone, Right Now, ‘you Must See This’. You
                Share It, And They Get It. They’re In It With You, And It’s In
                Them Too.
              </p>
              <p>You Shared The Wonder.</p>
              <p>You Know The Feeling?</p>
              <p>That’s What We’re After, Every Time We Make A Film.</p>
            </div>
          </div>
        </div>
        <div className={styles.card_stack_section}>
        </div>
        <div className={styles.teamPage_content3}>
          <div className={styles.teamPage_content3_Text}>
          <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              transition={{ duration: 0.9 }}
            >
              <HeadingTextAnimation
                heading={"WE BELIEVE WONDERFUL WORK COMES"}
                justifyContent={"center"}
              />
              <HeadingTextAnimation
                heading={"FROM CREATIVE GENEROSITY."}
                justifyContent={"center"}
              />
            </motion.div>

          </div>
        </div>
        <div className={styles.teamPage_content4}>
          <div className={styles.teamPage_content4_Text}>
            <div>
              <p>
                Step into the world of interiormaata, where design meets
                imagination. Our dedicated team of architects and designers is
                driven by a shared commitment to elevate your spaces to new
                heights of sophistication. With a blend of creativity and
                technical expertise, we turn dreams into reality.{" "}
              </p>
              <p>
                Each team member brings a unique perspective, contributing to a
                harmonious fusion of style and functionality. We believe in
                collaborative synergy, ensuring that every project reflects our
                client's vision. Meet the passionate individuals who breathe
                life into spaces, as interiormaata continues to redefine the art
                of interior design with innovation, precision, and a touch of
                elegance.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.image_content5}>
          <Image src={img7} alt={"img"} />
        </div>
      </div>
    </>
  );
};
export default TeamPage;
