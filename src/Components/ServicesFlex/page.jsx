
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Residential_Interior_Design from "@/images/Residential_Interior_Design.png";
import Commercial_Interior_Design from "@/images/Commercial_Interior_Design.png";
import Office_Interior_Design from "@/images/Office_Interior_Design.png";
import Services_interior_svg from "@/svgs/Services_svg.svg";
import styles from "@/Components/ServicesFlex/servicesFlex.module.css";

const Services_section = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: false, // Only trigger once
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
  }, [controls, inView1]);

  useEffect(() => {
    if (inView2) {
      controls.start("visible");
    }
  }, [controls, inView2]);


  useEffect(() => {
    if (inView3) {
      controls.start("visible");
    }
  }, [controls, inView3]);

  return (
    <>
      <motion.div
        className={styles.services_second_section_container}
      >
        <div className={styles.Services_second_Content}>
          <div className={styles.Services_second_Content_image}>
            <Image
              src={Residential_Interior_Design}
              className={styles.Residential_image}
            />
          </div>
          {/* content */}
          <div className={styles.Services_second_Content_inner}>
            <motion.div  ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              transition={{ duration: 0.1 , delay:0 }}
            >
              <HeadingTextAnimation
                heading={"Residential "}
                justifyContent={"left"}
                className={styles.Services_Content_residential}
              />
              <HeadingTextAnimation
                heading={"Interior Design"}
                justifyContent={"left"}
                className={styles.Services_Content_residential}
              />
            </motion.div>
            <div>
              <p className={styles.Services_Content_residential_desc}>
                Our residential interior design services are designed to create
                beautiful and functional homes that reflect your personal style
                and preferences.
              </p>
            </div>
            <div>
              <div className={styles.Services_Content_residential_list}>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Space planning
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Layout design
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Furniture and decor selection
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Lighting design
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Material selection
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Procurement
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Project management and execution
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* content ends */}
        </div>

        <motion.div className={styles.Services_second_Content} ref={ref2}>
          {/* content */}
          <div className={styles.Services_second_Content_inner}>
            <motion.div
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              transition={{ duration: 0.5 }}
            >
              <HeadingTextAnimation
                heading={"Commercial "}
                justifyContent={"left"}
                className={styles.Services_Content_residential}
              />
              <HeadingTextAnimation
                heading={"Interior Design"}
                justifyContent={"left"}
                className={styles.Services_Content_residential}
              />
            </motion.div>
            <div>
              <p className={styles.Services_Content_residential_desc}>
                Our commercial interior design services are designed to create
                inspiring and functional spaces that enhance productivity and
                creativity.
              </p>
            </div>
            <div>
              <div className={styles.Services_Content_residential_list}>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Space planning
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Layout design
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Furniture and decor selection
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Lighting design
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Material selection
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Procurement
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Project management and execution
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Services_second_Content_image}>
            <Image
              src={Commercial_Interior_Design}
              className={styles.Residential_image}
            />
          </div>
          {/* content ends */}
        </motion.div>

        <motion.div className={styles.Services_second_Content} ref={ref3}>
          <div className={styles.Services_second_Content_image}>
            <Image
              src={Office_Interior_Design}
              className={styles.Residential_image}
            />
          </div>
          {/* content */}
          <div className={styles.Services_second_Content_inner}>
            <motion.div
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              transition={{ duration: 0.5 }}
            >
              <HeadingTextAnimation
                heading={"Office "}
                justifyContent={"left"}
                className={styles.Services_Content_residential}
              />
              <HeadingTextAnimation
                heading={"Interior Design"}
                justifyContent={"left"}
                className={styles.Services_Content_residential}
              />
            </motion.div>
            <div>
              <p className={styles.Services_Content_residential_desc}>
                Our office interior design services are designed to create
                modern and functional workspaces that reflect your brand and
                values and enhance employee productivity and satisfaction.
              </p>
            </div>
            <div>
              <div className={styles.Services_Content_residential_list}>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Space planning
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Layout design
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Furniture and decor selection
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Lighting design
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Material selection
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Procurement
                  </p>
                </div>
                <div className={styles.Services_Content_list_inner}>
                  <Image src={Services_interior_svg} />
                  <p className={styles.Services_Content_residential_list_text}>
                    Project management and execution
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* content ends */}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services_section;
