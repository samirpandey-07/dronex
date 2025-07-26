export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  bio: string;
}

export interface RoadmapItem {
  id: number;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'ongoing' | 'planned';
  category: 'development' | 'workshop' | 'competition';
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  registrationLink: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  title: string;
  description: string;
}