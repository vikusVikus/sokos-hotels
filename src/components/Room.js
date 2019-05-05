import React from "react";
import "../styles/Room.css";
import RoomImageSlideshow from "./RoomImageSlideshow.js";
import enFi from "../translations/en-fi.json";

const Room = props => {
  const roomInformation = props.roomInformation(props.availableRoom.type);
  const minPriceInEuroCents = rates => {
    let formatter = new Intl.NumberFormat("fi-FI", {
      style: "currency",
      currency: "EUR"
    });

    let minPrice = Math.min(rates.map(rate => rate.price)) / 100;

    return formatter.format(minPrice);
  };

  return (
    <div className="room-row">
      <RoomImageSlideshow images={roomInformation.imageURLs} />
      <div className="room-info">
        <div className="room-name">
          {enFi[roomInformation.title.toLowerCase()]}
        </div>
        <div className="room-price">
          {enFi["starting from"]}{" "}
          {minPriceInEuroCents(props.availableRoom.rates)}
        </div>
      </div>
    </div>
  );
};

export default Room;
