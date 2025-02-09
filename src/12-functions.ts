(() => {
  type Sizes = 'small' | 'medium' | 'large';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ): string {
    return `{
      "title": "${title}",
      "createdAt": ${createdAt},
      "stock": ${stock},
      "size": "${size}"
    }`;
  }

  const createProductToJsonv2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => ({
    title: title,
    createdAt: createdAt,
    stock: stock,
    size: size,
  });

  const product1 = createProductToJson('Shirt', new Date(), 10, 'medium');
  console.log(product1);

  const product2 = createProductToJsonv2('Shirt', new Date(), 10);
  console.log(product2);
})();
