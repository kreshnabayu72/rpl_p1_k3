import React from "react";
import "../css/home.css";
import Navbar from "./Navbar";
import { LogoIPB2 } from "../Logo";
import Header from "./HomeHeader";
import Items from "./HomeItems";
import PageNums from "./ItemPageNums";
import data from "../HomePage/dataItem";
import { useState } from "react";

const HomePage = () => {
  document.body.style.overflow = "scroll";
  const [items, setItems] = useState(data);

  function filter(jenis) {
    const newItems = data.filter((dat) => {
      return dat.kategori === jenis;
    });
    setItems(newItems);
    console.log(jenis);
  }
  return (
    <>
      <Navbar />
      <LogoIPB2 />
      <Header filter={filter} />
      <Items data={items} />
      <PageNums />
      <div className="homeBottom"></div>
    </>
  );
};

export default HomePage;
