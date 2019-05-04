import React from "react";
import "../styles/Room.css";

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
      <div>
        {/* TODO: add slider for image gallery */}
        <img className="room-image" alt="" src={roomInformation.imageURLs[0]} />
      </div>
      <div className="room-info">
        <div className="room-name">{roomInformation.title}</div>
        <div className="room-price">
          alk. {minPriceInEuroCents(props.availableRoom.rates)}
        </div>
      </div>
    </div>
  );
};

export default Room;
