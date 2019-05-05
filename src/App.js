import React from "react";
import "./styles/App.css";
import HotelImageSlideshow from "./components/HotelImageSlideshow";
import SelectRoom from "./components/SelectRoom";
import inputData from "./data/input-data.json";

const App = () => {
  // TODO: create iterator
  const { hotels, availableHotels } = inputData;
  const { hotelId } = availableHotels[0];
  const availableRoomConfigurations =
    availableHotels[0].availableRoomConfigurations;
  const sliderImages = hotels[0].imageURLs;

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

          <HotelImageSlideshow images={sliderImages} />

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
