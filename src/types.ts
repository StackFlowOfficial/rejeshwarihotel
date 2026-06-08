export interface Room {
  id: string;
  name: string;
  type: 'solo' | 'business' | 'family';
  price: number;
  ac: boolean;
  wifi: boolean;
  bedType: string;
  capacity: string;
  description: string;
  longDescription: string;
  image: string;
  amenities: string[];
  size: string;
  topChoice?: boolean;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  userType: string;
}

export interface GalleryItem {
  id: string;
  category: 'all' | 'exterior' | 'rooms' | 'reception' | 'amenities';
  title: string;
  image: string;
}
