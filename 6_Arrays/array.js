// Arrays
let nums = [1, 2, 3, 4, 5];
let fruits = ["apple", "cherry", "papaya"];

//method 2
let tags = new Array("html", "head", "title", "body");

//access elements
console.log("tags[0]:", tags[0]);
console.log("tags[3]:", tags[3]);

//modify
tags[2] = "style";
console.log("tags:", tags);

//properties

//length
let len_arr = [1, 2, 3, 4, 5];
console.log("length of arr:", len_arr.length);

//indexOf()
let fruitbasket = [
    "apple🍎",
    "banana🍌",
    "cherry🍒",
    "mango🥭",
    "orange🍊",
];
console.log("indexOf(mango):", fruitbasket.indexOf("mango"));

//push()
let arr1 = [1, 2, 3];
arr1.push(4);
console.log("push arr1:", arr1);

//pop()
arr1.pop();
console.log("pop arr1:", arr1);

//shift()
let temp = arr1.shift();
console.log("shift arr1:", arr1);
console.log("temp=", temp);

//unshift()
arr1.unshift(1);
console.log("unshift arr1:", arr1);
arr1.unshift(6, 5);
console.log("unshift arr1=", arr1);

//foreach()
fruitbasket.forEach(function (fruit) {
    console.log(fruit + "is a fruits.");
});

//map()
let bigfruits = fruitbasket.map((fruit) => fruit.toUpperCase());
console.log("bigfruits=", bigfruits);
console.log("type of bigfruits:", typeof bigfruits);
//question : Scenario: You have a list of people’s ages in an array,
// and you want to create a new array that categorizes each person as either a "minor" or "adult"
// based on their age.
// ans=>
let ages = [
  33, 28, 9, 46, 29, 20, 52, 47, 87, 62, 25, 23, 74, 43, 93, 53, 95, 73, 7, 11,
  45, 21, 67, 49, 14,
];

let categories = ages.map((age) => {
  if (age >= 21) {
    return "Adult";
  } else {
    return "Minor";
  }
});
console.log("categories=", categories);

//filter() 
let num = [69, 37, 73, 2, 74];
let arrsmall = num.filter((n) => n <= 50);
console.log("arrsmall", arrsmall);

// Filter Expired Products
// Scenario: You have a list of products where each product has a name, expirationDate, and isInStock property.
// You need to create a new array containing only the
// products that have expired (i.e., the expirationDate is less than today’s date).
//ans=>
let products = [
  { name: "milk", erxpireDate: new Date(25, 1, 7), isINStock: true },
  { name: "cheese", erxpireDate: new Date(25, 2, 7), isINStock: true },
  { name: "yoghurt", erxpireDate: new Date(25, 1, 1), isINStock: true },
];

let today = new Date(25, 2, 7);

let expiredProducts = products.filter((product) => product.erxpireDate < today);
console.log(" expiredProducts=", expiredProducts);

//2d array
let arr2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("2d arr:", arr2d);

//Spread Operator 
let fruits2 = [...bigfruits];
console.log("fruits2:", fruits2);

//Array Destructuring 
let [f1, f2] = bigfruits;
console.log("f1:", f1);
console.log("f2:", f2);

//concat()
let nums1 = [1, 2];
let nums2 = [3, 4];
let combo = nums1.concat(nums2);
console.log("combo=", combo);

//reduce() 
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, current_val) => {
  return accumulator + current_val;
}, 0);
console.log("sum=", sum);


//find() 
numbers = [1, 2, 3, 4, 5];
let found = numbers.find((num) => num > 2);
console.log("found=", found);

//some() 
let some = numbers.some((num) => num % 2 == 0);
console.log("some=", some);

//every() 
let every = numbers.every((num) => num % 2 == 0);
console.log("every=", every);

//slice()
let slice = numbers.slice(1, 3);
console.log("slice=", slice);

//sort() 
let uns = [28, 33, 32, 53, 8];

console.log("uns=", uns);
uns.sort((a, b) => a - b); //ascending
console.log("uns=", uns);
uns.sort((a, b) => b - a); //descending
console.log("uns=", uns);

//reverse() 
uns = [28, 33, 32, 53, 8];
uns.reverse();
console.log("reverse uns=", uns);

//flat() 
let array = [1, [2, 3], [4, 5]];
let flatarr = array.flat();
console.log("flat arr=", flatarr);

//includes() 
array = [1, 4, 8];
let inc = array.includes(4);
console.log("inc=", inc);
