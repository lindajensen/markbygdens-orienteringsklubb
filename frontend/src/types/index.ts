import { PortableTextBlock } from "@portabletext/types";

export interface ExternalLink {
  text: string;
  url: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export interface NewsItem {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  teaser?: string;
  body: PortableTextBlock[];
  externalLinks?: ExternalLink[];
  category?: Category;
  tags?: string[];
  is_featured: boolean;
}

export interface BoardMember {
  _id: string;
  name: string;
  role: string;
  category: string;
}

export interface GalleryEvent {
  _id: string;
  title: string;
  eventLabel?: string;
  slug: {
    current: string;
  };
  eventDate?: string;
  description?: string;
  coverImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  images?: {
    asset: { url: string };
    alt?: string;
    caption?: string;
  }[];
}

export interface LinkItem {
  _id: string;
  name: string;
  logo: {
    asset: {
      url: string;
    };
  };
  description: string;
  url: string;
  category: "federation" | "club";
  order: number;
}

export interface SponsorItem {
  _id: string;
  name: string;
  logo: {
    asset: {
      url: string;
    };
  };
  website?: string;
  order: number;
}

export interface TrainingItem {
  _id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
}

export interface CoursePeriod {
  dates: string;
  location: string;
}

export interface CourseContact {
  name: string;
  phone: string;
}

export interface CourseItem {
  _id: string;
  year: number;
  mapImage?: {
    asset: {
      url: string;
    };
  };
  introduction?: string;
  periods: CoursePeriod[];
  information?: string[];
  paymentInfo?: PortableTextBlock[];
  contacts?: CourseContact[];
}
