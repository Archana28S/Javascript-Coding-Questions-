1.  Object Destructuring : In JavaScript Destructuring allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. 
       It allows us to extract multiple properties, items from an array at a time. 
       Syntax: 
       let {variable1, variable2} = object;  console.log (variable1, variable2); 

//Assign values to variables names. 
let employee = {    

    firstname: 'Nida', 
    lastname: 'Shah', 
    dateofbirth: '2001' 

};
const { firstname, lastname, dateofbirth } = employee; //(Here we print the values of variables in the employee)
console.log( firstname, lastname, dateofbirth);

//Assign new variables names. 
var { firstname:fname, lastname:lname, dateofbirth:dob } = employee; //(Here we assign new variable names to the existing variables in the employee)
console.log( fname, lname, dob); 

//2.  Array Destructuring : similar to object destructuring.
const cities = ["Solan,", "Chandigarh,", "NewDelhi"];
const[c1,c2,c3]=cities; //(Here we print the values of variables in the cities array.)
console.log(c1,c2,c3);

//3.  Spread Operator : It allows us to quickly copy all or some part of an existing array or object into another array or object.
const person = {...employee};
console.log(person); //(Here we create a copy of employee as person.)

//If we want to change or add a specific property then write it as
const person1 ={...employee,firstname:'Shina', city:'Punjab'};
console.log(person1); //(Here we add a new property city and modified the name property in employee as person1)

const names = ['Viraj','Rishab','Vaibhav','Riyansh'];
const names1 = ['Shivansh',...names.splice(2,0,'Sid'),'Ritwik'];  (Here we add Shivansh, Ritwik names 
                                                                  at the first and last position respectively 
                                                                  and add Sid in the middle of the array.)
console.log(names);
console.log(names1);

//4.  forEach function : It does not return any value. It return undefined by default.

const numbers= [2,4,6,4,7,3,6,7];
const array=numbers.forEach(function(elements){
    return elements *2;  
});        //(return undefined by default.)
console.log(array);

//5.  for in loop: is used for loop over all keys of an object.
const data ={
    name : 'Jaskaran Kaur',
    age : 21,
    city : 'chandigarh',
    state : 'Punjab'
};
for (let information in data){    //(Here we print the keys with their values of data.)
    const data1 = ` ${information} = ${data[information]}`;
    console.log(data1);
}


//6.  for of loop : allows us to iterate over iterable objects such as array.

const students = ['Jiya','Suchi','Palak','Niya'];
for (let girls of students){  //(Used for array)
    console.log(girls);
}

const lang = 'JavaScript'; //(Used for string)
for (let char of lang){
    console.log(char);
}


//7.  String / template literals : Template literals are enclosed by backtick (`) characters instead of double or single quotes. Used to make code look easy and clean.
let employee1 = {    
    firstname: 'Nida', 
    lastname: 'Shah', 
    DOB: '2001' 
};
for (let key in employee1){
    const res = `Result is ${key} = ${employee1[key]}`;  //(Here we have used template literals.)
    console.log(res);
}

//8.  rest operator : It creates an extra array to store extra arguments or values which are always in the end.

function sum(a,b,...args){
    console.log(args);
}  //(here values a,b are assigned to 5,6 and rest of the numbers are stored as args. result is returned as undefined.)
let result = sum(5,6,2,6,7,8);
console.log('sum = ',result);

//To add multiple values.
function add(a,...values){
    let add = a;
    console.log(values);
    for(let elements of values){  //(Here we compute the sum.)
        add = add + elements;
    }
    return add;
}
let result1 = add(2,4,5,8,7);
console.log(result1);

         //OR
         
let array1 = [7,4,5,9,1,3];
let add1 = 0;
for(let value of array1){  //(Here we print the sum of the numbers in the array1 using for of loop.)
    add1 = add1 + value;
}
console.log(add1);



    
    
