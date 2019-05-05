const utils = {
  dates: (startDate, endDate) => {
    let formatedStartDate = new Date(startDate);
    let formatedEndDate = new Date(endDate);
    return (
      formatedStartDate.getDate() +
      "." +
      (formatedStartDate.getMonth() + 1) +
      "-" +
      formatedEndDate.getDate() +
      "." +
      (formatedEndDate.getMonth() + 1)
    );
  },
  locationName: fullName => {
    const locationIndex = fullName.toLowerCase().indexOf("sokos hotel") + 11;

    return fullName.substring(locationIndex);
  },
  currentHotel: (hotels, hotelId) => {
    return hotels.find(hotel => hotel.id === hotelId);
  },
  address: fullAddress => {
    return (
      fullAddress.street + ", " + fullAddress.postCode + " " + fullAddress.city
    );
  },
  mapLink: fullAddress => {
    return (
      "https://www.google.fi/maps/place/" + Object.values(fullAddress).join("+")
    );
  }
};

export default utils;
