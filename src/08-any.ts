(() => {
  let myAny: any = 'Hello';
  myAny = 100;
  myAny = true;
  myAny = {};
  myAny = [];
  console.log('MyAny: ' + myAny);

  myAny = 'Hello';
  console.log('MyAny: ' + myAny);

  const rta = (myAny as string).toLocaleLowerCase();
  console.log('MyAny: ' + rta);

  const rta2 = (<string>myAny).toLocaleLowerCase();
  console.log('MyAny: ' + rta2);
})();
