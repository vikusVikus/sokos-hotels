import React from "react";
import "../styles/HotelsSlider.css";
import utils from "../utils";

const HotelsSlider = props => {
  return (
    <div>
      <div className="hotel-slide">
        <div>
          <button
            className="prev-hotel"
            onClick={() => props.onClick(props.currentAvailableHotel)}
          >
            &#10094;
          </button>
        </div>
        <div className="hotel-location">{utils.locationName(props.name)}</div>
        <div className="date-range">
          {utils.dates(props.startDate, props.endDate)}
        </div>
      </div>
    </div>
  );
};

export default HotelsSlider;
