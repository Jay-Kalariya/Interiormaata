"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs"
import ConsultancyHeader from "@/Components/ConsultancyHeader/page";
import ConsultancyTextFlex from "@/Components/ConsultancyTextFlex/page";
import ConsultancyTab  from "@/Components/ConsultancyTab/page";
import AboutUs_Carousal from "@/Components/AboutUs_Carousal/page"
const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
    <Stairs>
      <ConsultancyHeader />
      <ConsultancyTextFlex /> 
      <ConsultancyTab/>
      <AboutUs_Carousal/>
    </Stairs>
    </div>
  );
};

export default Page;
