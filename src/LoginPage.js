import React, { useState } from "react";
import Logo from "./Logo";
import LoginMenu from "./LoginMenu";
import IPB from "./Pics/IPB.png";

const LoginPage = () => {
  const [height, setHeight] = useState(0);
  window.onresize = () => {
    setHeight(window.innerHeight);
    console.log(height);
    console.log(window.innerWidth);
  };
  return (
    <div className="login">
      <Logo />
      <LoginMenu />
      <LogoIPB />
      <Hiasan />
    </div>
  );
};

const LogoIPB = () => {
  return <img src={IPB} className="logoIPB" alt="IPB" />;
};

const Hiasan = () => {
  return (
    <>
      <div className="buletM"></div>
      <div className="buletK"></div>
    </>
  );
};

export default LoginPage;
