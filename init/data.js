const sampleListings = [

  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
    },
    price: 1500,
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 15.4909]
    }
  },

  {
    title: "Modern City Apartment",
    description:
      "Stay in a stylish modern apartment located close to popular restaurants, shopping areas, and city attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    price: 2200,
    location: "Mumbai",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.0760]
    }
  },

  {
    title: "Mountain View Retreat",
    description:
      "Relax in this peaceful mountain retreat surrounded by beautiful views, fresh air, and nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
    },
    price: 3000,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396]
    }
  },

  {
    title: "Luxury Villa with Pool",
    description:
      "Enjoy a luxurious stay in a private villa featuring a swimming pool, spacious rooms, and beautiful outdoor spaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
    },
    price: 6500,
    location: "Jaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124]
    }
  },

  {
    title: "Peaceful Forest Cabin",
    description:
      "A cozy cabin surrounded by trees and nature, perfect for a quiet weekend away from the busy city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
    },
    price: 2800,
    location: "Rishikesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869]
    }
  },

  {
    title: "Heritage Haveli Stay",
    description:
      "Experience traditional architecture and royal hospitality in this beautiful heritage haveli.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
    },
    price: 4500,
    location: "Udaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.7125, 24.5854]
    }
  },

  {
    title: "Lakeside Wooden House",
    description:
      "Wake up to beautiful lake views from this comfortable wooden house surrounded by peaceful scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    },
    price: 3500,
    location: "Nainital",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.4636, 29.3919]
    }
  },

  {
    title: "Beach House Escape",
    description:
      "Enjoy a relaxing beach vacation in this bright and comfortable house just minutes away from the sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    },
    price: 4000,
    location: "Alibaug",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8722, 18.6414]
    }
  },

  {
    title: "Cozy Hillside Home",
    description:
      "A beautiful hillside home offering peaceful surroundings, comfortable rooms, and amazing valley views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
    },
    price: 3200,
    location: "Mussoorie",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.1025, 30.4598]
    }
  },

  {
    title: "Modern Downtown Loft",
    description:
      "A stylish loft in the center of the city, perfect for travelers who want to explore local attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },
    price: 2700,
    location: "Bangalore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    }
  },

  {
    title: "Desert Camp Experience",
    description:
      "Spend a memorable night under the stars in a comfortable desert camp with a unique local experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada"
    },
    price: 3800,
    location: "Jaisalmer",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [70.9083, 26.9157]
    }
  },

  {
    title: "Snow Valley Cottage",
    description:
      "Stay in a warm and cozy cottage surrounded by snowy mountains and breathtaking winter landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
    },
    price: 5000,
    location: "Gulmarg",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.3805, 34.0484]
    }
  },

  {
    title: "Riverside Retreat",
    description:
      "Enjoy a peaceful stay beside the river with comfortable rooms, fresh air, and beautiful natural surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7"
    },
    price: 2900,
    location: "Rishikesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869]
    }
  },

  {
    title: "Royal Palace Stay",
    description:
      "Experience a luxurious royal-style stay with elegant interiors, traditional architecture, and premium hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154"
    },
    price: 7500,
    location: "Jodhpur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.0243, 26.2389]
    }
  },

  {
    title: "Countryside Farmhouse",
    description:
      "Escape to a peaceful countryside farmhouse with open spaces, fresh air, and a relaxing atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1"
    },
    price: 2400,
    location: "Dehradun",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.0322, 30.3165]
    }
  }

];

module.exports = { data: sampleListings };

