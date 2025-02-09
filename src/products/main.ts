import { addProduct, calculateStock, products } from './product.service';

addProduct({
  title: 'Pro1',
  createdAt: new Date(),
  stock: 5,
  size: 'medium',
});
addProduct({
  title: 'Pro2',
  createdAt: new Date(),
  stock: 7,
});

console.log(`Products: ${JSON.stringify(products)}`);
console.log(`Stock: ${calculateStock()}`);
