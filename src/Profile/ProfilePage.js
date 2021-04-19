import React from "react";
import "../css/home.css";
import Navbar from "../HomePage/Navbar";
import { LogoIPB2 } from "../Logo";
import { HiasanHome } from "../Hiasan";
import Acc from "./ProfileAccount";
import Items from "./ProfileItems";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <LogoIPB2 />
      <Acc />
      <Items />
      <HiasanHome />
      <div className="homeBottom"></div>
    </>
  );
};

export default HomePage;
