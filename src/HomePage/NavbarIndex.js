import React from "react";
import { LogoScraptifyWhite, LogoSearch, LogoPlus } from "../Logo";
import { Link } from "react-router-dom";
const Navbar = ({ search }) => {
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
            id="searchInput"
          />
          <div
            className="logoSearch"
            onClick={() => {
              var searchIn = document.getElementById("searchInput").value;
              search(searchIn);
            }}
          >
            <LogoSearch />
          </div>
        </div>

        <div className="jualBtn">
          <LogoPlus />
          <p style={{ color: "white", marginRight: "9px", fontSize: "20px" }}>
            Jual
          </p>
        </div>
        <Link to="/login">
          <a href="" id="loginLink">
            Login
          </a>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
