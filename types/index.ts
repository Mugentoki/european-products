export type Country = {
  name: string;
  alpha2: string;
  memberships: string[];
};

export type Product = {
  name: string;
  company: string;
  origin: string;
  description: string;
  category: string;
  website: string;
  alternatives: Product[] | string;
};