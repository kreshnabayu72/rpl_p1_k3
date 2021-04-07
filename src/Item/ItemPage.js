import Navbar from "../HomePage/Navbar";
import { LogoIPB2 } from "../Logo";
import ItemDetail from "./ItemDetail";
import ItemComment from "./ItemComment";
import "../css/item.css";
const ItemPage = () => {
  return (
    <>
      <Navbar />
      <ItemDetail />
      <ItemComment />
      <LogoIPB2 />
      <div className="itemBottom"></div>
    </>
  );
};

export default ItemPage;
