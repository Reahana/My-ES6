const max = Math.max(12, 45,89);
const numbers = [12,56,999,896];
const large = Math.max(...numbers)
console.log(...numbers);
console.log(large);
const array = [...numbers]
array.push(777);
console.log(array);
const newNum = [23,780,...array,9]
console.log(newNum);