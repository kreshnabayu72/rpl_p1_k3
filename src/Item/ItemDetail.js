import { WhatsApp } from "../Logo";
const ItemDetail = () => {
  return (
    <>
      <div className="detailBox">
        <p className="detailTitle">Detail Barang</p>
        <div className="detailItem">
          <div className="part partPhoto">
            <div className="part1part">
              <img src="/img/imgDesc1.png" className="mainPic" alt="" />
              <div className="sidePics">
                <div className="sidePic">
                  <img src="/img/imgDesc2.png" alt="" />
                </div>
                <div className="sidePic">
                  <img src="/img/imgDesc3.png" alt="" />
                </div>
                <div className="sidePic">
                  <img src="/img/imgDesc4.png" alt="" />
                </div>
                <div className="sidePic">
                  <img src="/img/imgDesc5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="part partDesc">
            <div className="part2part itemName">
              <h1>NAMA ITEM</h1>
            </div>
            <div className="part2part itemDescr">
              <h4>Deskripsi</h4>
              <p>
                Kondisi : Bekas <br />
                Ukuran : 42/27cm <br />
                <br />
                Kontak : <br />
                Line = rjjulian24
                <br />
                ig = @ridwanjulian <br />
                wa = 083822646828
              </p>
            </div>
          </div>
          <div className="part partSeller">
            <h4>Profil Penjual</h4>
            <div className="profil">
              <div className="pp">
                <img src="brown.png" alt="" />
              </div>
              <div className="div">
                <p>Nama Penjual</p>
                <button className="iconWA">
                  <WhatsApp />
                  <p>Hubungi Penjual</p>
                </button>
              </div>
            </div>
          </div>
          <div className="part partPrice">
            <h4>Harga</h4>
            <p>Rp775.000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
