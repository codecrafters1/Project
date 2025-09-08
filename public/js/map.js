
    // // Initialize map
    // var map = L.map('map').setView([22.7196, 75.8577], 12); // (lat, lon, zoom)

    // // Use free OpenStreetMap tiles
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; OpenStreetMap contributors'
    // }).addTo(map);

    // // Add marker
    // L.marker([22.7196, 75.8577]).addTo(map)
    //   .bindPopup('Hello from Indore!')
    //   .openPopup();

    // map.js



// Get coordinates that backend injects into EJS
// Expecting backend to pass a `listing` object with geometry
const coords = listing.geometry.coordinates; // [lng, lat]
const title = listing.title || "Listing Location";

// Initialize map
var map = L.map('map').setView([coords[1], coords[0]], 8); // lat, lon

// Use free OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add marker
L.marker([coords[1], coords[0]]).addTo(map)
  .bindPopup(title)
  .openPopup();
