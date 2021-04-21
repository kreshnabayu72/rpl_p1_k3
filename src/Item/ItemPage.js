import Navbar from "../HomePage/Navbar";
import { LogoIPB2, LogoBottom } from "../Logo";
import ItemDetail from "./ItemDetail";
import ItemComment from "./ItemComment";
import "../css/item.css";
import { HiasanItem } from "../Hiasan";
const ItemPage = () => {
  return (
    <>
      <Navbar />
      <ItemDetail />
      <ItemComment />
      <LogoIPB2 />
      <HiasanItem />
      <div className="itemBottom">
        <LogoBottom />
      </div>
    </>
  );
};

export default ItemPage;
