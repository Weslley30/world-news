type Size = "sm" | "md" | "lg";


export type CardComponentProp = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  size?: Size;
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

export type IFilterNews = {
  infos: INews[];
  category: string;
};
