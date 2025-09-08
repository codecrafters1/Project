const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Relax in a seaside cottage with stunning sunrise views.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "beach_cottage"
    },
    price: 3500,
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 15.2993]  // Goa
    }
  },
  {
    title: "Luxury Apartment with Eiffel Tower View",
    description: "Enjoy your stay in the heart of Paris with breathtaking views.",
    image: {
      url: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe",
      filename: "paris_apartment"
    },
    price: 12000,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]  // Paris
    }
  },
  {
    title: "Mountain View Cabin",
    description: "A cozy wooden cabin surrounded by snow-capped peaks.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "mountain_cabin"
    },
    price: 4500,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1887, 32.2396]  // Manali
    }
  },
  {
    title: "Desert Safari Camp",
    description: "Luxury tents in the Thar desert with cultural performances.",
    image: {
      url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      filename: "desert_camp"
    },
    price: 3000,
    location: "Jaisalmer",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [70.9167, 26.9167]  // Jaisalmer
    }
  },
  {
    title: "Modern Penthouse in Dubai Marina",
    description: "High-rise penthouse with skyline and marina views.",
    image: {
      url: "https://images.unsplash.com/photo-1590490359683-658d6f81a6c3",
      filename: "dubai_penthouse"
    },
    price: 25000,
    location: "Dubai",
    country: "UAE",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048]  // Dubai
    }
  },
  {
    title: "Traditional Japanese Ryokan",
    description: "Stay in a tatami-matted room with hot spring access.",
    image: {
      url: "https://images.unsplash.com/photo-1578898887932-ecf9d32188bc",
      filename: "japanese_ryokan"
    },
    price: 8000,
    location: "Kyoto",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116]  // Kyoto
    }
  },
  {
    title: "Houseboat on Dal Lake",
    description: "Experience the beauty of Srinagar with a stay on water.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "dal_lake_houseboat"
    },
    price: 4000,
    location: "Srinagar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.7973, 34.0837]  // Srinagar
    }
  },
  {
    title: "Rustic Farmhouse Stay",
    description: "Reconnect with nature on a countryside farm.",
    image: {
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      filename: "farmhouse"
    },
    price: 2500,
    location: "Punjab",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.3412, 30.9010]  // Punjab
    }
  },
  {
    title: "Iceland Glass Igloo",
    description: "Watch the Northern Lights from your glass dome.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "glass_igloo"
    },
    price: 15000,
    location: "Reykjavik",
    country: "Iceland",
    geometry: {
      type: "Point",
      coordinates: [-21.8174, 64.1355]  // Reykjavik
    }
  },
  {
    title: "Santorini Cliffside Villa",
    description: "Whitewashed villa with infinity pool overlooking the Aegean Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "santorini_villa"
    },
    price: 20000,
    location: "Santorini",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.4283, 36.3932]  // Santorini
    }
  }
];

module.exports = { data: sampleListings };



// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and cozy interiors.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552733407-5d5c46cbb3bb?ixlib=rb-4.0.3" },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description: "Stay in the heart of the city in this modern loft apartment. Perfect for couples or business travelers.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3" },
//     price: 2200,
//     location: "New York",
//     country: "United States",
//   },
//   {
//     title: "Rustic Cabin in the Woods",
//     description: "Reconnect with nature in this rustic cabin surrounded by pine trees. Great for hiking and relaxation.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3" },
//     price: 900,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa with Infinity Pool",
//     description: "Experience luxury living with an infinity pool overlooking the ocean. Perfect for family vacations.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3" },
//     price: 5000,
//     location: "Santorini",
//     country: "Greece",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and enjoy the sunsets.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3" },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Charming Paris Apartment",
//     description: "Live like a Parisian in this charming apartment with a view of the Eiffel Tower.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-4.0.3" },
//     price: 2400,
//     location: "Paris",
//     country: "France",
//   },
//   {
//     title: "Mountain View Cabin",
//     description: "Wake up to breathtaking mountain views in this wooden cabin. Ideal for couples and solo travelers.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-4.0.3" },
//     price: 1100,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Japanese Ryokan",
//     description: "Traditional Japanese inn with tatami rooms, futons, and hot spring baths.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1578898887932-ecf9d32188bc?ixlib=rb-4.0.3" },
//     price: 1600,
//     location: "Kyoto",
//     country: "Japan",
//   },
//   {
//     title: "Desert Dome House",
//     description: "Unique geodesic dome house located in the desert. Great for stargazing.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c7f?ixlib=rb-4.0.3" },
//     price: 950,
//     location: "Joshua Tree",
//     country: "United States",
//   },
//   {
//     title: "Countryside Farmhouse",
//     description: "Relax in a farmhouse surrounded by fields and fresh air. Perfect for families.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3" },
//     price: 1300,
//     location: "Tuscany",
//     country: "Italy",
//   },
//   {
//     title: "Ski Chalet Retreat",
//     description: "Enjoy a cozy winter getaway in this ski-in, ski-out chalet with a fireplace.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600607687651-2da949b9a65a?ixlib=rb-4.0.3" },
//     price: 2100,
//     location: "Zermatt",
//     country: "Switzerland",
//   },
//   {
//     title: "Overwater Bungalow",
//     description: "Stay above turquoise waters in this luxury overwater bungalow.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519821172141-b5d8f79b35c9?ixlib=rb-4.0.3" },
//     price: 4000,
//     location: "Bora Bora",
//     country: "French Polynesia",
//   },
//   {
//     title: "Historic Castle Stay",
//     description: "Live like royalty in this renovated medieval castle with modern amenities.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3" },
//     price: 3500,
//     location: "Edinburgh",
//     country: "Scotland",
//   },
//   {
//     title: "Safari Lodge",
//     description: "Experience wildlife up close in this safari lodge with guided tours.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3" },
//     price: 2700,
//     location: "Serengeti",
//     country: "Tanzania",
//   },
//   {
//     title: "Cliffside Treehouse",
//     description: "Unique treehouse built on a cliff overlooking the ocean.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3" },
//     price: 1200,
//     location: "Big Sur",
//     country: "United States",
//   },
//   {
//     title: "Icelandic Glass Igloo",
//     description: "Sleep under the northern lights in this glass igloo.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3" },
//     price: 3000,
//     location: "Reykjavik",
//     country: "Iceland",
//   },
//   {
//     title: "Houseboat on the Canal",
//     description: "Stay on a cozy houseboat with canal views and easy city access.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3" },
//     price: 1400,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Rainforest Eco Lodge",
//     description: "Eco-friendly lodge nestled in the rainforest with guided jungle treks.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3" },
//     price: 1600,
//     location: "Amazon",
//     country: "Brazil",
//   },
//   {
//     title: "Greek Island Cave House",
//     description: "Traditional cave house carved into volcanic rock with sea views.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-4.0.3" },
//     price: 2000,
//     location: "Santorini",
//     country: "Greece",
//   },
//   {
//     title: "Luxury Penthouse",
//     description: "Skyline views from a modern penthouse with rooftop pool.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1590490359683-658d6f81a6c3?ixlib=rb-4.0.3" },
//     price: 6000,
//     location: "Dubai",
//     country: "UAE",
//   },
//   {
//     title: "Desert Camp",
//     description: "Spend the night in a luxury tent under desert stars.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3" },
//     price: 1000,
//     location: "Sahara",
//     country: "Morocco",
//   },
//   {
//     title: "Lakefront Cabin",
//     description: "Rustic cabin with private lake access for swimming and fishing.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3" },
//     price: 1250,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Modern Desert Villa",
//     description: "Luxury villa with minimalist design in the desert.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154356-596af9009a3d?ixlib=rb-4.0.3" },
//     price: 2800,
//     location: "Palm Springs",
//     country: "United States",
//   },
//   {
//     title: "Cultural Riad",
//     description: "Traditional Moroccan riad with courtyard and colorful decor.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3" },
//     price: 1700,
//     location: "Marrakech",
//     country: "Morocco",
//   },
//   {
//     title: "Coastal Lighthouse Stay",
//     description: "Stay in a historic lighthouse with panoramic ocean views.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3" },
//     price: 2000,
//     location: "Maine",
//     country: "United States",
//   },
//   {
//     title: "Floating Bamboo Hut",
//     description: "Stay in a floating bamboo hut surrounded by serene waters and lush greenery.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3" },
//     price: 950,
//     location: "Kerala",
//     country: "India",
//   },
//   {
//     title: "Arctic Ice Hotel",
//     description: "Sleep in an igloo made of ice with thermal sleeping bags provided.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3" },
//     price: 3200,
//     location: "Jukkasjärvi",
//     country: "Sweden",
//   },
//   {
//     title: "Jungle Tree Lodge",
//     description: "Elevated lodge built in giant trees, offering canopy views and jungle safaris.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-4.0.3" },
//     price: 1350,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Historic Stone Cottage",
//     description: "Charming stone cottage with a rustic fireplace and garden.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3" },
//     price: 1150,
//     location: "Cotswolds",
//     country: "England",
//   },
//   {
//     title: "Sky Dome Apartment",
//     description: "Futuristic dome apartment with 360° views of the city skyline.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3" },
//     price: 3800,
//     location: "Singapore",
//     country: "Singapore",
//   },
//   {
//     title: "Cliffside Cave Hotel",
//     description: "Stay in a luxury cave suite carved into the cliffs with hot tubs.",
//     image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3" },
//     price: 2500,
//     location: "Cappadocia",
//     country: "Turkey",
//   }
// ];

// module.exports = { data: sampleListings };
