import React from "react";

const ProfItems = () => {
  return (
    <>
      <h1 className="profilTitle">Postingan Yang Pernah Dibuat</h1>
      <div className="profileItems">
        <div className="homeItem" key="1">
          <img src="" alt=":)" className="itemPic" />
          <div className="itemDesc">
            <p>NAMA</p>
            <div className="itemHargaBtn">
              <h1>Rp780.000</h1>
              <div className="itemBtns">
                <button className="itemBtnEdit">Edit</button>
                <button className="itemBtnHapus">Hapus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfItems;
