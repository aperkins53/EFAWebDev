let myString = "this is a string";
let myNumber = 10;
let myBoolean = false;
let myArray = [10, "string", []];  //nested array
let myObject = {firstKey: "a string"};
let myUndefined = undefined;
let myNull = null;

console.log(typeof myBoolean);

//Bronze
let myCar = {
    make: "Nissan",
    year: 2020,
    isLeased: true,
    carObject: {color: "Black"}
}
console.log(typeof myCar.make);
console.log(typeof myCar.carObject.color);
console.log(myCar.carObject.color);

//Silver
let value = typeof myCar.make;

if (value === "string"){
    console.log("The value is a string");
}
else if (value === "number"){
    console.log("The value is a number");
}
else if (value === "boolean"){
    console.log("The value is a boolean");
}
else if (value === "object"){
    console.log("The value is an object");
}
else {
    console.log("What are you?");
}

if (value === "string" || value === "number" || value === "boolean" || value === "object"){
    console.log("The value is a(n) " + value);
}
else {
    console.log("What are you?");
}