/* Javascript is Dynamic typing language.

A variable is used to store values. In javascript there are three methods for defining a variable that is let, var, and const.

We have two types of data types in this.
1. Primitive data types 
2. Reference data types.

Ternery operators are used instead of if else statements.

Objects in js is defined as reference type which store value in key-pair mode.

Some functions are in built in javascript such as map, filter, find, forEach, reduce, includes, push, pop, shift, unshift, etc.
 
We will use all the functions with various examples.

*/

1. map() function in array : Creates a new array from calling a function for every array(element).
 Can't modify the original array.

 Examples :
 a). Return a new array with the square root of all Elements.
 const array = [2,4,9,16,25];
 const newArray = array.map(Math.sqrt);
 console.log(newArray);

 b). Multiply all the values in the array with 10.
 const array = [2,4,9,16,25];
 const newArray1 = array.map(function(elements){
    return elements * 10;

 })
 console.log(newArray1);

 2. filter() function in array : Creates a new array filled with elements which passes the necessary conditions.
 It doesn't the original array.

 Examples: Return an array of all values in ages that are 18 or above.
  
c). const diffAges = [18,21,32,25,14,11];
const ages = diffAges.filter(function(checkAges){
    return checkAges >= 18;
}) 
console.log(ages);

3. forEach() function in array: Method is used to modify original array.
The forEach() method is an iterative method. 
It calls a provided callbackFn function once for each element in an array in ascending-index order.
Returns undefined.

Examples: 
d). Call a function for each values in the array.
const fruits = ['apple','orange','mango','litchi','strawberry'];
const fruitsArray = fruits.forEach (function(values){
    return values;
})
console.log(fruitsArray);

e). Compute the sum of array give below.
const numbers = [2,6,9,4,5,8];
let sum = 0;
const numbersInArray = numbers.forEach(function(elements){
    sum = sum + elements;
    return sum;
})
console.log(numbersInArray);




