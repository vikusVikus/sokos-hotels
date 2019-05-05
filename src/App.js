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

  const sliderImages = [
    "https://testsipa.s-palvelut.fi/?checksum=68d46ef2cba82385af8e841fe83b0bd8&highDensity=true&maxWidth=1440&url=https%3A%2F%2Fqa.laari.sok.fi%2Fdocuments%2F419563%2F423076%2Fj%25C3%25A4%25C3%25A4kiekko_huone_original_sokoshotel_pasila.jpg%2F5eaca681-ccb8-4e69-9201-4ccb7ee59953%3Ft%3D1447831262000",
    "https://testsipa.s-palvelut.fi/?checksum=959095cd42e1e9b8b468eea2a3156ed1&highDensity=true&maxWidth=1440&url=https%3A%2F%2Fqa.laari.sok.fi%2Fdocuments%2F419563%2F423076%2Foutside_original_sokos_hotel_pasila_helsinki.jpg%2Fd952b111-e823-4e12-b7b6-2e8f70443101%3Ft%3D1381825715000",
    "https://testsipa.s-palvelut.fi/?checksum=4c2b44969128cadef9b6bff12bb7024a&highDensity=true&maxWidth=1440&url=https%3A%2F%2Fqa.laari.sok.fi%2Fdocuments%2F419563%2F0%2FGreenKey_Py%25C3%25B6r%25C3%25A4%2F4c490ac6-98a7-4ee2-bd1d-1c5bd97d3df6%3Ft%3D1533038289415"
  ];

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

          <div className="hotel-images-slideshow-container">
            <div className="hotel-image-slide">
              <img src={sliderImages[2]} />
            </div>
          </div>

          <div class="button-holder">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
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

          availableHotels.map(ah => console.log(ah));

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
