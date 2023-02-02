/*Question 1:
Learn about below array functions in Javascript and do an example exercise for each.
array.findIndex(): The findIndex() method executes a function for each array element.This method returns 
the index (position) of the first element that passes a test and returns -1 if no match is found.It does
not execute the function for empty array elements. This method does not change the original array.  */

//  a). Return the elements greater than or equal to 70.
const digits= [45,67,32,78,43,10,29,65];
const findDigits= digits.findIndex(function(elements) {
    return elements >= 70;
});
console.log(findDigits);


/*array.fill(): The Javascript arr.fill() method is used to fill the array with a given static value. 
The value can be used to fill the entire array or it can be used to fill a part of the array. Return 
value: This method does not return a new array. Instead of it modifies the array on which this method 
is applied.
Syntax:
arr.fill(value, start, end)   */

// b). fill the array with value 10 at 3rd index and only one value should be added.
const unFilled = [2,8,4,3,5,7,9,1];
unFilled.fill(10,3,4);
console.log(unFilled);


/*array.at() : The at() method takes an integer value and returns the item at that index, allowing for
positive and negative integers. Negative integers count back from the last item in the array.
Syntax:
at(index)          */

// c). Print the number at the given index value.
let number = [2,4,6,8,1,3,5,7,9];
console.log(number.at(4));


/* array.join() : The JavaScript Array join() Method is used to join the elements of an array into a 
string. The elements of the string will be separated by a specified separator and its default value is
a comma(, ).
Syntax:
array.join(separator)      */

// d). Join the letters of the word Array.
const word = ['A','n','o','n','y','m','o','u','s'];
console.log(word.join(''));


//Question 2:
const items = [
{ name: 'apples', qty: 30 },
{ name: 'bananas', qty: 40 },
{ name: 'apples', qty: 50 }
];
/* output
[
    { name: 'apples', qty: 80 },
    { name: 'bananas', qty: 40 }
];
*/
const check =[];
items.forEach((item)=>{
    if (check[item.name]){
        check[item.name]= item.qty + check[item.name];
    }
    else{
        check[item.name]=item.qty;
    }
},{})
console.log([check]);


//Question 3:
const movies = [
{ title: "a", year: 2018, rating: 4.5 },
{ title: "b", year: 2018, rating: 4.7 },
{ title: "c", year: 2018, rating: 3 },
{ title: "d", year: 2017, rating: 4.5 }
];
//a) get all the movies in 2018 with rating > 4
const filterMovies = movies.filter(function(elements){
    return elements.year='2018'&& elements.rating >4;
})
console.log(filterMovies);

//b) Sort them by their rating in descending order
filterMovies.sort(function(start,end){
    return end.rating - start.rating;
});
console.log(filterMovies);

//c) pick their title
const pickTitle = movies.filter(title => title);
for(let i=0;i<pickTitle.length;i++){
    console.log(pickTitle[i].title);
};

//  OR done by chaining method

const getMovies = movies
.filter(elements => elements.year= "2018" && elements.rating>4)
.sort((start,end) => end.rating - start.rating)
.filter(title => title)
for(let i=0;i<movies.length;i++){
console.log(movies[i].title);
}
console.log(getMovies);

//Question 4: Solve this problem by reduce function
const orders = [
{ id: "1", status: "pending" },
{ id: "2", status: "pending" },
{ id: "3", status: "cancelled" },
{ id: "4", status: "shipped" },
];
/* output should be (count of occurences )
{
pending: 2, cancelled: 1, shipped: 1
}  */ 
let result = {};
orders.forEach((order) => {
   if(result[order.status]){
       result[order.status] = result[order.status] + 1;
   }else{
       result[order.status] = 1;
   }
})
console.log(result);
// Got this solution on google but not able to understand it.
const count = orders.reduce(function(acc,curr){
    acc[curr.status] = (acc[curr.status]||0)+1;
    return acc;
 },{});
 console.log(count);

// Question 5: Split into 2 objects with odd keys in one and even in another.
let obj = { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g' };
let index=0;
let odd={};
let even ={};

for(let key in obj){
index++;
 if(index%2==0){
     even[key]= obj[key];
 }
 else{
     odd[key]= obj[key];
 }}
console.log(index);
console.log(odd);
console.log(even);
