import axios from "axios";
import { googleApiKey } from "../constants/ApiKey";

const getAddress = async (lat, lng) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleApiKey}`
  );
  const data = await response.data;
  if (data.results.length > 0) {
    const formattedAddress = await data.results[0].formatted_address;
    return formattedAddress;
  } else {
    return "---";
  }
};

export default getAddress;
