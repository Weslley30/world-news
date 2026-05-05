type Size = "sm" | "md" | "lg";

export type CardComponentProp = {
  description: string;
  imageUrl: string;
  imageAlt: string;
  title?: string;
  category?: string;
  size?: Size;
  time?: string;
};

export type INews = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  date: string;
  section: string;
};

export type IFilterNewsCategory = {
  infos: INews[];
  category: string;
};

export type IFilterNewsSection = {
  infos: INews[];
  section: string;
};
