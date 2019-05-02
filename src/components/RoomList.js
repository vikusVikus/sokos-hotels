import React from "react";
import Room from "./Room";
import "../styles/RoomList.css";

const RoomList = () => {
  return (
    <div className="room-list">
      <Room />
      <Room />
      <Room />
    </div>
  );
};

export default RoomList;
