import React from "react";
import "../styles/Room.css";

const Room = () => {
  return (
    <div className="room-row">
      <div>
        <img
          className="room-image"
          src="https://thehappypuppysite.com/wp-content/uploads/2018/07/border-collie-names-SC-long.jpg"
        />
      </div>
      <div className="room-info">
        <div className="room-name">Standard single kahdelle</div>
        <div className="room-price"> alk. 180,00 &#8364;</div>
      </div>
    </div>
  );
};

export default Room;
