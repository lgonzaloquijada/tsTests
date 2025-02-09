(() => {
  const calculateTotal = (prices: number[]): number => {
    return prices.reduce((total, price) => total + price, 0);
  };

  const printTotal = (prices: number[]): void => {
    console.log(calculateTotal(prices));
  };

  console.log(calculateTotal([1, 2, 3, 4, 5]));
  printTotal([1, 3, 5, 7, 9]);
})();
