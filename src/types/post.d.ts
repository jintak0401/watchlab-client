export type Post = {
  slug: string;
  thumbnail: string;
  title: string;
  view: number;
  content: string;
  writer: {
    name: string;
    image: string;
  };
};

export type TPostSortBy = 'a2z' | 'z2a' | 'establishedAt' | null;
