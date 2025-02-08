(() => {
  let productTitle: string = 'Product 1';
  //productTitle = 200; // Error: Type 'number' is not assignable to type 'string'.
  //productTitle = null; // Error: Type 'null' is not assignable to type 'string'.
  //productTitle = undefined; // Error: Type 'undefined' is not assignable to type 'string'.
  //productTitle = () => {}; // Error: Type '() => void' is not assignable to type 'string'.
  //productTitle = 123; //Error: Type 'number' is not assignable to type 'string'.
  productTitle = 'Product 2';
  console.log('Product title: ' + productTitle);

  const productDescription: string = "I'm a product description";
  console.log('Product description: ' + productDescription);

  let productPrice = 100;
  let isNew = true;

  const summary = `
    title: ${productTitle},
    description: ${productDescription},
    price: ${productPrice},
  `;
  console.log('Summary: ' + summary);
})();
