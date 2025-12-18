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
