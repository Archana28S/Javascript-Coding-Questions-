/* 25-01-2023

// Function declarations vs expressions

function show(){
    console.log('hello');
}
show();


let show2 = function show2(){
    console.log('hi');
}
//function (a, show2){   
show2();

//array functions -  some  and every

const numbers = [1, 10, 2, 3];
const result = numbers.every(function(number){
    return number >= 0;
})
if(result){
    console.log('all positive values');
}else{
    console.log('not positive');
}
console.log(result);


//array functions -  some  and every
const numbers = [-1, 10, -2, -3];
const result = numbers.some(function(number){
    return number >= 0;
})
if(result){
    console.log('atleast one positive value');
}else{
    console.log('not positive');
}
console.log(result);

//empty an array
let numbers = [1,2,3,4];

// solution 1
numbers = [];

// solution 2
numbers.length = 0;

// solution 3
numbers.splice(0, numbers.length)

// solution 4
while(numbers.length > 0){
    numbers.pop();
}
console.log(numbers);

//array reduce
//compute sum of arrays

const numbers = [1,2,3,4,5];
const result = numbers.reduce(function(sum, currentValue) {
return sum + currentValue;    
}, 0);

//  array.reduce(function(accumulator, currentValue){}, defaultValue);

let sum = 0;
for(let number of numbers){
    console.log(number);
    sum  = sum + number;   
}
console.log(sum);


let age=28;
console.log(age > 18 && 'Eligible to cast vote');
// console.log(age < 18 && 'not Eligible to cast vote');
// console.log(result);

// let result = age ? age : 0;
let result = age || 0;
console.log(result); */


// Assignment -3 

/* 1. Function Declaration  vs Expression
    
    Function Declaration:
A function declaration also known as a function statement declares a function with a function keyword. The function declaration must have a function name.
Function declaration does not require a variable assignment as they are standalone constructs and they cannot be nested inside a functional block.
These are executed before any other code.
The function in function declaration can be accessed before and after the function definition.*/

//Example:
function show(){
    console.log('Welcome everyone');
}
show();
                   
/*  Function Expression:
A function Expression is similar to a function declaration without the function name.
Function expressions can be stored in a variable assignment.
Function expressions load and execute only when the program interpreter reaches the line of code.
The function in function expression can be accessed only after the function definition.    */

//Example:
const show1 = function show2(){
    console.log('Hello everyone');
    }
    show2();        


   /* 2. Array.every function :
   The Array.every() method in JavaScript is used to check whether all the elements of the array satisfy the given condition or not. 
   Return answer as true or false. */

   // Example:
   const arr = [-4,4,6,0,23,-7,1];
   const printValue = arr.every(function(arr){
    return arr <=0;
   })
   console.log(printValue);


   /* 3. The Array.some() method in JavaScript is used to check whether at least one of the elements of the array satisfies the
    given condition or not. The only difference is that the some() method will return true if any predicate is true while 
    every() method will return true if all predicates are true.   */
    //Example:

    const array = [84,56,86,65,67,23,54,57,35,47,87];
    const rest = array.some(function(item){
        return item % 5 ==0;
    })
    console.log(rest);


    // 4.How to empty an array  
   // Solution-1:
    let numbers = [13,67,45,35,88,23,54,54];
    numbers.length = 0;
    console.log(numbers);
    
    //Solution-2:
    numbers =[];
    console.log(numbers);  
    
    //() This method is used but have an exception. You can not use this method when you copy one array into another array to empty the string 
    
    const numbers = [13,67,45,35,88,23,54,54];
    let numbers1 = numbers;
    numbers=[];
    console.log(numbers);
    console.log(numbers1);

   //Solution-3:
    numbers.splice(0,numbers.length);
    console.log(numbers);

    //Solution-4:
    while(numbers.length>0){
    numbers.pop();   
    }
    console.log(numbers);
    
    // 5. array reduce() function : 
    //The reduce() method executes a reducer function on each element of the array and returns a single 
    //output value.

    //Example:
    const message = ["JavaScript ", "is ", "fun."];
    let joinedString = message.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
    },0);
    console.log(joinedString);

    //Problem set: Sum of arrays.
    //Using reduce function.
    const summ = [7,6,3,2,5,0,,1,8];
    const output = summ.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
    console.log(output);

    //OR

    let numbers = [1,7,6,2,8,3,5,4];
    let sum = 0;
    for(let number of numbers){
        sum = sum + number;
    }
    console.log(sum);

    // 6. Array includes funtion :
    //This method returns value if an array contains a specified value. It returns false if the value
    // is not present. This method is case sensitive.

    //Example:
    const code = ['#01CODE','#02CODE','#03CODE','#04CODE'];
    const find = code.includes('#02CODE');
    console.log(find);

    //Problem statement : Check whether a person is able to cast vote or not.

    let age = 16;
    let check = age>18 && 'Eligible to cast vote';
    console.log(check);
                    
                   // OR 

    console.log(age>18 && 'Eligible to cast vote');
    console.log(age<18 && 'Not eligible to cast vote');
     
                   // OR 

    let age1 = 27;
    let result = age1>18 ? age1 : null;
    console.log(result);        

                   // OR 
    
    let result1 = age1>18 || 0;
    console.log(result1);
   
   // 7. Arrow functions:
   //They are equivalent to our regular functions. It allows us to write functions quickly and more consizely. 
  // Arrow functions might have multiple statements inside it.

   //Example:
   const greet = () => {
    console.log('Good Morning');
    console.log('Have a nice day');
   }
   greet();

           //OR 

    const doSum =(a,b) =>{
       console.log('sum =',a+b);
   }
    doSum(5,7);


// 8. Javascript Hoisting:
//Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. 

// using test before declaring
var test;
console.log(test); // undefined

/*In hoisting, though it seems that the declaration has moved up in the program, the actual thing that
happens is that the function and variable declarations are added to memory during the compile phase. 


-----Variable Hoisting:
In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.*/ 

// program to display value
a = 5;
console.log(a);
var a; // 5

// However in JavaScript, initializations are not hoisted. For example,
// program to display value
console.log(a);
var a = 5;  //undefined

//Also, when the variable is used inside the function, the variable is hoisted only to the top of the function. For example,

// program to display value
var a = 4;
function greet() {
b = 'hello';
console.log(b); // hello
var b;
}
greet(); // hello
console.log(b);

/*output
hello
Uncaught ReferenceError: b is not defined

(In the above example, variable b is hoisted to the top of the function greet and becomes a local variable. 
Hence b is only accessible inside the function. b does not become a global variable.)

Note: In hoisting, the variable declaration is only accessible to the immediate scope.

If a variable is used with the let keyword, that variable is not hoisted. For example,*/

// program to display value
a = 5;
console.log(a);
let a; // error


// ----Function Hoisting:
// A function can be called before declaring it. For example,*/

// program to print the text
greet();

function greet() {
console.log('Hi, there.');
}

/*However, when a function is used as an expression, an error occurs because only declarations 
are hoisted. For example; */

// program to print the text
greet();

let greet = function() {
console.log('Hi, there.');
}

/* Hoisting can cause undesirable outcomes in your program. And it is best to declare variables 
and functions first before using them and avoid hoisting.
In the case of variables, it is better to use let than var.*/

    
    
