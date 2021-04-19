import React from "react";
import { LogoScraptifyWhite, LogoSearch, LogoPlus } from "../Logo";
import Pic from "../Pics/smilsquare.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/home">
          <LogoScraptifyWhite />
        </Link>

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
        <Link to="/profile">
          <img src={Pic} alt=":)" className="proPic" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
