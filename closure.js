// Closure :
// 1. Function within a function
// 2. Inner function returned from outer function

// Outer function scope enclosing the inner function (function within a function)
function outer() {
  // outer has one local variable
  var num = 1;
  function inner() {
    // inner can access outer's local variables because of scope
    // inner modifies num and returns the new value.
    num++;
    console.log(`current value of num: `, num);
  }
  // outer returns inner
  // NOTE: inner was not invoked.
  return inner;
}

// what is the value of closure?
var closure1 = outer();
var closure2 = outer();
//   console.log(closure1)
//   console.log(outer()())

// Since closure1 is a function, we can invoke it.
//   closure1()

// What happens if we invoke closure1 multiple times?
// closure1();
// closure1();
// closure1();
// closure1();
// closure2();

// the closure retains a reference to any local variables in the parent function's scope.
function orderCreator() {
  let listOfIngredients = [];
  function addIngredient(...ing) {
    listOfIngredients.push(...ing);
    console.log(`List: ${listOfIngredients}`);
  }
  return addIngredient;
}

let nitinSandwich = orderCreator();
// nitinSandwich(
//   "Extra mayo",
//   "Doritos",
//   "Pickles",
//   "Cottage cheese",
//   "cheese wiz"
// );
let johnSandwich = orderCreator();
// johnSandwich("White bread", "Peanut Butter");
// johnSandwich("Jelly");

// MODULE PATTERN
// public and private methods & variables
// shields parts of our code from the global scope

function modulePattern() {
  // variables and functions here are private and are only accessed through the public functions in the returned object
  var privateVariable = "I am private";

  var privateFunction = function () {
    console.log(privateVariable);
  };

  return {
    // everything returned is public
    changeVar: function (str) {
      privateVariable = str;
    },
    readVar: function () {
      privateFunction();
    },
  };
}

// object with public methods stored in module1
var module1 = modulePattern();
//   console.log(module1)
//   module1.readVar()
//   module1.changeVar('changing private var through public method');
//   module1.readVar()

function calculatorCreator() {
    let startVal = 0;
    return {
        add: n => startVal += n,
        subtract: n => startVal -= n,
        divide: n => startVal /= n,
        multiply: n => startVal *= n
    }
}

const newCalc = calculatorCreator();

console.log(newCalc.add(50))
console.log(newCalc.divide(50))
console.log(newCalc.subtract(50))
console.log(newCalc.multiply(50))

class Calculator {
    constructor() {
        this.startVal = 0;
    }
    add(n) {
        return this.startVal += n
    }
    sub(n) {
        return this.startVal -= n
    }
    divide(n) {
        return this.startVal /= n
    }
    multiply(n) {
        return this.startVal *= n
    }
}

const anotherCal = new Calculator()

console.log(anotherCal.add(50))
console.log(anotherCal.add(50))
console.log(anotherCal.add(50))
console.log(anotherCal.startVal)