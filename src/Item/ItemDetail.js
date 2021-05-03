import { WhatsApp } from "../Logo";
import { useParams } from "react-router-dom";
import data from "../HomePage/dataItem";
const ItemDetail = () => {
  const itemId = useParams().id;
  var item = data.filter((dat) => {
    return dat.id === parseInt(itemId);
  });

  return (
    <>
      <div className="detailBox">
        <h1 className="detailTitle">Detail Barang</h1>
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
              <h1>{item[0].nama}</h1>
            </div>
            <div className="part2part itemDescr">
              <div className="deskripsiDiv">
                <h4>Deskripsi</h4>
              </div>
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
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                  alt=""
                />
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
            <div className="deskripsiDiv2">
              <h4>Harga</h4>
            </div>

            <p>{item[0].harga}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
