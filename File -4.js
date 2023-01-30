                                      //  Assignment -4 

/*High order functions: Basically, a function which takes another function as an argument or returns 
a function is known as a higher order function.We have some functins that are high order functions 
such as map(), reduce(), filter(), and forEach(). */

//Example: 1. Using filter function,find the odd one out from the arr.       
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function filterOdd(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterOdd(arr));

        //OR with arrow function 

const oddArray = arr.filter(ele => ele % 2 != 0);
console.log(oddArray);


// Example 2. : Using reduce function, compute the sum of an array.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sumofArr = 0;
const result = array.reduce(function(accumulator, currentValue){
    sumofArr = accumulator + currentValue;
    return sumofArr;
})
console.log(result);

   // OR using arrow functions   

const sumofArray = 0;
const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue,sumofArray);
console.log(sumWithInitial);


// Example 3. : Using forEach function, return the array by multiplying the values of array with 2 
const numbers = [2,4,6,4,7,3,6,7];
const resultArray = numbers.forEach(function(elements){
    return elements *2;  
});        //(return undefined by default.)
console.log(resultArray);

 //Or using arrow functions

const array=numbers.forEach(elements => elements*2);
console.log(array);


// Example 4. : Using map function, return the array by multiply all the values in the array with 10.
const nums = [2,4,9,16,25];
const newArray1 = nums.map(function(elements){
   return elements * 10;
})
console.log(newArray1);

// Or with arrow functions 

const newArr = nums.map(elements=> elements*10);
console.log(newArr);

// Few questions of array functions. 

/* 5. a) Cloning an object : "Cloning" an object in JavaScript means creating a new object with the same 
properties as the original object. Objects in JavaScript are stored by reference, which means that two
variables can point to the same object in memory. Modifying one object variable can impact other variables. */

const person = {
  firstName :'Aaisha',
  lastName : 'Mehra',
  Id : 01,
  State : 'Goa'
}
const newPerson = person;
console.log(newPerson);

//  By using spread operator, we can also do cloning of an object. 
const states = ['Goa','Punjab','Himachal Pradesh','Delhi'];
const newStates = [...states];
console.log(newStates);

// OR we can also join 2 arrys by using spread operator.

const array1 =[1,2,3,4,5];
const arrays = ['Delhi','Goa','Punjab','Kolkata','UP'];
const newArray = [...array1,...arrays];
console.log(newArray);
 
// OR we can join 2 arrys also by using concat.

const array2 =[1,2,3,4,5];
const arrays2 = ['Delhi','Goa','Punjab','Kolkata','UP'];
const newArray2 = array2.concat(arrays2);
console.log(newArray2);

// 7. sort array elements                  
const unsortedArray = [8,4,1,7,3,2,5,9];
unsortedArray.sort();
console.log(unsortedArray);

// OR using arrow funcion

let numberForSorting = [0, 1, 2, 3, 10, 20, 30];
numberForSorting.sort((a, b) => a - b);
console.log(numberForSorting);

// 8. By using str and its different methods we can perform various operations on strings.

const str = 'This message is deleted. Kindly refresh the page to reload the message.';
console.log(str);
console.log(str.length);
console.log(str[11]);
console.log(str.includes('the'));
console.log(str.indexOf('the'));
console.log(str.toUpperCase());
console.log(str. toLowerCase());
console.log(str.trim());
console.log(str.trimLeft());
console.log(str.trimRight());
console.log(str.split());
console.log(str.replace("First"));
console.log(str.startsWith("This"));
console.log(str.endsWith("."));

