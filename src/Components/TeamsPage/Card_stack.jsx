import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from "@/Components/TeamsPage/Card_stack.module.css"


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const CardStack = () => {
  useEffect(() => {
    // GSAP Timeline
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.cards}`,
        pin: true,
        pinSpacing: true,
        start: 'left-=120px left',
        end: '+=2000',
        scrub: 1,
      },
    });

    timeline.addLabel('card1');
    timeline.to(`.${styles.card1}`, { xPercent: 0, opacity: 1 });
    timeline.from(`.${styles.card2}`, { xPercent: 75, opacity: 0 });

    timeline.addLabel('card2');
    timeline.to(`.${styles.card1}`, { scale: 0.95, xPercent: -0.5, opacity: 0.5 }, '--0.3');
    timeline.to(`.${styles.card2}`, { xPercent: 0, opacity: 1 });

    timeline.from(`.${styles.card3}`, { xPercent: 75, opacity: 0 });

    timeline.addLabel('card3');
    timeline.to(`.${styles.card2}`, { scale: 0.98, xPercent: -0.4, opacity: 0.6 }, '-=0.3');
    timeline.to(`.${styles.card3}`, { xPercent: 0, opacity: 1 });
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <div className={styles.card}>
        <div className={`${styles.card} ${styles.card1}`}><h2>01</h2></div>
        <div className={`${styles.card} ${styles.card2}`}><h2>02</h2></div>
        <div className={`${styles.card} ${styles.card3}`}><h2>03</h2></div>
        {/* <div className={`${styles.card} ${styles.card4}`}></div> */}
      </div>
    </div>
  );
};

export default CardStack;
