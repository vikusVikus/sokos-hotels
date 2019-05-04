import React from "react";
import "./styles/App.css";
import SelectRoom from "./components/SelectRoom";
import inputData from "./data/input-data.json";

const App = () => {
  // TODO: create iterator
  const { hotels, availableHotels } = inputData;
  const { hotelId } = availableHotels[0];
  const availableRoomConfigurations =
    availableHotels[0].availableRoomConfigurations;

  return (
    <div className="app">
      <div className="inner-border">
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
