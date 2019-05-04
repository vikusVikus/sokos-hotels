import React, { useState } from "react";
import "../styles/Room.css";
import imageNotFound from "../images/image-note-found.jpg";

const Room = props => {
  const roomInformation = props.roomInformation(props.availableRoom.type);
  const imagesLength = roomInformation.imageURLs.length;
  const slideShowAvailable = imagesLength > 1;

  const [currentImage, setCurrentImage] = useState(
    imagesLength === 0 ? imageNotFound : roomInformation.imageURLs[0]
  );

  const onNextImage = currentImage => {
    let newIndex = roomInformation.imageURLs.indexOf(currentImage) + 1;
    newIndex === imagesLength
      ? setCurrentImage(roomInformation.imageURLs[0])
      : setCurrentImage(roomInformation.imageURLs[newIndex]);
  };

  const onPrevImage = currentImage => {
    let newIndex = roomInformation.imageURLs.indexOf(currentImage) - 1;
    newIndex === -1
      ? setCurrentImage(roomInformation.imageURLs[imagesLength - 1])
      : setCurrentImage(roomInformation.imageURLs[newIndex]);
  };

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
      <div className="room-slideshow-container">
        <div className="room-slides">
          <img className="room-image" alt="" src={currentImage} />
        </div>

        {slideShowAvailable && (
          <div>
            <button
              className="prev-room"
              onClick={() => onPrevImage(currentImage)}
            >
              &#10094;
            </button>
            <button
              className="next-room"
              onClick={() => onNextImage(currentImage)}
            >
              &#10095;
            </button>
          </div>
        )}
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
