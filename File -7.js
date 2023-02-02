                        // Assignment -7 of JS

/*Question 1: a). array.findIndex(). Return the elements greater than or equal to 70.*/
const digits= [45,67,32,78,43,10,29,65];
console.log(digits.findIndex(elements => elements >= 70));

/* b). array.fill(). fill the array with value 10 at 3rd index and only one value should be added.*/
const unFilled = [2,8,4,3,5,7,9,1];
console.log(unFilled.fill(10,3,4));

/* c). array.at().  Print the number at the given index value. */
let number = [2,4,6,8,1,3,5,7,9];
console.log(number.at(4));

/* d). array.join(). Join the letters of the word Array.  */
const word = ['A','n','o','n','y','m','o','u','s'];
console.log(word.join(''));

//Question 2:
const items = [
{ name: 'apples', qty: 30 },
{ name: 'bananas', qty: 40 },
{ name: 'apples', qty: 50 }
];
const check ={};
items.find((item)=>{
let findItem=(check[item.name])? check[item.name]= item.qty + check[item.name] : check[item.name]=item.qty});
console.log([check]);

//Question 3:
const movies = [
{ title: "a", year: 2018, rating: 4.5 },
{ title: "b", year: 2018, rating: 4.7 },
{ title: "c", year: 2018, rating: 3 },
{ title: "d", year: 2017, rating: 4.5 }
];
//a) get all the movies in 2018 with rating > 4
console.log(movies.filter(elements => elements.year='2018'&& elements.rating >4));

//b) Sort them by their rating in descending order
console.log(movies.sort((start,end) => end.rating - start.rating));

//c) pick their title
console.log(movies.map(names => names.title));

//  OR done by chaining method
const getMovies = movies
.filter(elements => elements.year= "2018" && elements.rating>4)
.sort((start,end) => end.rating - start.rating)
.map(names => names.title)
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
let statusDetail=(result[order.status]) ? result[order.status] = result[order.status] + 1 : result[order.status] = 1
});
console.log(result);
// OR
console.log(orders.reduce((acc,curr) => {acc[curr.status] = (acc[curr.status]||0)+1; return acc; },{}));
// OR
let result1 = orders.reduce(function(acc,order)
  {
    //console.log('order', order); // console.log('acc', acc);
    return {...acc, [order.status] : (acc[order.status] || 0) + 1}
  },{});
  // acc[order.status]=(acc[order.status]||0)+1;
  // return acc;
  console.log(result1);
  //{pending: 2, cancelled: 1,}
  //let status = {cancelled: 1, pending: 2, shipped: 1, pending : 1,pending: 0};
  //console.log('status',status);
  //{pending: 5, cancelled:1, shipped: 1}
  // {cancelled: 1, pending:5, shipped: 1}

// Question 5: Split into 2 objects with odd keys in one and even in another.
let obj = { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g' };
let index=0;
let odd={};
let even ={};
for(let key in obj) { index++;
    let result = (index%2==0) ? even[key]= obj[key] : odd[key]= obj[key]};
console.log(index);
console.log(odd);
console.log(even);