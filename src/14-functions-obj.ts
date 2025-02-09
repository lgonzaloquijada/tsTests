(() => {
  const login2 = (email: string, password: string) => {
    console.log(email, password);
  };

  const login = (user: { email: string; password: string }) => {
    console.log(user.email, user.password);
  };

  login2('luis@mail.com', '1234');

  login({
    email: 'luis@mail.com',
    password: '1234',
  });

  type Sizes = 'small' | 'medium' | 'large';
  const products: any[] = [];

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
