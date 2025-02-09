(() => {
  // Type Aliases
  type UserId = string | number | boolean;
  let userId: UserId;

  function greeting(userId: UserId, size: ShirtSize) {
    if (typeof userId === 'string') {
      console.log(`Hello ${userId.toUpperCase()}`);
    } else if (typeof userId === 'number') {
      console.log(`Hello ${userId.toFixed(2)}`);
    } else {
      console.log(`Hello ${userId}`);
    }
  }

  // Literal Types
  type ShirtSize = 'small' | 'medium' | 'large';
  let size: ShirtSize = 'medium';

  greeting('dani', 'large');
})();
