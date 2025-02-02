// Arithmetic Operators
console.log("Arithmetic Operators");
let a = 10;
let b = 20;
console.log("add:", a + b);
console.log("sub:", a - b);
console.log("multi:", a * b);
console.log("div:", a / b);
console.log("mod:", a % b);

// Assignment Operators
console.log("Assignment Operators");
b = 10; // = assignment opr
console.log("=:", b);
console.log("+=:", (b += 10));
console.log("-=:", (b -= 10));
console.log("*=:", (b *= 10));
console.log("/=:", (b /= 10));
console.log("%=:", (b %= 10));

// Comparison Operators
console.log("Comparison Operators");
console.log("==:", a == b);
console.log("===:", "hello" === 10); //strictly equal to checks both val and data-type
console.log("!=", a != b);
console.log(">", a > b);
console.log("<", a < b);
console.log("<=", a <= b);
console.log(">=", a >= b);

// Logical Operators
console.log("Logical Operators");
let b1 = true;
let b2 = false;
console.log("&&:", b1 && b2);
console.log("&&:", b1 && b1);
console.log("||:", b1 || b2);
console.log("!:", !b1);

// Bitwise Operators
console.log("Bitwise Operators");
console.log("&", 5 & 10);
console.log("|", 5 | 10);
console.log("^", 5 ^ 10);
console.log("~", ~5);

//shift
console.log("Shift Operators");
console.log("<<", 2 << 1);
console.log(">>", 2 >> 1);

// Ternary Operator
console.log("Ternary Operator");
const marks = 59;
console.log("Ternary operator:");
marks >= 60 ? console.log("eligible") : console.log("not eligible");

// Comma Operator
console.log("Comma Operator");
console.log(",:", (n = 1), (m = 23), n + m);

//  Unary Operators
console.log("Unary Operators");
a = 10;
console.log("++a", ++a); //pre increament
a = 10;
console.log("a++", a++); //post increament
console.log("a:", a);
a--;
console.log("a:", a);

// Relational Operators
console.log("Relational Operators");
//object
const emp = {
  eid: 101,
  ename: "prajwal",
  sal: 25000.0,
};
console.log("in:", "sal" in emp);

//class
class fruits {
  fruits(name) {
    this.name = name;
    console.log(this.name);
  }
}
let mango = new fruits("mango"); //object

console.log("instanceof:", mango instanceof fruits);

// String Operators
console.log("String Operators");
let ename = "Fname" + "Mname" + "Lname";
ename += "String";
console.log("ename=", ename);

// Chaining Operator (?.)
console.log("Chaining Operator (?.)");
let product1 = {
  product_category: "Biscuits & Cookies",
  product_name: "Britannia Good Day Cashew",
  product_id: 101,
  product_weight: "600gms",
  product_price: { original_price: 150.0, discounted_price: 98.0 },
};

let product2 = {
  product_category: "Biscuits & Cookies",
  product_name: "Parle Hide & Seek Chocolate Chip",
  product_id: 102,
  product_weight: "350gms",
  product_price: { original_price: 150.0 },
};

console.log("?.", product1?.product_price?.original_price);
console.log("?.", product2?.product_price?.discounted_price);
