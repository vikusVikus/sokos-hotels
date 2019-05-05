import React, { useState } from "react";
import "../styles/RoomImageSlideshow.css";
import imageNotFound from "../images/image-note-found.jpg";

const RoomImageSlideshow = props => {
  const imagesLength = props.images.length;
  const slideShowAvailable = imagesLength > 1;

  const [currentImage, setCurrentImage] = useState(
    imagesLength === 0 ? imageNotFound : props.images[0]
  );

  const onNextImage = currentImage => {
    let newIndex = props.images.indexOf(currentImage) + 1;
    newIndex === imagesLength
      ? setCurrentImage(props.images[0])
      : setCurrentImage(props.images[newIndex]);
  };

  const onPrevImage = currentImage => {
    let newIndex = props.images.indexOf(currentImage) - 1;
    newIndex === -1
      ? setCurrentImage(props.images[imagesLength - 1])
      : setCurrentImage(props.images[newIndex]);
  };

  return (
    <div className="room-slideshow-container">
      <div className="room-slide">
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
  );
};

export default RoomImageSlideshow;
