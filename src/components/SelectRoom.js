import React from "react";
import "../styles/SelectRoom.css";

const SelectRoom = () => {
  return (
    <div className="select-room">
      <div className="selection-info">
        <img src="https://img.icons8.com/ios/40/000000/bed.png" />
      </div>
      <div className="selection-info selection-type">Valitse huone 1</div>
      <div className="selection-info">Adult 1</div>
    </div>
  );
};

export default SelectRoom;
