//Datastructures
//Arrays

//Creating an array 
/*
let array=[1,2,"six,8.2"]
console.log(array)
*/

//accessing array item
/*
let array=[1,2,"six,8.2"]
console.log(array[1])
*/

//modifying an array item
/*
let array=[1,2,"six",8.2]
array[0]=5
console.log(array)
*/

//finding length of an array item
/*
let array=[1,2,"six",8.2]
console.log(array.length)
*/


//Array Methods

//push()
/*let array=[1,2,3,4]
array.push(5)
console.log(array)
*/

//pop
/*let array=[1,2,3,4,5]
let last=array.pop()
console.log(last)
*/



//Objects
//Creating an Object
/*let person= {
    name:"Harry",
    age:12,
    city:"Hyderabad"
}
*/

//Accessing object properties
/*
let  person= {
    name:"Harry",
    age:12,
    city:"Hyderabad"
}
console.log(person.name)  //Dot Notation
console.log(person['age']) //Bracket Notation
*/

//Delete unary operator and In binary operator
/*
let  person= {
    name:"Harry",
    age:12,
    city:"Hyderabad"
}
console.log(person.name)
delete person.name    //Delete Operator
console.log(person.name)
console.log("name" in person)   //In operator
console.log("age" in person)
*/


//Object.keys and Object.assign Functions


/*
console.log(Object.keys({name:'Harry',age:10}))
let objectA={
    a:1,
    b:2
}
console.log(Object.assign(objectA, {a:1,c:3}))
*/

//Array of objects
/*
let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts","beer"],squirrel: true}
];
*/
/*
let journal = [];
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}
addEntry(["work", "meeting", "exercise"], false);
addEntry(["day off", "went hiking", "cooked dinner"], false);
addEntry(["work", "unexpected visitor", "ate out"], true);
console.log(journal);
*/


//More Array Methods
/*push
let array=[1,2,3,4]
console.log(array.push(5))
*/

/*pop
let array=[1,2,3,4]
console.log(array.pop());
*/

/*shift and unshift
let numbers=[1,2,3,4]
numbers.unshift(0)
console.log(numbers)
console.log(numbers.shift())
*/

/*slice and concat
let array=[1,2,3,4,5,6]
let newArray=array.slice(2,7)
console.log(newArray)
let array2=[7,8]
console.log(newArray.concat(array2))
*/



//String Methods
/*
console.log("Technology".slice(2,4))   //Slice method
console.log("Technology".indexOf("h"))  //indexOf method
console.log("   Techn ology   ".trim())   //Trim method
console.log(String(6).padStart(3,"0"))    //padstart method

let sentence="Hi Harry"                 
let word=sentence.split(" ")           //Split method
console.log(word)
console.log(word.join(" "))            //Join method
console.log("Hi".repeat(3))            //repeat method
*/

//Math object
/*
console.log(Math.abs(-5.7));
console.log(Math.abs(3.2)); 

console.log(Math.ceil(4.2)); 
console.log(Math.ceil(-1.8)); 

console.log(Math.floor(4.7)); 
console.log(Math.floor(-1.2)); 

console.log(Math.round(4.5));
console.log(Math.round(4.4)); 

console.log(Math.max(1, 5, 10, 15));
console.log(Math.max(-1, -5, -10)); 

console.log(Math.min(1, 5, 10, 15)); 
console.log(Math.min(-1, -5, -10)); 

console.log(Math.sqrt(16));
console.log(Math.sqrt(25)); 

console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));

console.log(Math.random());
*/



//Object Destructuring-To unpack properties from an object
/*
let {name}={name:"Rahul",age:28}
console.log(name)

let person={
    realName:"Rahul",
    age:28
}
let {realName} = person
console.log(name)
*/

//JSON(JavaScript Object Notation)
/*
let string=JSON.stringify({name:"Harry",age:12})
console.log(string)
console.log(JSON.parse(string))
console.log(JSON.parse(string).age)
*/


//Exercises

//Sum of all numbers in an array

function sum(array) {
    let total = 0;
    for (let number of array) {
      total += number;
    }
    return total;
  }
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//generating numbers from start to end without step

function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }
console.log(range(1, 10));

//Generating numbers from start to end with step 

function range(start, end, step = 1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        array.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        array.push(i);
      }
    }
  
    return array;
  }
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

  
//Reverse an array
function reverse(array) {
    let newArray=[]
    for (let i=array.length-1;i>=0;i--) {
        newArray.push(array[i])
    }
    return newArray
}
let myArray=[1,2,3,4,5]
console.log(reverse(myArray))

  
// Converting an array to a list
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
  }
  console.log(arrayToList([10, 20]));
  
// Converting a list to an array
  function listToArray(list) {
    let array = [];
    while (list) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }
console.log(listToArray(arrayToList([10, 20, 30])));

//Last one
function deepEqual(a, b) {
    // Check if both a and b are the same value or both are null
    if (a === b) return true;
  
    // Check if either a or b is null or not an object (base case)
    if (a == null || typeof a !== "object" || b == null || typeof b !== "object") {
      return false;
    }
  
    // Get the keys of both objects
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
  
    // If they don't have the same number of keys, they can't be equal
    if (keysA.length !== keysB.length) return false;
  
    // Check if all keys and values are equal (recursive step)
    for (let key of keysA) {
      // If b doesn't have the key from a or their values aren't deeply equal, return false
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
  
    // If all keys and values match, return true
    return true;
  }
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));


