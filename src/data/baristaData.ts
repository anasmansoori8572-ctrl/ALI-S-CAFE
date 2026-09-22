import { CafeMenuItem, ProductItem, GalleryItem, EquipmentTab } from '../types';

// Stored images in public/images directory (Strictly ONLY images, excluding video files like .mp4)
export const STORED_IMAGES: string[] = Array.from({ length: 17 }, (_, i) => `/images/image_${i + 1}.jpg`);

// Utility to pick a random image from stored images
export const getRandomStoredImage = (): string => {
  return STORED_IMAGES[Math.floor(Math.random() * STORED_IMAGES.length)];
};

// Utility to get count randomized non-repeating stored images
const getRandomPool = (count: number): string[] => {
  const shuffled = [...STORED_IMAGES].sort(() => 0.5 - Math.random());
  const pool: string[] = [];
  while (pool.length < count) {
    pool.push(...[...STORED_IMAGES].sort(() => 0.5 - Math.random()));
  }
  return pool.slice(0, count);
};

const heroPool = getRandomPool(4);
const featuresPool = getRandomPool(3);
const equipmentPool = getRandomPool(4);
const menuPool = getRandomPool(12);
const productsPool = getRandomPool(4);
const galleryPool = getRandomPool(8);
const instagramPool = getRandomPool(6);

export const HERO_SLIDES = [
  {
    id: 1,
    heading: 'THE HOME OF COFFEE',
    subtitleLine1: 'Lorem ipsum dolor sit amet, nec ne oficiis electram.',
    subtitleLine2: 'Dolore nominati vim et.',
    image: heroPool[0],
    emblem: 'https://aliscafe.in/loyalty/images/aliscafe.png',
    buttonText: 'READ MORE'
  },
  {
    id: 2,
    heading: 'IMPORTANCE OF COFFEE',
    subtitleLine1: 'Lorem ipsum dolor sit amet, nec ne oficiis electram.',
    subtitleLine2: 'Dolore nominati vim et.',
    image: heroPool[1],
    emblem: 'https://aliscafe.in/loyalty/images/aliscafe.png',
    buttonText: 'READ MORE'
  },
  {
    id: 3,
    heading: 'SPECIAL COFFEE BEANS',
    subtitleLine1: 'Lorem ipsum dolor sit amet, nec ne oficiis electram.',
    subtitleLine2: 'Dolore nominati vim et.',
    image: heroPool[2],
    emblem: 'https://aliscafe.in/loyalty/images/aliscafe.png',
    buttonText: 'READ MORE'
  },
  {
    id: 4,
    heading: 'BREWED TO PERFECTION',
    subtitleLine1: 'Lorem ipsum dolor sit amet, nec ne oficiis electram.',
    subtitleLine2: 'Dolore nominati vim et.',
    image: heroPool[3],
    emblem: 'https://aliscafe.in/loyalty/images/aliscafe.png',
    buttonText: 'READ MORE'
  }
];

export const THREE_FEATURES = [
  {
    number: '01',
    title: 'BEAUTIFUL PLACE',
    description: 'Aliquet nisl integer platea ipsum aliquet integer turpis adipiscing maecenas. Magna sem adipiscing elementum pretium.',
    image: featuresPool[0]
  },
  {
    number: '02',
    title: 'FEEL THE COFFEE',
    description: 'Aliquet nisl integer platea ipsum aliquet integer turpis adipiscing maecenas. Magna sem adipiscing elementum pretium.',
    image: featuresPool[1]
  },
  {
    number: '03',
    title: 'FULL TASTE',
    description: 'Aliquet nisl integer platea ipsum aliquet integer turpis adipiscing maecenas. Magna sem adipiscing elementum pretium.',
    image: featuresPool[2]
  }
];

export const EQUIPMENT_TABS: EquipmentTab[] = [
  {
    id: 'coffeemaker',
    title: 'Coffeemaker',
    subtitle: 'PRECISION BREWING SYSTEMS',
    description: 'Designed for optimal extraction and consistent brewing temperature. Our commercial-grade pour-over systems extract bright aromatics and nuanced tasting notes with thermal stability within 0.2°C.',
    icon: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-icon-img-1.png',
    image: equipmentPool[0],
    bullets: [
      'Multi-stage thermal pre-infusion cycle',
      'Dual PID micro-controllers for consistent temperature',
      'SCA Gold Cup certified extraction curve',
      'Custom copper dispersion shower block'
    ]
  },
  {
    id: 'grinder',
    title: 'COFFEE GRINDER',
    subtitle: 'MICROMETRIC BURR CALIBRATION',
    description: 'Uniform particle size distribution ensures an even extraction without bitterness or channeling. 83mm titanium flat burrs deliver zero retention and peak clarity.',
    icon: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-icon-img-2.png',
    image: equipmentPool[1],
    bullets: [
      '83mm titanium-coated flat steel burrs',
      'Stepless micrometric grind adjustment collar',
      'Integrated static reduction & clump crusher',
      'Low RPM motor preventing bean thermal warming'
    ]
  },
  {
    id: 'cups',
    title: 'COFFEE Cups',
    subtitle: 'ERGONOMIC PORCELAIN THERMODYNAMICS',
    description: 'Heavyweight fired porcelain preserves the crema integrity and maintains coffee warmth from first sip to finish. Contoured bases encourage smooth milk pouring and latte art creation.',
    icon: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-icon-img-3.png',
    image: equipmentPool[2],
    bullets: [
      'High-fired commercial restaurant grade porcelain',
      'Curved egg interior for fluid dynamics',
      'Thick thermal retention wall structure',
      'Scratch-resistant glazed finish'
    ]
  },
  {
    id: 'espresso',
    title: 'ESPRESSO MACHINE',
    subtitle: 'ITALIAN PRESSURE MASTERPIECE',
    description: 'Handcrafted boilers with independent saturated groups, saturated steam wands, and customized volumetric flow profiling to highlight the singular nuances of every roast.',
    icon: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-icon-img-4.png',
    image: equipmentPool[3],
    bullets: [
      'Independent saturated dual boiler configuration',
      'Real-time digital pressure profiling gears',
      'Cool-touch insulated multi-directional steam wands',
      'Integrated shot timer with flow gravimetrics'
    ]
  }
];

export const CAFE_MENU_ITEMS: CafeMenuItem[] = [
  {
    id: 'caffe-latte',
    name: 'Caffe Latte',
    price: '$2.95',
    description: 'Fresh brewed coffee and steamed milk',
    label: 'New',
    image: menuPool[0]
  },
  {
    id: 'caffe-mocha',
    name: 'Caffe Mocha',
    price: '$3.67',
    description: 'Espresso With Milk, and Whipped Cream',
    image: menuPool[1]
  },
  {
    id: 'white-choco-mocha',
    name: 'White Chocolate Mocha',
    price: '$2.79',
    description: 'Espresso, White Chocolate, Milk, Ice and Cream',
    image: menuPool[2]
  },
  {
    id: 'caffe-americano',
    name: 'Caffe Americano',
    price: '$3.06',
    description: 'Espresso Shots and Light Layer of Crema',
    image: menuPool[3]
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: '$4.03',
    description: 'Espresso, and Smoothed Layer of Foam',
    image: menuPool[4]
  },
  {
    id: 'vanilla-latte',
    name: 'Vanilla Latte',
    price: '$3.65',
    description: 'Espresso Milk With Flavor, and Cream',
    image: menuPool[5]
  },
  {
    id: 'iced-caramel-latte',
    name: 'Iced Caramel Latte',
    price: '$4.67',
    description: 'Espresso, Milk, Ice and Caramel Sauce',
    image: menuPool[6]
  },
  {
    id: 'espresso-macchiato',
    name: 'Espresso Macchiato',
    price: '$2.98',
    description: 'Rich Espresso With Milk and Foam',
    image: menuPool[7]
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    price: '$2.54',
    description: 'Espresso, vanilla-flavored syrup and milk',
    image: menuPool[8]
  },
  {
    id: 'iced-smoked-latte',
    name: 'Iced Smoked Latte',
    price: '$3.05',
    description: 'Espresso, ice, with smoked butterscotch',
    label: 'New',
    image: menuPool[9]
  },
  {
    id: 'iced-caffe-mocha',
    name: 'Iced Caffe Mocha',
    price: '$2.60',
    description: 'Espresso, bittersweet mocha sauce, milk and ice',
    image: menuPool[10]
  },
  {
    id: 'iced-gingerbread-latte',
    name: 'Iced Gingerbread Latte',
    price: '$3.92',
    description: 'Espresso, Milk, Ice, and Gingerbread Flavor',
    image: menuPool[11]
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'paper-pouch',
    name: 'Paper Pouch',
    price: 15.00,
    rating: 5,
    tag: 'Sale',
    image: productsPool[0],
    description: 'Artisan whole bean packaging with one-way degassing valve.'
  },
  {
    id: 'paper-bag',
    name: 'Paper Bag',
    price: 12.00,
    rating: 4,
    image: productsPool[1],
    description: 'Recyclable Kraft roast carrier with reinforced handles.'
  },
  {
    id: 'plastic-pouch',
    name: 'Plastic Pouch',
    price: 17.00,
    rating: 5,
    tag: 'Hot',
    image: productsPool[2],
    description: 'Moisture barrier nitrogen-flushed roast preservation pack.'
  },
  {
    id: 'coffee-pot',
    name: 'Coffee Pot',
    price: 24.00,
    rating: 5,
    image: productsPool[3],
    description: 'Borosilicate heat-resistant glass server with wooden neck grip.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Traditional Coffee',
    category: 'Coffee',
    image: galleryPool[0],
    aspect: 'square',
    description: 'Classic Italian espresso pulled on traditional lever-operated brass groups.'
  },
  {
    id: 'gal-2',
    title: 'Interior Ideas',
    category: 'Interior',
    image: galleryPool[1],
    aspect: 'square',
    description: 'Warm oak counters, brass finishings and relaxed velvet seating arrangements.'
  },
  {
    id: 'gal-3',
    title: 'Morning Habits',
    category: 'Morning Habits',
    image: galleryPool[2],
    aspect: 'square',
    description: 'The morning calm: slow pour-over filtration paired with daily newspapers.'
  },
  {
    id: 'gal-4',
    title: 'Coffee Decorations',
    category: 'Coffee Craft',
    image: galleryPool[3],
    aspect: 'square',
    description: 'Intricate rosetta and swan free-pour latte art crafted with silky microfoam.'
  },
  {
    id: 'gal-5',
    title: 'Your Favorite Place',
    category: 'Interior',
    image: galleryPool[4],
    aspect: 'square',
    description: 'Sunlit corner booths designed for reflection, reading, and pleasant conversations.'
  },
  {
    id: 'gal-6',
    title: 'Everyday Beauty',
    category: 'Coffee Craft',
    image: galleryPool[5],
    aspect: 'square',
    description: 'The golden stream of espresso forming thick, aromatic crema in warmed demitasse.'
  },
  {
    id: 'gal-7',
    title: 'Morning Coffee',
    category: 'Coffee',
    image: galleryPool[6],
    aspect: 'square',
    description: 'Freshly roasted single origin Ethiopian Yirgacheffe brewed via Chemex.'
  },
  {
    id: 'gal-8',
    title: 'Sweet Ideas',
    category: 'Bakery',
    image: galleryPool[7],
    aspect: 'square',
    description: 'Buttery flaky croissants, almond pain au chocolat, and artisan cinnamon pastries.'
  }
];

export const INSTAGRAM_PHOTOS = instagramPool;
