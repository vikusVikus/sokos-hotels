import React from "react";
import Room from "./Room";
import "../styles/RoomList.css";

const RoomList = props => {
  const roomInformation = roomType =>
    props.roomsInformation.find(room => room.type === roomType);

  return (
    <div className="room-list">
      {props.availableRooms.map(availableRoom => {
        return (
          <Room
            key={availableRoom.type}
            availableRoom={availableRoom}
            roomInformation={roomInformation}
          />
        );
      })}
    </div>
  );
};

export default RoomList;
