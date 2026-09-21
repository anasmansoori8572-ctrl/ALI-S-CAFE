export type PageView = 'home' | 'about' | 'gallery' | 'contact';

export interface CafeMenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  label?: string;
  image: string;
  category?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  tag?: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Coffee' | 'Interior' | 'Morning Habits' | 'Coffee Craft' | 'Bakery';
  image: string;
  aspect?: 'square' | 'tall' | 'wide';
  description?: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export interface EquipmentTab {
  id: string;
  title: string;
  icon: string;
  subtitle: string;
  description: string;
  bullets: string[];
  image: string;
}

export interface ReservationData {
  guests: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email?: string;
}
