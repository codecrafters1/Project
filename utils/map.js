const axios = require("axios");

async function geocodeLocation(address) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

  const response = await axios.get(url, {
    headers: { "User-Agent": "AirbnbCloneApp/1.0" } // Nominatim requires UA
  });

  if (response.data.length === 0) {
    throw new Error("Location not found");
  }

  const place = response.data[0];
  const lat = parseFloat(place.lat);
  const lon = parseFloat(place.lon);

  return {
    type: "Point",
    coordinates: [lon, lat] // GeoJSON format
  };
}

module.exports = { geocodeLocation };
