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

export interface NewsArticle {
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
