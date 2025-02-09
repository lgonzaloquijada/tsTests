(() => {
  let userId: string | number;
  userId = 10;
  userId = 'Luis';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`Hello ${myText.toUpperCase()}`);
    } else {
      console.log(`Hello ${myText.toFixed(2)}`);
    }
  }
  greeting(10);
  greeting('Luis');
})();
