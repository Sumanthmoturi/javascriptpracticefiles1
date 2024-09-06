//Abstraction:-Instead of writing every detail,we use high level concepts like functions to simplify tasks

//Higher Order Function

//Higher Order Function Definition
//We can create a function that returns another function
function greaterthan(n) {
    return m => m>n
}
let greaterthan10=greaterthan(10)
console.log(greaterthan10(11))

//We can also have functions that change other functions.
function noisy(f) {
    return (...args) => {
      console.log("calling with", args);
      let result = f(...args);
      console.log("called with", args, ", returned", result);
      return result;
    };
  }
noisy(Math.min)(3, 2, 1);


//We can write a function that provides a new control flow
function unless(test, then) {
    if (!test) then();
}
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i); 
    }
}
repeat(3, n => {
    unless(n % 2 == 1, () => {
    console.log(n, "is even");
    });
});


//forEach method:executes the provided function once for each element in an array

let numbers=[1,2,3,4]
numbers.forEach((numbers,index) => {
    console.log(`Element of index ${index} is ${numbers}`)
});

//filter method:creates a new arrray with filtered elements that pass a test implemented by provided function 
const CHARACTERS = [
    {name: "Harry", age: 11},
    {name: "Ron", age: 12},
    {name: "Hermione", age: 13},
    {name:"Neville" , age:12}
  ];
const filteredCharacters = CHARACTERS.filter(character => character.age === 12);
console.log(filteredCharacters);
  

//Map method
//example1
let people = [
    { name: "Harry", age: 12 },
    { name: "Hermione", age: 12 },
    { name: "Ron", age: 13 }
  ];
function map(array, transform) {
    let mapped = []; 
    for (let element of array) { 
      mapped.push(transform(element)); // 
    }
    return mapped; 
  }
console.log(map(people, person => person.name));
//example2
let number=[1,2,3,4]
let square=number.map(x=>x*x)
console.log(square)


//Reduce method
const number1=[1,2,3,4]
const sum=number1.reduce((a,b) =>a+b)
console.log(sum);



//String and character codes
//UTF-16 encoding
//Important methods: charCodeAt() and codePointAt()


let horseShoe = "🐴👟";
console.log(horseShoe.length);
console.log(horseShoe[0]);
console.log(horseShoe.charCodeAt(0));
console.log(horseShoe.codePointAt(0));

//Exercises
//1.Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];

let result = arrays.reduce((a,b) => {
  return a.concat(b);
}, []);

console.log(result);

//2.Write a higher-order function loop that provides something like a for loop statement. It should take a value, a test function, an update function, and a body function. Each iteration, it should first run the test function on the current loop value and stop if that returns false. It should then call the body function, giving it the current value, and finally call the update function to create a new value and start over from the beginning.


function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

//3.doing this program Using loop and some method

function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}
console.log(every([1, 3, 5], n => n < 10)); 
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10)); 

function every(array,test) {
  return !array.some(element=>!test(element))
}
console.log(every([1, 3, 4,7,9], n => n < 10)); 

//4.
function dominantDirection(text) {
  // Count characters by direction
  let counts = {ltr: 0, rtl: 0, ttb: 0};

  for (let char of text) {
    let script = characterScript(char.codePointAt(0));
    if (script) {
      counts[script.direction] = (counts[script.direction] || 0) + 1;
    }
  }

  // Find the direction with the maximum count
  let dominant = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

  return dominant;
}


console.log(dominantDirection("Hello!")); // → ltr
console.log(dominantDirection("Hey, مساء الخير")); // → rtl
