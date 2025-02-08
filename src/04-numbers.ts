(() => {
  let productPrice = 100;
  productPrice = 200;
  console.log('Product price: ' + productPrice);

  let customerAge: number = 18;
  console.log('Customer age: ' + customerAge);

  let productInStock: number;
  productInStock = 1000;
  console.log('Product in stock: ' + productInStock);

  if (productInStock > 0) {
    console.log('Product is available');
  }

  let discount = parseFloat('10.5');
  console.log('Discount: ' + discount);

  let nan = NaN;
  if (nan >= 0) {
    console.log('Nan is less than 0');
  } else {
    console.log('Nan is not less than 0');
  }

  if (isNaN(nan)) {
    console.log('Nan is not a number');
  }

  let hex = 0xfff;
  console.log('Hex: ' + hex.toString(16));

  let bin = 0b1001;
  console.log('Binary: ' + bin.toString(2));
  let bin2 = 0b1010;
  console.log('Binary 2: ' + bin2.toString(2));
  console.log('Binary sum: ' + (bin + bin2).toString(2));
})();
