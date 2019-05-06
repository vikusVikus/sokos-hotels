import React from "react";
import "../styles/HotelImageSlideshow.css";

const HotelImageSlideshow = props => {
  return (
    <div>
      <div className="hotel-images-slideshow-container">
        <div className="hotel-image-slide">
          <img alt="hotel" src={props.currentImage} />
        </div>
      </div>

      <div className="button-holder">
        {props.images.map((image, index) => (
          <span
            className="dot"
            key={image}
            style={{
              backgroundColor:
                image === props.currentImage
                  ? "rgba(0, 0, 0, 0.5)"
                  : "rgba(255, 255, 255, 0.5)"
            }}
            onClick={() => props.onClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelImageSlideshow;
