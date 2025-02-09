import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product): void => {
  products.push(data);
};

export const calculateStock = (): number => {
  return products.reduce((acc, product) => acc + product.stock, 0);
};
