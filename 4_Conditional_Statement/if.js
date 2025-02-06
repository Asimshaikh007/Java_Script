//if
let i = 10;
if (i > 15) console.log("i is greater than 15");
console.log("prog running");

//if else
if (i < 10) {
  console.log("i is less than 10");
} else {
  console.log("i is greater than 10");
}

//else if
let fruit = "mango";
if (fruit === "mango") {
  console.log("fruit is mango");
} else if (fruit == "cherry") {
  console.log("fruit is not mango");
} else {
  console.log("no fruit");
}

//nested if
let hrs = 9;
let minutes = 34;
if (hrs <= 12) {
  if (minutes <= 60) {
    console.log("correct time format");
  } else {
    console.log("minutes are wrong");
  }
} else {
  console.log("hrs are wrong");
}

//switch statements
let day = 3;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thusday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("Invalid day");
}
