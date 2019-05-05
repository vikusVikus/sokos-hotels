import React, { useState } from "react";
import "../styles/HotelDescription.css";
import enFi from "../translations/en-fi.json";
import utils from "../utils";

const HotelDescription = props => {
  return (
    <div>
      <div className="hotel-name">{props.name}</div>
      <div className="hotel-address">{utils.address(props.address)}</div>
      <div className="hotel-details">
        <a
          href={utils.mapLink(props.address)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {enFi["map"]}
        </a>
        <a href={props.webURL} target="_blank" rel="noopener noreferrer">
          {enFi["get to know the hotel"]}
        </a>
      </div>
    </div>
  );
};

export default HotelDescription;
