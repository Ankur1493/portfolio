export enum ProductLabel {
  Github = 'github',
  Live = 'live'
}

export type Product = {
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  label: ProductLabel;
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
