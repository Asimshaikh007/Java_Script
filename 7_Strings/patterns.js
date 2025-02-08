
//create a regular Expression

//literal notation
let regex1 = /hello/;
console.log("regex1=", regex1);

//constructor notation
let regex2 = new RegExp("hello");
console.log("regex2=", regex2);

//basic patterns

//Literal characters:
if (regex2.test("hello")) {
  //compare str to RegExp using test()
  console.log("both hello and regex2 match");
}
if ("hello".match(regex2)) {
  //compare str to RegExp using match()
  console.log("both hello and regex2 match");
}

if ("hello" === regex2.toString().slice(1, -1)) {
  // "/"1 and "/"-1
  //compare str to RegExp using match()
  console.log("both hello and regex2 match");
}

//Metacharacters

let regex = /l./;
console.log(".", regex.test("hel.o"));

regex = /^hello world/;
console.log("^", regex.test("hello world"));
console.log("^", regex.test("world hello"));

regex = /[₹]/;
console.log("[]", regex.test("hel₹o"));

regex = /\d/;
console.log("\\d", regex.test("abc123"));
console.log("\\d", regex.test("abc"));

regex = /\w/;
console.log("\\w", regex.test("abc"));
console.log("\\w", regex.test("4545"));
console.log("\\w", regex.test("!@#"));

regex = /\s/;
console.log("\\s", regex.test("abc 123"));
console.log("\\s", regex.test("abc123"));

regex = /l*/;
console.log("*", regex.test("ola"));
console.log("*", regex.test("oa"));
console.log("*", regex.test("la"));
console.log("*", regex.test("ooa"));
console.log("*", regex.test("ao"));

regex = /#+/;
console.log("+", regex.test("#tweet"));
console.log("+", regex.test("#tweet#"));
console.log("+", regex.test("tweet#"));
console.log("+", regex.test("tweet"));

regex = /m?o/;
console.log("?", regex.test("money"));
console.log("?", regex.test("oney"));
console.log("?", regex.test("mmney"));

// Card Number	Card Type	Payment Status
// 5555 5537 5304 8194	MasterCard	APPROVED
// 5555 5555 5555 4444	MasterCard	APPROVED
// format one occurance or more of 5 5 5 4
regex = /^(5+\d{3})\s(5+\d{3})\s(5+\d{3})\s(\d{3}4$)/;
console.log(regex.test("5455 5537 5304 8194"));
