// Relational Operators
// Greater Than >
// Less Than <
// Less Than or Equal <=
// Greater Than or Equal >=

// Logical Operator
// AND: &&
// OR: ||

// Equality Operator
// Equal: ==
// Not Equal: !=

// Strict
// Equal: ===
// Not Equal: !== 

let age = 25;

if (age >= 21){
    console.log("You can buy alcohol.");
}
else {
    console.log("You can not by alcohol.")
}

// Bronze
let name = "Alec";
let friendName = "Jessica";

var nameLeng = name.length;
var friendNameLeng = friendName.length;

console.log(nameLeng);
console.log(friendNameLeng);


// Silver
if (nameLeng > friendNameLeng){
    console.log(name + "'s name is longer than " + friendName + "'s name.")
}
else if (nameLeng < friendNameLeng){
    console.log(friendName + "'s name is longer than " + name + "'s name.")
}
else {
    console.log("The names have the same amount of letters.");
}



//Gold
if (nameLeng > friendNameLeng){
    var difference = nameLeng - friendNameLeng;
    console.log(friendName + "'s name is shorter than " + name + "'s name by " + difference + " letter(s).");
}
else if (nameLeng < friendNameLeng){
    var difference = friendNameLeng - nameLeng;
    console.log(name + "'s name is shorter than " + friendName + "'s name by " + difference + " letter(s).");
}
else if (nameLeng == friendNameLeng){
    console.log(name + " and " + friendName + "'s names have the same amount of letters.");
}
else {
    console.log("Does not compute.");
}