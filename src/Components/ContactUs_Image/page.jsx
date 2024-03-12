import React from "react";
import Image from "next/image";
import Contact_us_person_img from "@/images/contact_person.png";
import styles from "@/Components/ContactUs_Image/ContactUsImage.module.css";
const Page = () => (
  <>
    <div className={styles.Contact_Us_img_outer}>
      <Image src={Contact_us_person_img} />
      <div className={styles.Contact_us_person_text}>
        <p className={styles.Contact_us_person_details}>
          Consultancy@interiormaata.com
        </p>
        <p className={styles.Contact_us_person_details}>
          Ananya@interiormaata.com
        </p>
      </div>
    </div>
    <div className={styles.iframe_outer}>
      <iframe
      className={styles.iframe_inner}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5616609604035!2d73.16898167589716!3d22.29458844310124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5af3411c979%3A0xe3db75e21ae63261!2sInterior%20Maata%20Studio!5e0!3m2!1sen!2sin!4v1709015822224!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div> 
  </>
);

export default Page;
