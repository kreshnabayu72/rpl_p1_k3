import data from "./dataKategori";

const HomeHeader = ({ filter }) => {
  return (
    <div className="homeHeader">
      <HeaderBanner />
      <HeaderCategories filter={filter} />
    </div>
  );
};

const HeaderBanner = () => {
  return (
    <div className="headerBanner">
      <div className="bannerText">
        <p>Beli, Jual, dan Temukan </p>
        <p className="btp2">Barang Bekas yang Kamu Cari</p>
      </div>
    </div>
  );
};
const HeaderCategories = ({ filter }) => {
  return (
    <div className="headerCat">
      <p className="catTitle">Kategori</p>
      <div className="catCategories">
        {data.map((cat) => {
          return (
            <div className="catCategory" onClick={() => filter(cat.nama)}>
              <div className="catPicDiv">{cat.img}</div>
              <p>{cat.nama}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeHeader;
