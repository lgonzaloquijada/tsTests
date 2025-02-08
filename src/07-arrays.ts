(() => {
  let prices: number[] = [100, 200, 300, 400];
  //prices.push('asd'); // Error: Argument of type '"asd"' is not assignable to parameter of type 'number'.
  //prices.push(true); // Error: Argument of type 'true' is not assignable to parameter of type 'number'.
  //prices.push({}); // Error: Argument of type '{}' is not assignable to parameter of type 'number'.
  prices.push(500);
  console.log('Prices: ' + prices);

  let values = ['a', true];
  //values.push(100); // Error: Argument of type '100' is not assignable to parameter of type 'string | boolean'.
  console.log('Values: ' + values);

  let mixed: (string | number | boolean | {})[] = ['a', 1];
  mixed.push(true);
  mixed.push('b');
  mixed.push(2);
  mixed.push([]);
  mixed.push({});
  console.log('Mixed: ' + mixed);

  let numbers: number[] = [1, 2, 3, 4, 5];
  console.log('Numbers 1: ' + numbers);
  numbers = numbers.map((item) => item * 2);
  console.log('Numbers 2: ' + numbers);
})();
