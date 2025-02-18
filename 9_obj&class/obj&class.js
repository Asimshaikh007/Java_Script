//Objects: An object is a collection of properties, and a property is an association between a name (or key) and a value.

//declering object
let obj1 = {
  name: "Asim",
  age: 22,
  job: "Developer",
};
console.log("obj1=", obj1);

let obj2 = new Object();
obj2.name = "Om";
(obj2.age = 23), (obj2.job = "Developer");
console.log("obj2=", obj2);

//Accessing Object Properties
console.log("name=", obj2.name);
console.log("name=", obj2["name"]);

//modifying properties
obj2.age = 24;
console.log("age=", obj2["age"]);

//add properties
obj2.exp = 30;
console.log("exp=", obj2);

//delete properties
delete obj2.exp;
console.log("obj2=", obj2);

//checking if property
console.log("in=", "age" in obj2);
console.log("obj.hasOwnProperty('age')=", obj2.hasOwnProperty("age"));

//iterating over object
//for in
for (key in obj1) {
  console.log("key=", key, "value=", obj1[key]);
}

//property extraction
console.log("Object.keys(obj1)=", Object.keys(obj1));
console.log("Object.values(obj1)=", Object.values(obj1));
console.log("Object.entries(obj1)=", Object.entries(obj1));

//merging objects
let product1 = { name: "pineapple" };
let product2 = { wt: 300 };
let product3 = { ...product1, ...product2 };
console.log("product3=", product3);

//Object length
console.log("length=", Object.keys(product3).length);

//object methods.
let product4 = {
  name: "cherry",
  wt: "500gm",
  display: function () {
    console.log("name:", this.name, " wt=", this.wt);
  },
};
product4.display();

/** Q)
    Scenario:

You are tasked with creating an Inventory Management System for a grocery store. The store tracks grocery products, and each product has properties like name, quantity, price, and category. The categories include "Fruits", "Vegetables", "Dairy", "Bakery", etc. The store manager needs to perform tasks such as adding new items, updating quantities when stock changes, removing products, and calculating the total inventory value.
ans=>
 */
let inventory = [];
let removed = [];
function addProduct(pname, pquantity, pprice, pcategory) {
  inventory.push({
    name: pname,
    quantity: pquantity,
    price: pprice,
    category: pcategory,
  });
}

addProduct("apple", 50, 15.0, "fruit");
addProduct("cherry", 150, 120.0, "fruit");
addProduct("grapes", 150, 80.0, "fruit");

addProduct("onion", 150, 50.0, "vegetable");
addProduct("potato", 140, 30.0, "vegetable");
addProduct("totmato", 150, 20.0, "vegetable");

addProduct("milk", 150, 58.0, "dairy");
addProduct("curd", 140, 10.0, "dairy");

addProduct("bread", 150, 28.0, "bakery");
addProduct("bscuits", 150, 25.0, "bakery");

console.log(inventory);

function removeProduct(pname) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == pname) {
      removed = inventory.slice(i, i + 1);
      inventory[i] = null;
    }
  }
}
removeProduct("milk");
console.log(inventory);
console.log(removed);

function updateProduct(pname, pcat, pprice, pquan) {
  for (let i = 0; i < inventory; i++) {
    if (inventory[i].name === pname) {
      console.log(inventory[i].name);
    }
  }
}
updateProduct("apple", "fruit", 14, 51);
console.log(inventory);

//classes and objects

class Bike {
  brand;
  model;
  year;
  price;
  constructor() {
    this.brand = "Royal Enfield";
  }
  accept(m, y, p) {
    this.model = m;
    this.year = y;
    this.price = p;
  }
  display() {
    console.log("brand=", this.brand);
    console.log("model=", this.model);
    console.log("year=", this.year);
    console.log("price=", this.price);
  }
}

let bike1 = new Bike();
bike1.accept("gt650", "2024", 345000);
bike1.display();
