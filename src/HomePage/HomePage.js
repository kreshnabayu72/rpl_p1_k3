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
  //Fungsi Halaman2 Item
  document.body.style.overflow = "scroll";
  const [items, setItems] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);

  const indexLastPost = currentPage * postPerPage;
  const indexFirstPost = indexLastPost - postPerPage;
  const currentItems = items.slice(indexFirstPost, indexLastPost);

  //fungsi kategori
  const [category, setCategory] = useState("");
  function filter(jenis) {
    const newItems = data.filter((dat) => {
      return dat.kategori === jenis;
    });
    setItems(newItems);
    setCategory(jenis);
  }
  function nofilter() {
    setItems(data);
    setCategory("");
  }
  //fungsi search
  const [cari, setCari] = useState("");
  function search(nama) {
    const newItems = data.filter((dat) => {
      return dat.nama.toUpperCase().includes(nama.toUpperCase());
    });
    setItems(newItems);
    setCari(nama);
  }

  return (
    <>
      <Navbar search={search} />
      <LogoIPB2 />
      <Header filter={filter} cari={cari} cat={category} nofilter={nofilter} />
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
