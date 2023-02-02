const people = [
    { id: "1", name: "Leigh", age: 35 },
    { id: "2", name: "Jenny", age: 30 },
    { id: "3", name: "Heather", age: 28 },
    ];
    
    // 1. count number of people
    console.log(people.length);
            // OR
    const countNumber = people.reduce(function(acc,curr){
        return acc + curr, people.length;
    });
    console.log(countNumber);

    // 2. sum of ages
    let sum=0;
    for(let i=0;i<people.length; i++) {
        sum+= people[i].age;
    }
    console.log(sum);
                  //  OR
    const sumOfAges = people.map(function(elements){
        return elements.age;
    })
    console.log(sumOfAges);
    const sumAges = sumOfAges.reduce(function(acc,cuu){ 
        return acc+cuu;
    });
    console.log(sumAges);

    // 3. get array of names
    const arrOfNames = people.filter(name => name);
    for(let i=0;i<arrOfNames.length;i++){
    console.log(arrOfNames[i].name);
};

    // 4. find max age
    const maxiAge = Object.keys(people).reduce((acc, curr) =>    
       acc.age ? (people[curr].age > acc.age ? people[curr] : acc) : people[curr], {});
console.log(maxiAge);

    // 5. find min age
    const miniAge = Object.keys(people).reduce((acc, curr) =>    
       acc.age ? (people[curr].age < acc.age ? people[curr] : acc) : people[curr], {});
console.log(miniAge);

    // 6. find by name
    const findByName = people.filter(name => name.name == "Jenny");
    console.log(findByName);

   // Question 2:
    // find count occurences
    const orders = [
    { id: "1", status: "pending" },
    { id: "2", status: "pending" },
    { id: "3", status: "cancelled" },
    { id: "4", status: "shipped" },
    ];
    // output should be (count of occurences )
   // {
   // pending: 2, cancelled: 1, shipped: 1
   // } Not able to solve it

   const count = orders.reduce(function(acc,curr){
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
 },{});
 console.log(count);
    
   // Question 3:
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
    // Get 21 and older
    ages.sort();
    const filteredAges = ages.filter(elements => elements >= 21);
    console.log(filteredAges);


   // Question 4: Learn about sorting an array in Javascript.
   // sort ages
    const newAges = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];   
    newAges.sort((a, b) => a - b);                   
    console.log(newAges);
    
    
   // Question 5:
    const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },  
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },   
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },    
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },   
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },   
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },   
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },   
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },   
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }   
    ];
    
    // Filter Retail companies

    const filteredCompanies = companies.filter(name => name.category == "Retail");
for(let i=0;i<filteredCompanies.length;i++){
    console.log(filteredCompanies[i].name);
};

    // Get companies that lasted for 10 or more years
    const difference = companies.filter(function(element){
        return element.end-element.start >=10;
    });
    console.log(difference);
    
    // create array of company names
    const arrNames = companies.filter(name => name);
    for(let i=0;i<arrNames.length;i++){
    console.log(arrNames[i].name);
};
    // Get total years for all companies
    const years = companies.map(function(element){
        return element.end-element.start ;
   });
   const sumOfYears = years.reduce(function(acc, curr){
       return acc+curr;
   });
   console.log(sumOfYears);

    // Sort companies by sort year(Learn sorting an array in Javascript)
    companies.sort(function(start,end){
        return start.start - end.start;
    });
    console.log(companies);
   














