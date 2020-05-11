# Lecture Notes
## Classes
- Classes are syntax sugar for a constructor function
- ```JS
    class Car {
        constructor(make, model, year){
            this.make = make;
            this.model = model;
            this.year = year;
        }
    }

    const myCar = new Car('Tesla', 'Model X', 2020);
    ```
- We still must use *new* keyword
- Constructor function sits INSIDE the class
### Prototypes in Classes
- Prototypes don't need function keyword and are included inside Classes
```JS
    class Car {
        constructor(make, model, year){
            this.make = make;
            this.model = model;
            this.year = year;
        }
        honk(){
            alert(`Your ${this.make} honked!`);
        }
    }
```
## Extending Classes
- Classes can "extend" other classes to inherit their properties and methods.
- Use **extends** keyword
- Use **super** keyword
    - Invoke the parent class' constructor function
- ```JS
    class Animal {
        constructor(name, type){
            this.name = name;
            this.type = type;
        }
        talk(saying){
            console.log(`${this.name} says: ${saying}`)
        }
    }
    class Fish extends Animal {
        constructor(name){
            super(name, 'Fish');
        }
        talk(saying){
            super.talk(saying); //invokes original talk function
            console.log(`And ${this.name} breathes underwater`);
            //result will be 2 console.logs
        }
    }
    ```

# Closure
- A closure is an inner function that has been returned from an outer function that also relies on the outer function's scope.
- ```JS
    function counter(){
        let count = 0;
        // Closure Function
        function addOne(){
            return count++; // Relies on lexically scoped variable
        }
        // Returns the function
        return addOne;
    }
    ```
### Usage
- To create a close, save the outer function invoked to a new variable.
```JS
const countOne = counter();
```
- Good way to establish individual counters

# Module Pattern
- The module pattern creates "private" variables and functions.
- Then, returning functions that are able to access those private values.
- ```JS
    function modulePattern() {
        let privateVariable = 'I am private';
        
        let privateFunction = function() {
            console.log(privateVariable)
        }
        
        return {
            changeVar: function(str) {
            privateVariable = str;
            },
            readVar: function() {
            privateFunction();
            }
        }
    }
    ```