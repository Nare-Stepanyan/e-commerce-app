export type User = {
  id?: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  phone: string;
  password?: string;
};

export type Product = {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  count: number;
  price: number;
};

export type Order = {
  id: string;
  userId: string;
  date: string;
  items: Product[];
};
