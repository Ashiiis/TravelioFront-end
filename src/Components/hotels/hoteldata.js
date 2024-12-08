  const hotels = [
    {
      name: 'The Oberoi Udaivilas',
      location: 'Udaipur, Rajasthan',
      category: 'Luxury',
      description: 'Luxury hotel with lakeside views and royal-inspired architecture.',
      website: 'https://www.oberoihotels.com/hotels-in-udaipur-udaivilas-resort/'
    },
    {
      name: 'Taj Lake Palace',
      location: 'Udaipur, Rajasthan',
      category: 'Luxury',
      description: 'Iconic floating palace offering a serene lakeside experience.',
      website: 'https://www.tajhotels.com/en-in/taj/taj-lake-palace-udaipur/'
    },
    // Add remaining hotel objects here...
    {
        name: 'The Leela Palace',
        location: 'New Delhi, Delhi',
        category: 'Luxury',
        description: 'Sophisticated and luxurious hotel in the heart of the city.',
        website: 'https://www.theleela.com/en_us/hotels-in-delhi/the-leela-palace-new-delhi/'
      },
      {
        name: 'JW Marriott',
        location: 'Mumbai, Maharashtra',
        category: 'Luxury',
        description: 'High-end hotel with stunning ocean views and world-class amenities.',
        website: 'https://www.marriott.com/en-us/hotels/bomjw-jw-marriott-mumbai-juhu/overview/'
      },
      {
        name: 'The Khyber Himalayan Resort & Spa',
        location: 'Gulmarg, Jammu & Kashmir',
        category: 'Luxury',
        description: 'A luxurious resort with breathtaking views of the Himalayas.',
        website: 'https://www.khyberhotels.com/'
      },
      {
        name: 'Wildflower Hall, Shimla',
        location: 'Himachal Pradesh',
        category: 'Luxury',
        description: 'An Oberoi resort set amidst lush mountains and serene surroundings.',
        website: 'https://www.oberoihotels.com/hotels-in-shimla-wfh/'
      },
      {
        name: 'Taj Swarna',
        location: 'Amritsar, Punjab',
        category: 'Luxury',
        description: 'Opulent hotel with proximity to the Golden Temple.',
        website: 'https://www.tajhotels.com/en-in/taj/taj-swarna-amritsar/'
      },
      {
        name: 'Ananda in the Himalayas',
        location: 'Rishikesh, Uttarakhand',
        category: 'Luxury',
        description: 'A world-class spa and wellness retreat.',
        website: 'https://www.anandaspa.com/'
      },
      {
        name: 'The Oberoi, Gurgaon',
        location: 'Gurgaon, Haryana',
        category: 'Luxury',
        description: 'A luxury hotel known for its futuristic design and serene ambiance.',
        website: 'https://www.oberoihotels.com/hotels-in-gurgaon/'
      },
      {
        name: 'Umaid Bhawan Palace',
        location: 'Jodhpur, Rajasthan',
        category: 'Luxury',
        description: 'Iconic palace turned into a luxury hotel with royal experiences.',
        website: 'https://www.tajhotels.com/en-in/taj/umaid-bhawan-palace-jodhpur/'
      },
      {
        name: 'Taj Skyline',
        location: 'Ahmedabad, Gujarat',
        category: 'Luxury',
        description: 'Modern luxury with panoramic city views.',
        website: 'https://www.tajhotels.com/en-in/taj/taj-skyline-ahmedabad/'
      },
      {
        name: 'Taj Exotica Resort & Spa',
        location: 'Benaulim, Goa',
        category: 'Luxury',
        description: 'A luxurious beachfront resort perfect for relaxation.',
        website: 'https://www.tajhotels.com/en-in/taj/taj-exotica-goa/'
      },
      {
        name: 'Jehan Numa Palace Hotel',
        location: 'Bhopal, Madhya Pradesh',
        category: 'Luxury',
        description: 'A blend of heritage and modern luxury in the heart of India.',
        website: 'https://www.jehannuma.com/palace-hotel/'
      },
      {
        name: 'Mayfair Lagoon',
        location: 'Bhubaneswar, Odisha',
        category: 'Luxury',
        description: 'A tranquil retreat with lush greenery and world-class facilities.',
        website: 'https://www.mayfairhotels.com/mayfair-lagoon-bhubaneswar/'
      },
      {
        name: 'The Oberoi Grand',
        location: 'Kolkata, West Bengal',
        category: 'Luxury',
        description: 'Colonial-style hotel offering a luxurious stay in the city of joy.',
        website: 'https://www.oberoihotels.com/hotels-in-kolkata/'
      },
      {
        name: 'The Leela Palace',
        location: 'Bengaluru, Karnataka',
        category: 'Luxury',
        description: 'An epitome of luxury, offering gardens and top-notch amenities.',
        website: 'https://www.theleela.com/en_us/hotels-in-bengaluru/the-leela-palace-bengaluru/'
      },
      {
        name: 'Kumarakom Lake Resort',
        location: 'Kumarakom, Kerala',
        category: 'Luxury',
        description: 'A serene resort by the backwaters with traditional Kerala architecture.',
        website: 'https://www.thekumarakomlakeresorts.com/'
      },
      {
        name: 'ITC Kohenur',
        location: 'Hyderabad, Andhra Pradesh',
        category: 'Luxury',
        description: 'A modern hotel inspired by the heritage of the region.',
        website: 'https://www.itchotels.com/in/en/itckohenur-hyderabad'
      },
      {
        name: 'Ri Kynjai',
        location: 'Shillong, Meghalaya',
        category: 'Luxury',
        description: 'Boutique resort overlooking the beautiful Umiam Lake.',
        website: 'https://www.rikynjai.com/'
      },
      {
        name: 'The Grand Dragon',
        location: 'Leh, Ladakh',
        category: 'Luxury',
        description: 'A sustainable luxury hotel with stunning views of the Ladakh landscape.',
        website: 'https://www.thegranddragonladakh.com/'
      },
      {
        name: 'Palais de Mahe',
        location: 'Pondicherry, Puducherry',
        category: 'Luxury',
        description: 'French colonial-inspired luxury boutique hotel.',
        website: 'https://www.cghearth.com/palais-de-mahe/'
      },
      {
        name: 'Taj Exotica Resort & Spa',
        location: 'Havelock Island, Andaman & Nicobar Islands',
        category: 'Luxury',
        description: 'An island paradise offering unmatched luxury experiences.',
        website: 'https://www.tajhotels.com/en-in/taj/taj-exotica-andamans/'
      },
  ];
  
  const midRangeHotels = [
    {
      name: 'Fortune Resort Grace',
      location: 'Mussoorie, Uttarakhand',
      category: 'Mid-range',
      description: 'A charming hotel offering comfort and stunning hill views.',
      website: 'https://www.fortunehotels.in/'
    },
    {
      name: 'Lemon Tree Premier',
      location: 'Jaipur, Rajasthan',
      category: 'Mid-range',
      description: 'Modern amenities and a convenient location for exploring Jaipur.',
      website: 'https://www.lemontreehotels.com/'
    },
    // Add remaining mid-range hotel objects here...
    {
        name: 'Radisson Blu',
        location: 'Lucknow, Uttar Pradesh',
        category: 'Mid-range',
        description: 'Elegant accommodations with easy access to the city’s attractions.',
        website: 'https://www.radissonhotels.com/'
      },
      {
        name: 'Hotel Park Plaza',
        location: 'Chandigarh, Punjab',
        category: 'Mid-range',
        description: 'Contemporary hotel with comfortable rooms and great dining options.',
        website: 'https://www.sarovarhotels.com/'
      },
      {
        name: 'Holiday Inn Express',
        location: 'Bhubaneswar, Odisha',
        category: 'Mid-range',
        description: 'Affordable and modern with quick access to the city center.',
        website: 'https://www.ihg.com/holidayinnexpress/'
      },
      {
        name: 'Sarovar Portico',
        location: 'Bengaluru, Karnataka',
        category: 'Mid-range',
        description: 'A blend of comfort and convenience in the city’s IT hub.',
        website: 'https://www.sarovarhotels.com/'
      },
      {
        name: 'Keys Select Hotel',
        location: 'Thiruvananthapuram, Kerala',
        category: 'Mid-range',
        description: 'Stylish and budget-friendly, located near the city center.',
        website: 'https://www.keyshotels.com/'
      },
      {
        name: 'Lemon Tree Hotel',
        location: 'Guwahati, Assam',
        category: 'Mid-range',
        description: 'A contemporary hotel reflecting the culture of the Northeast.',
        website: 'https://www.lemontreehotels.com/'
      },
      {
        name: 'Hotel Polo Towers',
        location: 'Shillong, Meghalaya',
        category: 'Mid-range',
        description: 'A centrally located hotel with premium amenities and scenic views.',
        website: 'https://www.hotelpolotowers.com/'
      },
      {
        name: 'The Fern Residency',
        location: 'Ahmedabad, Gujarat',
        category: 'Mid-range',
        description: 'Eco-friendly hotel offering luxury at an affordable price.',
        website: 'https://www.fernhotels.com/'
      },
      {
        name: 'Hotel Suba International',
        location: 'Mumbai, Maharashtra',
        category: 'Mid-range',
        description: 'Affordable and convenient for both business and leisure travelers.',
        website: 'https://www.subahotels.com/'
      },
      {
        name: 'Hotel Paradise',
        location: 'Pune, Maharashtra',
        category: 'Mid-range',
        description: 'Affordable hotel with excellent service and amenities.',
        website: 'https://www.hotelparadisepune.com/'
      },
      {
        name: 'Clarks Inn',
        location: 'Patna, Bihar',
        category: 'Mid-range',
        description: 'Well-located hotel offering great value for money.',
        website: 'https://www.clarksinn.in/'
      },
      {
        name: 'Havelock Island Beach Resort',
        location: 'Havelock Island, Andaman & Nicobar Islands',
        category: 'Mid-range',
        description: 'Perfect for those seeking beachside tranquility on a budget.',
        website: 'https://www.havelockislandbeachresort.com/'
      },
      {
        name: 'Hotel Saffron Leaf',
        location: 'Dehradun, Uttarakhand',
        category: 'Mid-range',
        description: 'A centrally located hotel offering cozy rooms and friendly service.',
        website: 'https://www.saffronleafhotel.com/'
      },
      {
        name: 'Cygnett Park',
        location: 'Dibrugarh, Assam',
        category: 'Mid-range',
        description: 'Modern hotel with elegant rooms and a central location.',
        website: 'https://www.cygnetthotels.com/'
      },
      {
        name: 'Hotel Hilltone',
        location: 'Mount Abu, Rajasthan',
        category: 'Mid-range',
        description: 'A cozy retreat in the hills with great food and service.',
        website: 'https://www.hotelhilltone.com/'
      },
      {
        name: 'Royal Orchid Central',
        location: 'Vadodara, Gujarat',
        category: 'Mid-range',
        description: 'Well-suited for business travelers with great connectivity.',
        website: 'https://www.royalorchidhotels.com/'
      },
      {
        name: 'Treebo Trend Hotel',
        location: 'Hyderabad, Telangana',
        category: 'Mid-range',
        description: 'Comfortable accommodations at a reasonable price.',
        website: 'https://www.treebo.com/'
      },
      {
        name: 'The Pride Hotel',
        location: 'Kolkata, West Bengal',
        category: 'Mid-range',
        description: 'Stylish interiors and excellent service in a central location.',
        website: 'https://www.pridehotel.com/'
      }

  ];
  const normalRangeHotels = [
    {
      name: "Hotel Arya International",
      location: "Kolkata, West Bengal",
      category: "Normal",
      description: "Simple budget hotel with clean rooms, near Kolkata's key attractions.",
      website: "https://www.hotelarya.com",
    },
    {
      name: "Hotel Apna Palace",
      location: "Indore, Madhya Pradesh",
      category: "Normal",
      description: "Affordable lodging with modern amenities and a cozy atmosphere.",
      website: "https://hotelapnapalace.com",
    },
    {
      name: "Hotel Sai Palace",
      location: "Shirdi, Maharashtra",
      category: "Normal",
      description: "Budget hotel near Shirdi Sai Baba Temple, ideal for pilgrims.",
      website: "https://hotelsaipalaceshirdi.com",
    },
    {
      name: "Hotel Silver Inn",
      location: "Jaipur, Rajasthan",
      category: "Normal",
      description: "Economical option with a traditional touch near Jaipur's historical sites.",
      website: "https://www.hotelsilverinn.com",
    },
    {
      name: "Hotel Sandhya",
      location: "Hyderabad, Telangana",
      category: "Normal",
      description: "Centrally located hotel offering simple rooms with free Wi-Fi.",
      website: "https://www.sandhyahotel.com",
    },
    {
      name: "Hotel Lake View",
      location: "Udaipur, Rajasthan",
      category: "Normal",
      description: "Budget stay with beautiful lake views and local cuisine.",
      website: "https://www.lakeviewhoteludaipur.com",
    },
    {
      name: "Hotel Blue Heaven",
      location: "Agra, Uttar Pradesh",
      category: "Normal",
      description: "Affordable hotel close to the Taj Mahal with basic services.",
      website: "https://hotelblueheavenagra.com",
    },
    {
      name: "Hotel Green Valley",
      location: "Guwahati, Assam",
      category: "Normal",
      description: "Budget-friendly stay with clean rooms near Kamakhya Temple.",
      website: "https://hotelgreenvalleyguwahati.com",
    },
    {
      name: "Hotel Palm Residency",
      location: "Surat, Gujarat",
      category: "Normal",
      description: "Basic facilities with proximity to business hubs and shopping areas.",
      website: "https://hotelpalmresidencysurat.com",
    },
    {
      name: "Hotel Sree Krishna",
      location: "Kochi, Kerala",
      category: "Normal",
      description: "Affordable accommodation with a homely vibe, close to Fort Kochi.",
      website: "https://www.hotelsreekrishna.com",
    },
    {
      name: "Hotel Samrat",
      location: "Pune, Maharashtra",
      category: "Normal",
      description: "Ideal for solo travelers, this budget hotel offers clean and safe lodging.",
      website: "https://www.hotelsamratpune.com",
    },
    {
      name: "Hotel Comfort",
      location: "Bengaluru, Karnataka",
      category: "Normal",
      description: "Pocket-friendly hotel near major tech hubs and metro stations.",
      website: "https://hotelcomfortbengaluru.com",
    },
    {
      name: "Hotel Chinar",
      location: "Jammu, Jammu & Kashmir",
      category: "Normal",
      description: "Affordable lodging near the Raghunath Temple.",
      website: "https://hotelchinarjammu.com",
    },
    {
      name: "Hotel City Heart",
      location: "Chandigarh, Punjab",
      category: "Normal",
      description: "Centrally located, offering easy access to local attractions.",
      website: "https://hotelcityheartchandigarh.com",
    },
    {
      name: "Hotel Classic Inn",
      location: "Mysuru, Karnataka",
      category: "Normal",
      description: "Budget-friendly hotel with simple rooms and good service.",
      website: "https://hotelclassicinnmysuru.com",
    },
  ];
    
  export { normalRangeHotels };  
  export default hotels;
  export { midRangeHotels };
  