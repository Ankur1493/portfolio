export type Blog = {
  title: string;
  description: string;
  link: string;
  date: string;
  image: string;
  slug: string;
  // rest
  [key: string]: any;
};
