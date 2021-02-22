import React, { useState } from "react";
import HeroSection from "../components/hero";
import InfoSection from "../components/info";
import { firstInfo, secondInfo, thirdInfo } from "../components/info/data";
import NavBar from "../components/navbar";
import ServiceSection from "../components/service";
import SideBar from "../components/sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeroSection />
      <InfoSection {...firstInfo} />
      <ServiceSection />
      <InfoSection {...secondInfo} />
      <InfoSection {...thirdInfo} />
    </section>
  );
};

export default Home;
