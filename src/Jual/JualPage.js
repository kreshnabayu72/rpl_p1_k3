import Navbar from "../HomePage/Navbar";
import { LogoIPB2, LogoBottom } from "../Logo";
import { useEffect } from "react";

import "../css/jual.css";

const JualPage = () => {
  return (
    <>
      <Navbar />
      <LogoIPB2 />
      <JualMenu />
      <button className="posting">Posting</button>
      <div className="jualBottom">
        <LogoBottom />
      </div>
    </>
  );
};

const LogoUpload = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <path
          d="M33.5 33.5H20.5M33.5 20.5V33.5V20.5ZM33.5 33.5V46.5V33.5ZM33.5 33.5H46.5H33.5Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M33.5 66C51.4493 66 66 51.4493 66 33.5C66 15.5507 51.4493 1 33.5 1C15.5507 1 1 15.5507 1 33.5C1 51.4493 15.5507 66 33.5 66Z"
          stroke="black"
          stroke-width="2"
        />
      </g>
    </svg>
  );
};

const JualMenu = () => {
  return (
    <div className="jualMenu">
      <h1 id="jualMenuTitle">Tambahkan Barang Yang Ingin Dijual</h1>
      <form className="jualBox">
        <div className="jualBoxLeft">
          <input type="file" id="files" style={{ display: "none" }} />
          <label for="files">
            <div className="inputImg">
              <LogoUpload />
              <p>Tambahkan gambar</p>
            </div>
          </label>
        </div>
        <div className="jualBoxRight">
          <div className="jualBoxKategori">
            <h1>Kategori</h1>
            <select id="cars" name="cars">
              <option value="" disabled selected>
                Pilih Kategori
              </option>
              <option value="Buku & Alat Tulis">Buku & Alat Tulis</option>
              <option value="Komputer & Aksesoris">Komputer & Aksesoris</option>
              <option value="Baju & Celana">Baju & Celana</option>
              <option value="Sepatu & Sendal">Sepatu & Sendal</option>
            </select>
          </div>
          <div className="jualBoxNama">
            <h1>Nama Barang</h1>
            <input type="text" />
          </div>
          <div className="jualBoxDesc">
            <h1>Deskripsi</h1>
            <textarea type="text" name="" id="" />
          </div>
          <div className="jualBoxHarga">
            <h1>Harga</h1>
            <input type="text" name="" id="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default JualPage;
