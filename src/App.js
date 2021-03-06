import React, { useState } from "react";
import "./styles/App.css";
import HotelsSlider from "./components/HotelsSlider";
import HotelImageSlideshow from "./components/HotelImageSlideshow";
import SelectionConfiguration from "./components/SelectionConfiguration";
import HotelDescription from "./components/HotelDescription";
import inputData from "./data/input-data.json";
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
          <HotelsSlider
            name={currentHotel.name}
            startDate={currentAvailableHotel.dateRange.startDate}
            endDate={currentAvailableHotel.dateRange.endDate}
            currentAvailableHotel={currentAvailableHotel}
            onClick={changeCurrentAvailableHotel}
          />
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
              <SelectionConfiguration
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
