import React, { useState } from "react";
import "./styles/App.css";
import SelectRoom from "./components/SelectRoom";
import inputData from "./data/input-data.json";
import imageNotFound from "./images/image-note-found.jpg";

const App = () => {
  // TODO: create iterator
  const { hotels, availableHotels } = inputData;
  const { hotelId } = availableHotels[0];
  const availableRoomConfigurations =
    availableHotels[0].availableRoomConfigurations;
  const sliderImages = hotels[0].imageURLs;

  const [currentImage, setCurrentImage] = useState(
    sliderImages.length === 0 ? imageNotFound : sliderImages[0]
  );

  const onImageChange = index => {
    setCurrentImage(sliderImages[index]);
  };

  return (
    <div className="app">
      <div className="inner-border">
        <div className="hotel-info">
          <div className="hotels-slider-container">
            <div className="hotel-slide">
              <div>
                <button className="prev-hotel">&#10094;</button>
              </div>
              <div className="hotel-disrict">Pasila</div>
              <div className="date-range">17.8-18.8</div>
            </div>
          </div>

          <div>
            <div className="hotel-images-slideshow-container">
              <div className="hotel-image-slide">
                <img alt="hotel" src={currentImage} />
              </div>
            </div>

            <div className="button-holder">
              {sliderImages.map((image, index) => (
                <span
                  className="dot"
                  key={image}
                  onClick={() => onImageChange(index)}
                />
              ))}
            </div>
          </div>

          <div className="hotel-name">Original Sokos hotel Pasila</div>
          <div className="hotel-address">
            Maistraatinportti 3, 00240 Helsinki
          </div>
          <div className="hotel-details">
            <button>Map</button>
            <button>Get to know the hotel</button>
          </div>
        </div>

        {availableRoomConfigurations.map(availableRoomConfiguration => {
          // TODO replace key with other value then index
          const index =
            availableRoomConfigurations.indexOf(availableRoomConfiguration) + 1;
          const rooms = hotels.filter(hotel => hotel.id === hotelId)[0].rooms;

          return (
            <SelectRoom
              key={index}
              availableRoomConfiguration={availableRoomConfiguration}
              rooms={rooms}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
