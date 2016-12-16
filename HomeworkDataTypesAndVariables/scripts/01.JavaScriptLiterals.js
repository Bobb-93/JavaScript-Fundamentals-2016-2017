console.log("\n01. JavaScript literals: ");

let intNumber = 5;
let floatNumber = 1234.23;
let someString = "Some String";

let fact1 = true;
let fact2 = false;

let student = {
	name: "Irina",
	grade: 6
};

let simpleArray = [2,3,4,5,6];
let someFunction = function(){
	console.log("Hello, these are some variables: ");
};

someFunction();

console.log(intNumber);
console.log(floatNumber);
console.log(someString);

console.log(fact1);
console.log(fact2);
console.log(`${student.name}, ${student.grade}`);

simpleArray.forEach(function(element) {
    console.log(element);
});    