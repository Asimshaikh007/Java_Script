//Function: Block of code that can be called and executed

//Regular function
function fun() {
  console.log("Hello World");
}
fun();

//Methods
const user = {
  name: "Asim",
  greet: function () {
    console.log("Hello", this.name);
  },
};
user.greet();

//Function Return
function sqrt(num) {
  return num * num;
}
let res = sqrt(5);
console.log("res", res);

//Named Function
function namedFun() {
  console.log("this is named function");
}
namedFun();

//Anonymous Function
const anonymousFun = function () {
  console.log("this is anonymous function");
};
anonymousFun();

//Arrow Function
const additon = (a, b) => {
  return a + b;
};
const ans = additon(5, 6);
console.log("ans", ans);

//Function Expression
const multiply = function (a, b) {
  return a * b;
};
console.log("multiply", multiply(5, 6));

//Arguments
function args() {
  console.log("arguments passed are:", arguments);
}
args(1, 2, 3);
args(1, 2, 3, 4, 5);

//Variadic functions are functions that can accept any number of arguments.
//argument object()
function sumOf() {
  let total = 0;
  let arr = Object.values(arguments);
  arr.forEach((element) => {
    total += element;
  });
  return total;
}
console.log("sumOf", sumOf(1, 2, 3, 4));
console.log("sumOf", sumOf(1, 2, 3, 4, 5));

//Rest parameter
function multipleOf(...numbers) {
  total = 1;
  numbers.forEach((num) => {
    total *= num;
  });
  return total;
}
console.log("multipleOf", multipleOf(1, 2, 3, 4, 5));

//Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE Function");
})();

//Generator Function
function* counter(stop) {
  let cnt = 1;
  while (cnt <= stop) {
    yield cnt;
    cnt++;
  }
}
const numbers = counter(5);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);

//Async Function
async function fetchData() {
  const response = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
    body: null,
  });
  const data = await response.json();
  console.log("data=", data);
}
fetchData();
