const ItemComment = () => {
  return (
    <>
      <div className="itemComment">
        <h1 className="itemTitle">Komentar</h1>
        <div className="comments">
          <div className="addComment">
            <div className="addCmtImg"></div>
            <input type="text" placeholder="Tambahkan Komentar Anda ..." />
          </div>
          <div className="comment">
            <div className="cmtImg"></div>
            <div className="cmtDesc">
              <h4>NAMA ORANGNYA</h4>
              <p>ISI KOMENNYA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemComment;
