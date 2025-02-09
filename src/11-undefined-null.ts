(() => {
  let myNumber: number = 10.22;
  let myName: string = 'Dani';
  //myNumber = null; // Error: Type 'null' is not assignable to type 'number'.
  //myName = undefined; // Error: Type 'undefined' is not assignable to type 'string'.

  // let myNull = null; //myNull is any
  // let myUndefined = undefined; //myUndefined is any
  let myBull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber2: number | null = null;
  let myName2: string | undefined = undefined;

  function hi(name: string | null): void {
    let hello: string = 'Hello';
    if (name) {
      hello += ` ${name}`;
    } else {
      hello += ' World';
    }
    console.log(hello);
  }

  function hi2(name: string | null): void {
    let hello: string = 'Hello';
    hello += name?.toLowerCase() || ' World';
    console.log(hello);
  }
  hi2('Luis');
  hi2(null);
})();
