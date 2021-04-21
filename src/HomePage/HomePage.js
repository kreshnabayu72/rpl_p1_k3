import React from "react";
import "../css/home.css";
import Navbar from "./Navbar";
import { LogoIPB2, LogoBottom } from "../Logo";
import Header from "./HomeHeader";
import Items from "./HomeItems";
import PageNums from "./ItemPageNums";
import data from "../HomePage/dataItem";
import { useState } from "react";
import { HiasanHome, HiasanHome2 } from "../Hiasan";

const HomePage = () => {
  document.body.style.overflow = "scroll";
  const [items, setItems] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);

  const indexLastPost = currentPage * postPerPage;
  const indexFirstPost = indexLastPost - postPerPage;
  const currentItems = items.slice(indexFirstPost, indexLastPost);

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
      <Items data={currentItems} />
      <PageNums setCurrentPage={setCurrentPage} />
      <HiasanHome2 />
      <HiasanHome />
      <div className="homeBottom">
        <LogoBottom />
      </div>
    </>
  );
};

export default HomePage;
