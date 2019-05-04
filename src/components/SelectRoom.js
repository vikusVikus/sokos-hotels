import React from "react";

import RoomList from "./RoomList";
import "../styles/SelectRoom.css";

const SelectRoom = props => {
  const configurationValue = configuration => {
    let configurationValue = [];

    Object.keys(configuration).map(key =>
      configurationValue.push(key + " " + configuration[key])
    );

    return configurationValue.join(" + ");
  };

  return (
    <div>
      <div className="select-room">
        <div className="selection-info">
          <img src="https://img.icons8.com/ios/40/000000/bed.png" alt="" />
        </div>
        <div className="selection-info selection-type">
          Valitse huone {props.index}
        </div>
        <div className="selection-info">
          {configurationValue(props.availableRoomConfiguration.configuration)}
        </div>
      </div>
      <RoomList
        availableRooms={props.availableRoomConfiguration.availableRooms}
        roomsInformation={props.rooms}
      />
    </div>
  );
};

export default SelectRoom;
