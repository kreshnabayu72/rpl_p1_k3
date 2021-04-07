import React from "react";
import { LogoScraptifyWhite, LogoSearch, LogoPlus } from "../Logo";
import Pic from "../Pics/smilsquare.jpg";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <LogoScraptifyWhite />
        <div className="searchBar">
          <input
            type="text"
            placeholder="Temukan Barang yang Ingin Kamu Cari...."
            className="searchInput"
          />
          <div className="logoSearch">
            <LogoSearch />
          </div>
        </div>

        <div className="jualBtn">
          <LogoPlus />
          <p style={{ color: "white", marginRight: "9px", fontSize: "20px" }}>
            Jual
          </p>
        </div>
        <img src={Pic} alt=":)" className="proPic" />
      </div>
    </>
  );
};

export default Navbar;
