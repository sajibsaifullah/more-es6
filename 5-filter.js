const numbers = [12, 5, 23, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(numbers => numbers > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(n => n % 2 == 0);
const odd = numbers.filter(n => n % 2 !== 0);
// console.log(bigNums);
// console.log(tiny);
// console.log(even);
// console.log(odd);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];

// const expensive = products.filter(product => product.price >= 100000);
// const expensive = products.filter(product => product.price >= 100);
const expensive = products.filter(product => product.price < 100);
console.log(expensive);





/* const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const evenName = friends.filter(friend => friend.length % 2 == 0);
console.log(evenName); */