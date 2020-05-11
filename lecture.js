//Javascript 6

//Contructor review
//Write a constructor function called Person that takes in name, age, and birthday properties.
function Person(name, age, birthday) {
  this.name = name;
  this.age = age;
  this.birthday = birthday;
}

//Attach a prototype method to the Person constructor called introduceSelf.  It should return a string with the person's name and age.
Person.prototype.introduceSelf = function () {
  return `Hi! My name is ${this.name} and I am ${this.age} years old`;
};

//Create two new people and have them introduce themselves.

const personOne = new Person("Jeff", 28, "July 3rd");
const personTwo = new Person("Adam", 28, "May 5th");

console.log(personOne.introduceSelf());
console.log(personTwo.introduceSelf());

//Classes
//Create a class called Aircraft that takes in name and range, a string and number respectively.  Also initialize a property called milesFlown and set it to 0.  Attach a prototype method called fly that add the range of the aircraft to the milesFlown.  Then return the updated object.

class Aircraft {
  constructor(name, range, milesFlown = 0) {
    this.name = name;
    this.range = range;
    this.milesFlown = milesFlown;
  }
  fly() {
    this.milesFlown += this.range;
    return this;
  }
}

//Use your class to create a new Aircraft and invoke fly.

const a380 = new Aircraft("A-380", 15000);

// console.log(a380.fly())

// extend example
class People {
    constructor(name){
        this.name = name
    }
    greet() {
        console.log(`Hello, I am ${this.name}`)
    }
}

const adam = new People('Adam')
adam.greet()

class Instructor extends People{
    constructor(name, sport){
        super(name);
        this.sport = sport;
    }
    greet() {
        console.log(`Hi, I'm ${this.name} and I play ${this.sport}`)
    }
}

const andrew = new Instructor('Andrew', 'Overwatch')
// andrew.sayHi()
// andrew.greet()

//Create a new class called Plane that extends aircraft.  It should also take in passengerCount and initialize a passengersFlown property at 0 and a destinations property as an empty array.  Modify the exising fly method to take in a destination parameter, It should add the passengerCount to the passengersFlown and push the destination to the destinations array.  It should  return a string stating 'name has flown passengersFlown passengers a total of milesFlown miles.  It has gone to destinations'.  Make sure all previous functionality of fly is maintained.

class Plane extends Aircraft{
    constructor(name, range, passengerCount, milesFLown = 0, passengersFlown = 0){
        super(name, range, milesFLown);
        this.passengerCount = passengerCount;
        this.passengersFlown = passengersFlown
        this.destinations = []
    }
    fly(destination) {
        super.fly()
        this.passengersFlown += this.passengerCount
        this.destinations.push(destination)
        return `${this.name} has flown ${this.passengersFlown} passengers a total of ${this.milesFlown} miles. It has gone to ${this.destinations}`;
    }
}


//Use yoru class to create a new Airplane and make it fly somewhere!
const concorde = new Plane('Concorde', 500, 42)
console.log(concorde.fly('Aruba!'))
console.log(concorde.fly('Jamaica'))
console.log(concorde.fly('Cocamo'))

//Create a new class called PrivateJet that extends Plane.  It should also take in an owner property. Modify the existing fly method to instead return 'name has flown owner and passengersFlown friends milesFlown miles.  It has gone to destinations.  Make sure all previous functionality of fly is maintained.

class PrivateJet extends Plane{
    constructor(owner, name, range, passengerCount, milesFLown = 0, passengersFlown = 0){
        super(name, range, passengerCount, milesFLown, passengersFlown);
        this.owner = owner;
    }
    fly(destination) {
        super.fly(destination)
        return `${this.name} has flown ${this.owner} and ${this.passengersFlown} friends ${this.milesFlown} miles. It has gone to ${this.destinations}`
    }
}

//Use your class to create a new PrivateJet and have it fly wherever you want.

const gSix = new PrivateJet('Jeff', 'G6', 1500, 10)

console.log(gSix.fly('Around the world'))
console.log(gSix.fly('Around the world'))
console.log(gSix.fly('Around the world'))
console.log(gSix.fly('Around the world'))

// Closures

//Write a function called secretNumber.  This function should initialize a number variable at 0 and return a function that increments the number variable.



//Use your function to initialize a new instance of num and invoke the returned function to increment it.

//Write a function called someonesNumber that takes in a name paramter.  Initialize a number variable at 0 and return a function that will return the string `name's number is`

//Invoke someonesNumber to create a new instance of num and then invoke that returned function to change the number.  Repeat this process to show that there are two separate instances of num.

//Module Pattern

//Use the module pattern to create a calculator.  It should have functionality to add, subtract, multiply, divide, and clear.
