import React from "react";

const PageNums = () => {
  return (
    <div className="pageNavs">
      <div className="pageNums">
        <div className="pagenum numClicked">
          <p>1</p>
        </div>
        <div className="pagenum">
          <p>2</p>
        </div>
        <div className="pagenum">
          <p>3</p>
        </div>
        <div className="pagenum">
          <p>4</p>
        </div>
        <div className="pagenum">
          <p>5</p>
        </div>
        <div className="pagenum">
          <p>6</p>
        </div>
        <div className="pagenum">
          <p>....</p>
        </div>
      </div>
      <Next />
    </div>
  );
};

const Next = () => {
  return (
    <svg
      width="20"
      height="36"
      viewBox="0 0 14 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="nextBtn"
    >
      <path
        d="M1 1L13 12.5L1 24"
        stroke="#12465B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PageNums;
