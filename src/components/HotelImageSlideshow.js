import React, { useState } from "react";
import "../styles/HotelImageSlideshow.css";
import imageNotFound from "../images/image-note-found.jpg";

const HotelImageSlideshow = props => {
  const [currentImage, setCurrentImage] = useState(
    props.images.length === 0 ? imageNotFound : props.images[0]
  );
  const onImageChange = index => {
    setCurrentImage(props.images[index]);
  };

  return (
    <div>
      <div className="hotel-images-slideshow-container">
        <div className="hotel-image-slide">
          <img alt="hotel" src={currentImage} />
        </div>
      </div>

      {/* TODO highlight dot */}
      <div className="button-holder">
        {props.images.map((image, index) => (
          <span
            className="dot"
            key={image}
            onClick={() => onImageChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelImageSlideshow;
