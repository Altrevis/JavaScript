const clone1 = { ...person };
const clone2 = { ...person };

const samePerson = person;

person.age += 1;
person.country = 'FR';

console.log('Original Person:', person);
console.log('Clone 1:', clone1);
console.log('Clone 2:', clone2);
console.log('Same Person:', samePerson);
  