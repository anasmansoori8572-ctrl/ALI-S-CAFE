import { CafeMenuItem, ProductItem, GalleryItem, EquipmentTab } from '../types';

export const HERO_SLIDES = [
  {
    id: 1,
    heading: 'THE HOME OF COFFEE',
    subtitleLine1: 'Lorem ipsum dolor sit amet, nec ne oficiis electram.',
    subtitleLine2: 'Dolore nominati vim et.',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider-img-2.jpg',
    emblem: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img-3.png',
    buttonText: 'READ MORE'
  },
  {
    id: 2,
    heading: 'IMPORTANCE OF COFFEE',
    subtitleLine1: 'Lorem ipsum dolor sit amet, nec ne oficiis electram.',
    subtitleLine2: 'Dolore nominati vim et.',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider.jpg',
    emblem: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img.png',
    buttonText: 'READ MORE'
  },
  {
    id: 3,
    heading: 'SPECIAL COFFEE BEANS',
    subtitleLine1: 'Lorem ipsum dolor sit amet, nec ne oficiis electram.',
    subtitleLine2: 'Dolore nominati vim et.',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/main.jpg',
    emblem: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img-2.png',
    buttonText: 'READ MORE'
  },
  {
    id: 4,
    heading: 'BREWED TO PERFECTION',
    subtitleLine1: 'Lorem ipsum dolor sit amet, nec ne oficiis electram.',
    subtitleLine2: 'Dolore nominati vim et.',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-slider-4.jpg',
    emblem: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/home-1-slider-img-4.png',
    buttonText: 'READ MORE'
  }
];

export const THREE_FEATURES = [
  {
    number: '01',
    title: 'BEAUTIFUL PLACE',
    description: 'Aliquet nisl integer platea ipsum aliquet integer turpis adipiscing maecenas. Magna sem adipiscing elementum pretium.',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-1.jpg'
  },
  {
    number: '02',
    title: 'FEEL THE COFFEE',
    description: 'Aliquet nisl integer platea ipsum aliquet integer turpis adipiscing maecenas. Magna sem adipiscing elementum pretium.',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-2.jpg'
  },
  {
    number: '03',
    title: 'FULL TASTE',
    description: 'Aliquet nisl integer platea ipsum aliquet integer turpis adipiscing maecenas. Magna sem adipiscing elementum pretium.',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-img-3.jpg'
  }
];

export const EQUIPMENT_TABS: EquipmentTab[] = [
  {
    id: 'coffeemaker',
    title: 'Coffeemaker',
    subtitle: 'PRECISION BREWING SYSTEMS',
    description: 'Designed for optimal extraction and consistent brewing temperature. Our commercial-grade pour-over systems extract bright aromatics and nuanced tasting notes with thermal stability within 0.2°C.',
    icon: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-icon-img-1.png',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/main-home-project-pres-1.jpg',
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
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/main-home-project-pres-2.jpg',
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
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/main-home-project-pres-3.jpg',
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
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-1-img-6.png',
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
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-150x150.jpg'
  },
  {
    id: 'caffe-mocha',
    name: 'Caffe Mocha',
    price: '$3.67',
    description: 'Espresso With Milk, and Whipped Cream',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-2-150x150.jpg'
  },
  {
    id: 'white-choco-mocha',
    name: 'White Chocolate Mocha',
    price: '$2.79',
    description: 'Espresso, White Chocolate, Milk, Ice and Cream',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-3-150x150.jpg'
  },
  {
    id: 'caffe-americano',
    name: 'Caffe Americano',
    price: '$3.06',
    description: 'Espresso Shots and Light Layer of Crema',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-4-150x150.jpg'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: '$4.03',
    description: 'Espresso, and Smoothed Layer of Foam',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-5-150x150.jpg'
  },
  {
    id: 'vanilla-latte',
    name: 'Vanilla Latte',
    price: '$3.65',
    description: 'Espresso Milk With Flavor, and Cream',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-6-150x150.jpg'
  },
  {
    id: 'iced-caramel-latte',
    name: 'Iced Caramel Latte',
    price: '$4.67',
    description: 'Espresso, Milk, Ice and Caramel Sauce',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-8-150x150.jpg'
  },
  {
    id: 'espresso-macchiato',
    name: 'Espresso Macchiato',
    price: '$2.98',
    description: 'Rich Espresso With Milk and Foam',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-7-150x150.jpg'
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    price: '$2.54',
    description: 'Espresso, vanilla-flavored syrup and milk',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-9-150x150.jpg'
  },
  {
    id: 'iced-smoked-latte',
    name: 'Iced Smoked Latte',
    price: '$3.05',
    description: 'Espresso, ice, with smoked butterscotch',
    label: 'New',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-10-150x150.jpg'
  },
  {
    id: 'iced-caffe-mocha',
    name: 'Iced Caffe Mocha',
    price: '$2.60',
    description: 'Espresso, bittersweet mocha sauce, milk and ice',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-11-150x150.jpg'
  },
  {
    id: 'iced-gingerbread-latte',
    name: 'Iced Gingerbread Latte',
    price: '$3.92',
    description: 'Espresso, Milk, Ice, and Gingerbread Flavor',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h-1-list-icon-img-12-150x150.jpg'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'paper-pouch',
    name: 'Paper Pouch',
    price: 15.00,
    rating: 5,
    tag: 'Sale',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-1.jpg',
    description: 'Artisan whole bean packaging with one-way degassing valve.'
  },
  {
    id: 'paper-bag',
    name: 'Paper Bag',
    price: 12.00,
    rating: 4,
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-2.jpg',
    description: 'Recyclable Kraft roast carrier with reinforced handles.'
  },
  {
    id: 'plastic-pouch',
    name: 'Plastic Pouch',
    price: 17.00,
    rating: 5,
    tag: 'Hot',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-3.jpg',
    description: 'Moisture barrier nitrogen-flushed roast preservation pack.'
  },
  {
    id: 'coffee-pot',
    name: 'Coffee Pot',
    price: 24.00,
    rating: 5,
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2016/03/product-image-4.jpg',
    description: 'Borosilicate heat-resistant glass server with wooden neck grip.'
  }
];

// REPLACING BLOG WITH GALLERY:
// Authentic Barista gallery images from barista.qodeinteractive.com/elementor/gallery/
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Traditional Coffee',
    category: 'Coffee',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h6-featured-1.jpg',
    aspect: 'square',
    description: 'Classic Italian espresso pulled on traditional lever-operated brass groups.'
  },
  {
    id: 'gal-2',
    title: 'Interior Ideas',
    category: 'Interior',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h6-featured-2.jpg',
    aspect: 'square',
    description: 'Warm oak counters, brass finishings and relaxed velvet seating arrangements.'
  },
  {
    id: 'gal-3',
    title: 'Morning Habits',
    category: 'Morning Habits',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h6-featured-3.jpg',
    aspect: 'square',
    description: 'The morning calm: slow pour-over filtration paired with daily newspapers.'
  },
  {
    id: 'gal-4',
    title: 'Coffee Decorations',
    category: 'Coffee Craft',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h6-featured-4.jpg',
    aspect: 'square',
    description: 'Intricate rosetta and swan free-pour latte art crafted with silky microfoam.'
  },
  {
    id: 'gal-5',
    title: 'Your Favorite Place',
    category: 'Interior',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h6-featured-5.jpg',
    aspect: 'square',
    description: 'Sunlit corner booths designed for reflection, reading, and pleasant conversations.'
  },
  {
    id: 'gal-6',
    title: 'Everyday Beauty',
    category: 'Coffee Craft',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h6-featured-6.jpg',
    aspect: 'square',
    description: 'The golden stream of espresso forming thick, aromatic crema in warmed demitasse.'
  },
  {
    id: 'gal-7',
    title: 'Morning Coffee',
    category: 'Coffee',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h6-featured-7.jpg',
    aspect: 'square',
    description: 'Freshly roasted single origin Ethiopian Yirgacheffe brewed via Chemex.'
  },
  {
    id: 'gal-8',
    title: 'Sweet Ideas',
    category: 'Bakery',
    image: 'https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/h6-featured-8.jpg',
    aspect: 'square',
    description: 'Buttery flaky croissants, almond pain au chocolat, and artisan cinnamon pastries.'
  }
];

export const INSTAGRAM_PHOTOS = [
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=400&auto=format&fit=crop'
];
