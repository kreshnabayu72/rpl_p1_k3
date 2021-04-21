import React from "react";

const ProfItems = () => {
  return (
    <>
      <p className="profilTitle">Postingan Yang Pernah Dibuat</p>
      <div className="profileItems">
        <div className="homeItem" key="1">
          <img src="" alt=":)" className="itemPic" />
          <div className="itemDesc">
            <p>NAMA</p>
            <h1>HARGA</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfItems;
