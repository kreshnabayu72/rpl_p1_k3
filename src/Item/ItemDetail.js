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
                <p>NAMA PENJUAL</p>
                <div className="iconWA">
                  <WhatsApp />
                  <p>Hubungi Penjual</p>
                </div>
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

const WhatsApp = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.403 2.63303C14.5714 1.79591 13.5819 1.13214 12.4919 0.680178C11.4019 0.22821 10.233 -0.00297023 9.053 2.88091e-05C4.105 2.88091e-05 0.077 4.02703 0.075 8.97703C0.075 10.559 0.488 12.103 1.273 13.465L0 18.116L4.759 16.867C6.07539 17.5836 7.5502 17.9594 9.049 17.96H9.053C14 17.96 18.028 13.933 18.03 8.98303C18.0334 7.80351 17.803 6.63502 17.3521 5.54509C16.9012 4.45516 16.2387 3.4654 15.403 2.63303ZM9.053 16.445H9.05C7.71352 16.4452 6.40163 16.0856 5.252 15.404L4.98 15.242L2.156 15.983L2.909 13.23L2.732 12.948C1.98479 11.7585 1.58923 10.3818 1.591 8.97703C1.593 4.86303 4.94 1.51603 9.056 1.51603C10.0363 1.51385 11.0072 1.70611 11.9127 2.08168C12.8181 2.45725 13.6401 3.00867 14.331 3.70403C15.0256 4.39607 15.5762 5.21892 15.9509 6.12503C16.3256 7.03113 16.517 8.00251 16.514 8.98303C16.512 13.097 13.165 16.445 9.053 16.445ZM13.146 10.856C12.921 10.743 11.819 10.201 11.613 10.126C11.408 10.051 11.259 10.014 11.109 10.238C10.959 10.462 10.529 10.967 10.398 11.117C10.267 11.267 10.136 11.285 9.912 11.173C9.688 11.061 8.965 10.824 8.108 10.06C7.441 9.46503 6.991 8.73103 6.86 8.50603C6.729 8.28103 6.846 8.16003 6.959 8.04803C7.06 7.94803 7.183 7.78603 7.295 7.65503C7.407 7.52403 7.444 7.43103 7.519 7.28103C7.594 7.13103 7.557 7.00003 7.5 6.88803C7.444 6.77503 6.995 5.67103 6.808 5.22203C6.627 4.78703 6.442 4.84503 6.304 4.83903C6.16108 4.83318 6.01804 4.83052 5.875 4.83103C5.76126 4.83393 5.64934 4.86029 5.54626 4.90848C5.44318 4.95666 5.35117 5.02562 5.276 5.11103C5.07 5.33603 4.491 5.87803 4.491 6.98203C4.491 8.08603 5.295 9.15303 5.407 9.30303C5.519 9.45303 6.989 11.718 9.239 12.69C9.775 12.921 10.193 13.059 10.518 13.163C11.055 13.334 11.544 13.309 11.931 13.252C12.362 13.188 13.258 12.71 13.445 12.186C13.632 11.662 13.632 11.213 13.576 11.119C13.52 11.025 13.369 10.968 13.146 10.856Z"
        fill="white"
      />
    </svg>
  );
};

export default ItemDetail;
