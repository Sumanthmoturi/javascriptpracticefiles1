//1.Object Oriented Programming(OOPs)

//2.Abstract Datatypes
/*
//3.Methods and this keyword
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };
whiteRabbit.speak("Oh my fur and whiskers");
hungryRabbit.speak("Got any carrots?");
speak.call(whiteRabbit, "Hurry");

//Arrow Functions do not bind THIS ,we this THIS from the surrounding scope

let finder = {
    find(array) {
      return array.some(v => v == this.value);
    },
    value: 5
  };
  console.log(finder.find([4, 5]));
*/

/*
//4.Prototype
//Object.prototype
let empty = {};
console.log(empty.toString); 
console.log(empty.toString());
//Objects are linked to Object.prototype and Object.prototype does not have prototype itself
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype)); 

//Different objects have different properties,Functions inherit from Function.prototype and Arrays inherit from Array.prototype

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

//Creating object with prototypes, by using Object.create
let rabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
  let blackRabbit = Object.create(rabbit);
  blackRabbit.type = "black";
  blackRabbit.speak("I am fear and darkness");
*/

  /*  
//Example main
let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
  
  // Function to create a new rabbit object
  function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit); // Create new object with protoRabbit as prototype
    rabbit.type = type; // Set the type property
    return rabbit; // Return the new rabbit object
  }
  // Example usage
  let moonRabbit = makeRabbit("moon");
  moonRabbit.speak("I am dark and mysterious");
  // Output: The black rabbit says 'I am dark and mysterious'
*/

/*  
//5.Classes-Class and Instance Def
//Class syntax
class Rabbit {
    constructor(type) {
      this.type = type;
    }
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  }
let killerRabbit = new Rabbit("killer");  //new keyword to create instances of class
killerRabbit.speak("I am Dangerous")
*/

//6.Private property in class
/*
//Private property in constructor
class RandomSource {
    #max;
    constructor(max) {
      this.#max = max; // private property
    }
    getNumber() {
      return Math.floor(Math.random() * this.#max);
    }
  }
  const randomSource = new RandomSource(10);
  console.log(randomSource.getNumber()); //
*/


/*
//Map in class-used to store key value pair

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
console.log(`Júlia is ${ages.get("Júlia")}`);
console.log("Is Jack's age known?", ages.has("Jack"));
console.log(ages.has("toString"));

//Object.hasOwn Function-it checks only if properties belong to object ,not prototype

console.log(Object.hasOwn({x: 1}, "x"));
console.log(Object.hasOwn({x: 1}, "toString"));
*/


//Getters and setters

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);

let boil = Temperature.fromFahrenheit(212);  //Static method Temperature.fromFahrenheit()
console.log(boil.celsius)


//Symbols
function Rabbit(type) {
  this.type = type;
}
let sym = Symbol("name");
Rabbit.prototype[sym] = 55;
let killerRabbit = new Rabbit("killer");
console.log(killerRabbit[sym])

//Iterables and Iterators

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());  //{value: "O", done: false}
console.log(okIterator.next());    //{value: "K", done: false}
console.log(okIterator.next());   //{value: undefined, done: true}


// example

// Define the List class
class List {
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }

  get length() {
    return 1 + (this.rest ? this.rest.length : 0);
  }

  static fromArray(array) {
    let result = null;
    for (let i = array.length - 1; i >= 0; i--) {
      result = new this(array[i], result);
    }
    return result;
  }
}

class ListIterator {
  constructor(list) {
    this.list = list;
  }

  next() {
    if (this.list == null) {
      return { done: true };
    }
    let value = this.list.value;
    this.list = this.list.rest;
    return { value, done: false };
  }
}

List.prototype[Symbol.iterator] = function() {
  return new ListIterator(this);
};

let list = List.fromArray([1, 2, 3]);
console.log("Using for/of loop:");
for (let element of list) {
  console.log(element);
}
console.log("Using iterator directly:");
let listIterator = list[Symbol.iterator]();
console.log(listIterator.next()); // → { value: 1, done: false }
console.log(listIterator.next()); // → { value: 2, done: false }
console.log(listIterator.next()); // → { value: 3, done: false }
console.log(listIterator.next()); // → { value: undefined, done: true }


//Inheritance
// Base Class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
// Derived Class
class Dog extends Animal {
  speak() {
    // Override the method to provide specific behavior for Dog
    console.log(`${this.name} barks.`);
  }
}
let animal = new Animal("Generic Animal");
let dog = new Dog("Buddy");
animal.speak(); // Output: Generic Animal makes a noise.
dog.speak();    // Output: Buddy barks.

// Check inheritance using instanceof
console.log(dog instanceof Dog);   
console.log(dog instanceof Animal); 
console.log(animal instanceof Dog); 

