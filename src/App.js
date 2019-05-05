import React, { useState } from "react";
import "./styles/App.css";
import HotelImageSlideshow from "./components/HotelImageSlideshow";
import SelectRoom from "./components/SelectRoom";
import HotelDescription from "./components/HotelDescription";
import inputData from "./data/input-data.json";
import enFi from "./translations/en-fi.json";
import utils from "./utils";

const App = () => {
  const { hotels, availableHotels } = inputData;
  const [currentAvailableHotel, setCurrentAvailableHotel] = useState(
    availableHotels[0]
  );
  const [currentHotel, setCurrentHotel] = useState(
    utils.currentHotel(hotels, currentAvailableHotel.hotelId)
  );

  const changeCurrentAvailableHotel = hotel => {
    let newIndex = availableHotels.indexOf(hotel) - 1;
    let newCurrentAvailableHotel =
      newIndex === -1
        ? availableHotels[availableHotels.length - 1]
        : availableHotels[newIndex];

    setCurrentAvailableHotel(newCurrentAvailableHotel);
    setCurrentHotel(
      utils.currentHotel(hotels, newCurrentAvailableHotel.hotelId)
    );
  };

  const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <div className="app">
      <div className="inner-border">
        <div className="hotel-info">
          <div className="hotels-slider-container">
            <div className="hotel-slide">
              <div>
                <button
                  className="prev-hotel"
                  onClick={() =>
                    changeCurrentAvailableHotel(currentAvailableHotel)
                  }
                >
                  &#10094;
                </button>
              </div>
              <div className="hotel-location">
                {utils.locationName(currentHotel.name)}
              </div>
              <div className="date-range">
                {utils.dates(
                  currentAvailableHotel.dateRange.startDate,
                  currentAvailableHotel.dateRange.endDate
                )}
              </div>
            </div>
          </div>

          <HotelImageSlideshow images={currentHotel.imageURLs} />
          <HotelDescription
            name={currentHotel.name}
            address={currentHotel.address}
            webURL={currentHotel.webURL}
          />
        </div>

        {currentAvailableHotel.availableRoomConfigurations.map(
          (availableRoomConfiguration, index) => {
            return (
              <SelectRoom
                key={generateKey(
                  Object.keys(availableRoomConfiguration.configuration)
                )}
                availableRoomConfiguration={availableRoomConfiguration}
                rooms={currentHotel.rooms}
                index={index + 1}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default App;
