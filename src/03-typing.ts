(() => {
  let myProduct = 'Product 1';
  let myPrice = 100;

  //myProduct = 200; // Error: Type 'number' is not assignable to type 'string'.
  myProduct = 'CHanged';
  console.log('before to lower:' + myProduct);
  myProduct = myProduct.toLocaleLowerCase();
  console.log('after to lower' + myProduct);

  const myProductStock = 1000;
  //myProductStock = 2000; // Error: Cannot assign to 'myProductStock' because it is a constant or a read-only property.
})();
