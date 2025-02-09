(() => {
  type Sizes = 'small' | 'medium' | 'large';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];
  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }): void => {
    products.push(data);
  };

  addProduct({
    title: 'Shoes',
    createdAt: new Date(),
    stock: 100,
    size: 'medium',
  });
  addProduct({
    title: 'Shoes',
    createdAt: new Date(),
    stock: 100,
  });
  console.log(products);
})();
