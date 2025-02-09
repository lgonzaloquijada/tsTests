import { groupBy } from 'lodash';

const data = [
  { username: 'john', role: 'admin' },
  { username: 'jane', role: 'user' },
  { username: 'joe', role: 'user' },
  { username: 'jake', role: 'admin' },
];

let grouped = groupBy(data, 'role');
console.log(grouped);
grouped = groupBy(data, (item) => item.role);
console.log(grouped);
