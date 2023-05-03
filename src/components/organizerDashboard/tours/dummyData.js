export const tours = [
	{
		name: 'Northern Areas Adventure',
		destination: 'Swat, Pakistan',
		organizer: '642dd48d4d55ef9d93d4aaf8',
		durationDays: 3,
		capacity: 60,
		ticketsPurchased: 20,
		requirements: ['Trekking gear', 'Warm clothes', 'Tent'],
		tags: ['Adventure', 'Trekking', 'Nature'],
		images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
		description: 'Join us for an epic adventure in the breathtaking Northern Areas of Pakistan. You\'ll trek through rugged mountains, camp under the stars, and experience some of the most stunning natural beauty in the world.',
		route: ['Islamabad', 'Gilgit', 'Hunza', 'Islamabad'],
		tips: ['Bring warm clothes', 'Stay hydrated', 'Respect the environment'],
		departureDate: '2023-06-01T00:00:00.000Z',
		departureTime: '8:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 25000, children: 10000 },
		active: true,
		featured: true,
		discount: 1000,
		inclusions: ['Transportation', 'Accommodation', 'Meals'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Drive to Gilgit',
			'Day 3': 'Trek to Rakaposhi Base Camp',
			'Day 4': 'Trek to Hunza',
			'Day 5': 'Visit local villages and landmarks',
			'Day 6': 'Trek to Naltar Valley',
			'Day 7': 'Return to Islamabad'
		},
		overview: 'This 7-day adventure will take you through some of the most stunning landscapes in Pakistan. You\'ll trek through rugged mountains, camp under the stars, and experience the rich culture of the Northern Areas.'
	},
	{
		name: 'Kaghan Valley Expedition',
		destination: 'Kaghan Valley, Pakistan',
		organizer: '642dd48d4d55ef9d93d4aaf8',
		durationDays: 4,
		capacity: 40,
		ticketsPurchased: 10,
		requirements: ['Trekking gear', 'Warm clothes', 'Tent'],
		tags: ['Adventure', 'Trekking', 'Nature'],
		images: ['https://example.com/image3.jpg', 'https://example.com/image4.jpg'],
		description: 'Experience the beauty of the Kaghan Valley on this unforgettable adventure. You\'ll trek through scenic trails, camp under the stars, and discover the rich culture of the region.',
		route: ['Islamabad', 'Naran', 'Jalkhad', 'Besal', 'Lulusar Lake', 'Babusar Top', 'Chillas', 'Islamabad'],
		tips: ['Bring warm clothes', 'Stay hydrated', 'Respect the environment'],
		departureDate: '2023-07-01T00:00:00.000Z',
		departureTime: '9:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 20000, children: 10000 },
		active: true,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Drive to Naran',
			'Day 3': 'Trek to Lulusar Lake',
			'Day 4': 'Return to Islamabad'
		},
		overview: 'This 4-day expedition will take you through the stunning landscapes of the Kaghan Valley. You\'ll trek through scenic trails, camp under the stars, and discover the rich culture of the region.'
	},
	{
		name: 'Cultural Wonders of Lahore',
		destination: 'Lahore, Pakistan',
		organizer: 'a19b65c8f413fae6dc880b9e',
		durationDays: 2,
		capacity: 50,
		ticketsPurchased: 35,
		requirements: ['Comfortable shoes', 'Sunscreen'],
		tags: ['Culture', 'History', 'Sightseeing'],
		images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
		description: 'Explore the cultural wonders of Lahore, one of the oldest cities in Pakistan. Visit ancient landmarks, enjoy local cuisine, and experience the rich history and traditions of this vibrant city.',
		route: ['Lahore Fort', 'Badshahi Mosque', 'Shalimar Gardens', 'Walled City'],
		tips: ['Dress modestly', 'Stay hydrated', 'Respect local customs'],
		departureDate: '2023-07-01T00:00:00.000Z',
		departureTime: '9:00 AM',
		departureLocation: ['Lahore'],
		price: { adults: 15000, children: 7500 },
		active: true,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Visit Lahore Fort and Badshahi Mosque',
			'Day 2': 'Explore Shalimar Gardens and the Walled City'
		},
		overview: 'Discover the cultural wonders of Lahore, from ancient landmarks to vibrant markets and delicious cuisine.'
	},
	{
		name: 'Hunza Valley Tour',
		destination: 'Hunza Valley, Pakistan',
		organizer: '642dd48d4d55ef9d93d4aaf8',
		durationDays: 5,
		capacity: 50,
		ticketsPurchased: 15,
		requirements: ['Comfortable shoes', 'Warm clothes', 'Sunglasses'],
		tags: ['Nature', 'Sightseeing', 'Culture'],
		images: [
			'https://example.com/hunza1.jpg',
			'https://example.com/hunza2.jpg',
			'https://example.com/hunza3.jpg'
		],
		description:
			'Join us for an unforgettable journey through the stunning Hunza Valley in northern Pakistan. You will explore the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.',
		route: ['Islamabad', 'Chilas', 'Gilgit', 'Hunza', 'Islamabad'],
		tips: [
			'Pack warm clothes',
			'Stay hydrated',
			'Respect local culture and traditions'
		],
		departureDate: '2023-07-10T00:00:00.000Z',
		departureTime: '7:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 30000, children: 15000 },
		active: true,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Drive to Chilas',
			'Day 3': 'Visit Gilgit and travel to Hunza',
			'Day 4': 'Explore Hunza Valley',
			'Day 5': 'Return to Islamabad'
		},
		overview:
		'This 5-day tour will take you through the breathtaking Hunza Valley. You will experience the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.'
	},
	{
		name: 'K2 Base Camp Trek',
		destination: 'Skardu, Pakistan',
		organizer: 'd4b69f0827b4e3c5a7d12572',
		durationDays: 14,
		capacity: 30,
		ticketsPurchased: 10,
		requirements: ['Mountaineering gear', 'Climbing experience', 'High altitude training'],
		tags: ['Adventure', 'Mountaineering', 'Nature'],
		images: [
			'https://example.com/image1.jpg',
			'https://example.com/image2.jpg',
			'https://example.com/image3.jpg'
		],
		description: 'Embark on a challenging trek to the base camp of the world\'s second-highest mountain, K2. You\'ll navigate treacherous terrain, climb steep peaks, and experience breathtaking views that few have ever seen.',
		route: ['Islamabad', 'Skardu', 'K2 Base Camp', 'Skardu', 'Islamabad'],
		tips: ['Train for high altitude', 'Stay hydrated', 'Respect the environment'],
		departureDate: '2023-07-15T00:00:00.000Z',
		departureTime: '6:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 50000, children: 25000 },
		active: true,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals', 'Mountaineering equipment'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Fly to Skardu',
			'Day 3-12': 'Trek to K2 Base Camp',
			'Day 13': 'Return to Skardu',
			'Day 14': 'Return to Islamabad'
		},
		overview: 'This 14-day trek will take you to the base camp of K2, the second-highest mountain in the world. You\'ll need to be in top physical condition and have climbing experience to take on this challenge, but the rewards are some of the most breathtaking views you\'ll ever see.'
	},
	{
		name: 'Hunza Valley Tour',
		destination: 'Hunza Valley, Pakistan',
		organizer: '642dd48d4d55ef9d93d4aaf8',
		durationDays: 5,
		capacity: 50,
		ticketsPurchased: 15,
		requirements: ['Comfortable shoes', 'Warm clothes', 'Sunglasses'],
		tags: ['Nature', 'Sightseeing', 'Culture'],
		images: [
			'https://example.com/hunza1.jpg',
			'https://example.com/hunza2.jpg',
			'https://example.com/hunza3.jpg'
		],
		description:
			'Join us for an unforgettable journey through the stunning Hunza Valley in northern Pakistan. You will explore the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.',
		route: ['Islamabad', 'Chilas', 'Gilgit', 'Hunza', 'Islamabad'],
		tips: [
			'Pack warm clothes',
			'Stay hydrated',
			'Respect local culture and traditions'
		],
		departureDate: '2023-07-10T00:00:00.000Z',
		departureTime: '7:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 30000, children: 15000 },
		active: true,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Drive to Chilas',
			'Day 3': 'Visit Gilgit and travel to Hunza',
			'Day 4': 'Explore Hunza Valley',
			'Day 5': 'Return to Islamabad'
		},
		overview:
		'This 5-day tour will take you through the breathtaking Hunza Valley. You will experience the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.'
	},
	{
		name: 'K2 Base Camp Trek',
		destination: 'Skardu, Pakistan',
		organizer: 'd4b69f0827b4e3c5a7d12572',
		durationDays: 14,
		capacity: 30,
		ticketsPurchased: 10,
		requirements: ['Mountaineering gear', 'Climbing experience', 'High altitude training'],
		tags: ['Adventure', 'Mountaineering', 'Nature'],
		images: [
			'https://example.com/image1.jpg',
			'https://example.com/image2.jpg',
			'https://example.com/image3.jpg'
		],
		description: 'Embark on a challenging trek to the base camp of the world\'s second-highest mountain, K2. You\'ll navigate treacherous terrain, climb steep peaks, and experience breathtaking views that few have ever seen.',
		route: ['Islamabad', 'Skardu', 'K2 Base Camp', 'Skardu', 'Islamabad'],
		tips: ['Train for high altitude', 'Stay hydrated', 'Respect the environment'],
		departureDate: '2023-07-15T00:00:00.000Z',
		departureTime: '6:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 50000, children: 25000 },
		active: true,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals', 'Mountaineering equipment'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Fly to Skardu',
			'Day 3-12': 'Trek to K2 Base Camp',
			'Day 13': 'Return to Skardu',
			'Day 14': 'Return to Islamabad'
		},
		overview: 'This 14-day trek will take you to the base camp of K2, the second-highest mountain in the world. You\'ll need to be in top physical condition and have climbing experience to take on this challenge, but the rewards are some of the most breathtaking views you\'ll ever see.'
	},
	{
		name: 'Hunza Valley Tour',
		destination: 'Hunza Valley, Pakistan',
		organizer: '642dd48d4d55ef9d93d4aaf8',
		durationDays: 5,
		capacity: 50,
		ticketsPurchased: 15,
		requirements: ['Comfortable shoes', 'Warm clothes', 'Sunglasses'],
		tags: ['Nature', 'Sightseeing', 'Culture'],
		images: [
			'https://example.com/hunza1.jpg',
			'https://example.com/hunza2.jpg',
			'https://example.com/hunza3.jpg'
		],
		description:
			'Join us for an unforgettable journey through the stunning Hunza Valley in northern Pakistan. You will explore the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.',
		route: ['Islamabad', 'Chilas', 'Gilgit', 'Hunza', 'Islamabad'],
		tips: [
			'Pack warm clothes',
			'Stay hydrated',
			'Respect local culture and traditions'
		],
		departureDate: '2023-07-10T00:00:00.000Z',
		departureTime: '7:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 30000, children: 15000 },
		active: true,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Drive to Chilas',
			'Day 3': 'Visit Gilgit and travel to Hunza',
			'Day 4': 'Explore Hunza Valley',
			'Day 5': 'Return to Islamabad'
		},
		overview:
		'This 5-day tour will take you through the breathtaking Hunza Valley. You will experience the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.'
	},
	{
		name: 'K2 Base Camp Trek',
		destination: 'Skardu, Pakistan',
		organizer: 'd4b69f0827b4e3c5a7d12572',
		durationDays: 14,
		capacity: 30,
		ticketsPurchased: 10,
		requirements: ['Mountaineering gear', 'Climbing experience', 'High altitude training'],
		tags: ['Adventure', 'Mountaineering', 'Nature'],
		images: [
			'https://example.com/image1.jpg',
			'https://example.com/image2.jpg',
			'https://example.com/image3.jpg'
		],
		description: 'Embark on a challenging trek to the base camp of the world\'s second-highest mountain, K2. You\'ll navigate treacherous terrain, climb steep peaks, and experience breathtaking views that few have ever seen.',
		route: ['Islamabad', 'Skardu', 'K2 Base Camp', 'Skardu', 'Islamabad'],
		tips: ['Train for high altitude', 'Stay hydrated', 'Respect the environment'],
		departureDate: '2023-07-15T00:00:00.000Z',
		departureTime: '6:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 50000, children: 25000 },
		active: true,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals', 'Mountaineering equipment'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Fly to Skardu',
			'Day 3-12': 'Trek to K2 Base Camp',
			'Day 13': 'Return to Skardu',
			'Day 14': 'Return to Islamabad'
		},
		overview: 'This 14-day trek will take you to the base camp of K2, the second-highest mountain in the world. You\'ll need to be in top physical condition and have climbing experience to take on this challenge, but the rewards are some of the most breathtaking views you\'ll ever see.'
	},
	{
		name: 'Hunza Valley Tour',
		destination: 'Hunza Valley, Pakistan',
		organizer: '642dd48d4d55ef9d93d4aaf8',
		durationDays: 5,
		capacity: 50,
		ticketsPurchased: 15,
		requirements: ['Comfortable shoes', 'Warm clothes', 'Sunglasses'],
		tags: ['Nature', 'Sightseeing', 'Culture'],
		images: [
			'https://example.com/hunza1.jpg',
			'https://example.com/hunza2.jpg',
			'https://example.com/hunza3.jpg'
		],
		description:
			'Join us for an unforgettable journey through the stunning Hunza Valley in northern Pakistan. You will explore the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.',
		route: ['Islamabad', 'Chilas', 'Gilgit', 'Hunza', 'Islamabad'],
		tips: [
			'Pack warm clothes',
			'Stay hydrated',
			'Respect local culture and traditions'
		],
		departureDate: '2023-07-10T00:00:00.000Z',
		departureTime: '7:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 30000, children: 15000 },
		active: true,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Drive to Chilas',
			'Day 3': 'Visit Gilgit and travel to Hunza',
			'Day 4': 'Explore Hunza Valley',
			'Day 5': 'Return to Islamabad'
		},
		overview:
		'This 5-day tour will take you through the breathtaking Hunza Valley. You will experience the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.'
	},
	{
		name: 'K2 Base Camp Trek',
		destination: 'Skardu, Pakistan',
		organizer: 'd4b69f0827b4e3c5a7d12572',
		durationDays: 14,
		capacity: 30,
		ticketsPurchased: 10,
		requirements: ['Mountaineering gear', 'Climbing experience', 'High altitude training'],
		tags: ['Adventure', 'Mountaineering', 'Nature'],
		images: [
			'https://example.com/image1.jpg',
			'https://example.com/image2.jpg',
			'https://example.com/image3.jpg'
		],
		description: 'Embark on a challenging trek to the base camp of the world\'s second-highest mountain, K2. You\'ll navigate treacherous terrain, climb steep peaks, and experience breathtaking views that few have ever seen.',
		route: ['Islamabad', 'Skardu', 'K2 Base Camp', 'Skardu', 'Islamabad'],
		tips: ['Train for high altitude', 'Stay hydrated', 'Respect the environment'],
		departureDate: '2023-07-15T00:00:00.000Z',
		departureTime: '6:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 50000, children: 25000 },
		active: false,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals', 'Mountaineering equipment'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Fly to Skardu',
			'Day 3-12': 'Trek to K2 Base Camp',
			'Day 13': 'Return to Skardu',
			'Day 14': 'Return to Islamabad'
		},
		overview: 'This 14-day trek will take you to the base camp of K2, the second-highest mountain in the world. You\'ll need to be in top physical condition and have climbing experience to take on this challenge, but the rewards are some of the most breathtaking views you\'ll ever see.'
	},
	{
		name: 'Hunza Valley Tour',
		destination: 'Hunza Valley, Pakistan',
		organizer: '642dd48d4d55ef9d93d4aaf8',
		durationDays: 5,
		capacity: 50,
		ticketsPurchased: 15,
		requirements: ['Comfortable shoes', 'Warm clothes', 'Sunglasses'],
		tags: ['Nature', 'Sightseeing', 'Culture'],
		images: [
			'https://example.com/hunza1.jpg',
			'https://example.com/hunza2.jpg',
			'https://example.com/hunza3.jpg'
		],
		description:
			'Join us for an unforgettable journey through the stunning Hunza Valley in northern Pakistan. You will explore the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.',
		route: ['Islamabad', 'Chilas', 'Gilgit', 'Hunza', 'Islamabad'],
		tips: [
			'Pack warm clothes',
			'Stay hydrated',
			'Respect local culture and traditions'
		],
		departureDate: '2023-07-10T00:00:00.000Z',
		departureTime: '7:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 30000, children: 15000 },
		active: false,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Drive to Chilas',
			'Day 3': 'Visit Gilgit and travel to Hunza',
			'Day 4': 'Explore Hunza Valley',
			'Day 5': 'Return to Islamabad'
		},
		overview:
		'This 5-day tour will take you through the breathtaking Hunza Valley. You will experience the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.'
	},
	{
		name: 'K2 Base Camp Trek',
		destination: 'Skardu, Pakistan',
		organizer: 'd4b69f0827b4e3c5a7d12572',
		durationDays: 14,
		capacity: 30,
		ticketsPurchased: 10,
		requirements: ['Mountaineering gear', 'Climbing experience', 'High altitude training'],
		tags: ['Adventure', 'Mountaineering', 'Nature'],
		images: [
			'https://example.com/image1.jpg',
			'https://example.com/image2.jpg',
			'https://example.com/image3.jpg'
		],
		description: 'Embark on a challenging trek to the base camp of the world\'s second-highest mountain, K2. You\'ll navigate treacherous terrain, climb steep peaks, and experience breathtaking views that few have ever seen.',
		route: ['Islamabad', 'Skardu', 'K2 Base Camp', 'Skardu', 'Islamabad'],
		tips: ['Train for high altitude', 'Stay hydrated', 'Respect the environment'],
		departureDate: '2023-07-15T00:00:00.000Z',
		departureTime: '6:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 50000, children: 25000 },
		active: false,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals', 'Mountaineering equipment'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Fly to Skardu',
			'Day 3-12': 'Trek to K2 Base Camp',
			'Day 13': 'Return to Skardu',
			'Day 14': 'Return to Islamabad'
		},
		overview: 'This 14-day trek will take you to the base camp of K2, the second-highest mountain in the world. You\'ll need to be in top physical condition and have climbing experience to take on this challenge, but the rewards are some of the most breathtaking views you\'ll ever see.'
	},
	{
		name: 'Hunza Valley Tour',
		destination: 'Hunza Valley, Pakistan',
		organizer: '642dd48d4d55ef9d93d4aaf8',
		durationDays: 5,
		capacity: 50,
		ticketsPurchased: 15,
		requirements: ['Comfortable shoes', 'Warm clothes', 'Sunglasses'],
		tags: ['Nature', 'Sightseeing', 'Culture'],
		images: [
			'https://example.com/hunza1.jpg',
			'https://example.com/hunza2.jpg',
			'https://example.com/hunza3.jpg'
		],
		description:
			'Join us for an unforgettable journey through the stunning Hunza Valley in northern Pakistan. You will explore the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.',
		route: ['Islamabad', 'Chilas', 'Gilgit', 'Hunza', 'Islamabad'],
		tips: [
			'Pack warm clothes',
			'Stay hydrated',
			'Respect local culture and traditions'
		],
		departureDate: '2023-07-10T00:00:00.000Z',
		departureTime: '7:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 30000, children: 15000 },
		active: false,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Drive to Chilas',
			'Day 3': 'Visit Gilgit and travel to Hunza',
			'Day 4': 'Explore Hunza Valley',
			'Day 5': 'Return to Islamabad'
		},
		overview:
		'This 5-day tour will take you through the breathtaking Hunza Valley. You will experience the unique culture, visit ancient forts, and witness the awe-inspiring beauty of the valley.'
	},
	{
		name: 'K2 Base Camp Trek',
		destination: 'Skardu, Pakistan',
		organizer: 'd4b69f0827b4e3c5a7d12572',
		durationDays: 14,
		capacity: 30,
		ticketsPurchased: 10,
		requirements: ['Mountaineering gear', 'Climbing experience', 'High altitude training'],
		tags: ['Adventure', 'Mountaineering', 'Nature'],
		images: [
			'https://example.com/image1.jpg',
			'https://example.com/image2.jpg',
			'https://example.com/image3.jpg'
		],
		description: 'Embark on a challenging trek to the base camp of the world\'s second-highest mountain, K2. You\'ll navigate treacherous terrain, climb steep peaks, and experience breathtaking views that few have ever seen.',
		route: ['Islamabad', 'Skardu', 'K2 Base Camp', 'Skardu', 'Islamabad'],
		tips: ['Train for high altitude', 'Stay hydrated', 'Respect the environment'],
		departureDate: '2023-07-15T00:00:00.000Z',
		departureTime: '6:00 AM',
		departureLocation: ['Islamabad'],
		price: { adults: 50000, children: 25000 },
		active: false,
		featured: false,
		discount: 0,
		inclusions: ['Transportation', 'Accommodation', 'Meals', 'Mountaineering equipment'],
		exclusions: ['Personal expenses', 'Travel insurance'],
		itinerary: {
			'Day 1': 'Arrive in Islamabad',
			'Day 2': 'Fly to Skardu',
			'Day 3-12': 'Trek to K2 Base Camp',
			'Day 13': 'Return to Skardu',
			'Day 14': 'Return to Islamabad'
		},
		overview: 'This 14-day trek will take you to the base camp of K2, the second-highest mountain in the world. You\'ll need to be in top physical condition and have climbing experience to take on this challenge, but the rewards are some of the most breathtaking views you\'ll ever see.'
	},
];
