import { Product } from "../../type";

export const filterBySearch = (
  products: Product[],
  search: string
): Product[] => {
  return products.filter((product: Product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
};

export const filterByPrice = (
  products: Product[],
  price: number
): Product[] => {
  return products.filter((product: Product) => product.price <= price);
};

export const filterBySort = (products: Product[], sort: string): Product[] => {
  const sortedProducts = [...products];

  const sortFunctions: Record<string, (a: Product, b: Product) => number> = {
    "lowest-price": (a, b) => a.price - b.price,
    "highest-price": (a, b) => b.price - a.price,
    "a-z": (a, b) => a.title.localeCompare(b.title),
    "z-a": (a, b) => b.title.localeCompare(a.title),
  };

  if (sort in sortFunctions) {
    sortedProducts.sort(sortFunctions[sort]);
  }

  return sortedProducts;
};
