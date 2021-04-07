import { Link } from "react-router-dom";
const HomeItems = ({ data }) => {
  return (
    <div className="homeItems">
      {data.map((item) => {
        return (
          <Link to="/item" style={{ textDecoration: "none" }}>
            <div className="homeItem" key={item.id}>
              <img src={item.img} alt=":)" className="itemPic" />
              <div className="itemDesc">
                <p>{item.nama}</p>
                <h1>{item.harga}</h1>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomeItems;
