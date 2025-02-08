(() => {
  let isEnable = true;
  //isEnable = 'as'; // Error: Type 'string' is not assignable to type 'boolean'.
  //isEnable = 1212; // Error: Type 'number' is not assignable to type 'boolean'.
  isEnable = false;
  console.log('Is enable: ' + isEnable);

  let isNew: boolean = false;
  console.log('Is new: ' + isNew);

  const random = Math.random();
  console.log('Random: ' + random);
  isNew = random >= 0.5;
  console.log('Is new: ' + isNew);
})();
