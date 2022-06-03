
//  Here I attach a file where I take a closer look into arrow functions. 
// Initially, I did not understand why arrow functions could not act as a true
// substitute for traditional functions (with function keyword), so I did a little 
// experiment to see how they differ.

// Conclusion: arrow functions can be used in methods 
// but when they are not declared within the object constructor, they do not bind correctly
// to the object. Conversely, traditional functions do not have to be declared within the constructor.




// Dealership class

const Car = require("./Car.js");                         // importing car class
const Customer = require("./Customer.js");               // importing customer class

const Dealership2 = function (dealerName, maxCars){      // we have a traditional function that takes two arguments, it is stored in Dealership2 variable, const means  cannot be reassigned but can its properties can be changed
    this.dealerName = dealerName                         // definining the first property using "this" keyword. i.e. stating that manunfacturer argument passed is the property for Dealership2
    this.maxCars = maxCars
    this.carsInStock = []                                // carsInStock is another property that is initiated with an empty array 

    
}


// so here we have two types of functios- an arrow function and a traditional function. 
// Let us make the functions return "this".

Dealership2.prototype.Arrow_function_test = () => {                 
    return this;                                                     // return this means, return the object that called the function            
}       

Dealership2.prototype.Function_function_test = function () {                
    return this;                                                    // return this means, return the object that called the function            
}       


// creating a dealership object

const dealership= new Dealership2 ("test dealer", 2)               // this object is stored inside "dealership" variable


// lets see what each function returns when out dealership calls it

// console.log(dealership.Arrow_function_test());  
// console.log(dealership.Function_function_test());


// Arrow function output:
//     {}
// Tranditional function output:
// Dealership2 { dealerName: 'test dealer', maxCars: 2, carsInStock: [] }



// comments:

// The arrow function output  is empty, thats because when we call an arrow function, it does not 
// know where to bind itself to, and if we run this in the browser console, we will see that it will
// actually return not the dealership object, but instead the window object i.e. the window itself in the browser

// conversely, a traditional function will bind itself correctly to the object that called it 
// in line 35, dealership calls the traditional function, and indeed, in line 42, we can see that 
// the function returns the dealership object




// ------- [A more Concrete example]-------------------



Dealership2.prototype.countCarsInStock_Arrow = () => {                
    return this.carsInStock.length;                                                
}       

Dealership2.prototype.countCarsInStock_Function = function () {                
    return this.carsInStock.length;                                                
}       

// creating a dealership object

const dealer2= new Dealership2 ("test dealer2", 2)           // this object is stored inside "dealership" variable


// logging output of functions 

// console.log(dealer2.countCarsInStock_Arrow())            // printing output of dealer2 calling the arrow function

console.log(dealer2.countCarsInStock_Function())           // printing output of dealer2 calling the traditional function


//  Terminal result:

// Arrow function: console output :

// TypeError: Cannot read properties of undefined (reading 'length')
//     at Dealership2.countCarsInStock_Arrow (/Users/bright-l-admin/coursework/week_8/day_3/day_3_lab/task_constructors_prototypes_ArrowFunction/main.js:63:29)
//     at Object.<anonymous> (/Users/bright-l-admin/coursework/week_8/day_3/day_3_lab/task_constructors_prototypes_ArrowFunction/main.js:77:21)
//     at Module._compile (node:internal/modules/cjs/loader:1105:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Module._load (node:internal/modules/cjs/loader:827:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47


// My comment:

// Since the arrow function does not bind itself appropriately to the object that called it (given that it binds to the window in the browser) , 
// it will never truly have access to any of the properties of the object that called it  i.e.  this.carsInStock property from object dealer2
// to even begin computing the length, so we get an error in the console.




// --------[ Arrow Functions: Binding Appropriately ]-------------------------------------


// We can actually use arrow functions in methods if we want to.
// but to  make them bind to the correct object, we must write the method inside the constructor 


// Dealership class


const Dealership3 = function (dealerName, maxCars){      // we have a traditional function that takes two arguments, it is stored in Dealership3 variable, const means  cannot be reassigned but can its properties can be changed
    this.dealerName = dealerName;                         // definining the first property using "this" keyword. i.e. stating that manunfacturer argument passed is the property for Dealership2
    this.maxCars = maxCars;
    this.carsInStock = [];                                // carsInStock is another property that is initiated with an empty array 

    
    this.experimentArrow = () =>{                          // wrote a function called experiment arrow that returns the object that calls it 
    console.log(this)}

    this.countCarsInStock = () =>{                          // wrote a second arrow function that returns this.carsInstock.length
        console.log(this.carsInStock.length)
    }
}



// instantiate Dealership3 object

const dealer3= new Dealership3("Test dealer3", 4)

// dealer3 call the arrow functions 
console.log(dealer3.experimentArrow())     // we expect this to return the object dealer3 + indeed it does- now arrow function is correctly binded to the object because we wrote it in the constructor 
console.log(dealer3.countCarsInStock())  // we expect this to return the length of  dealer3 carInstock property - should b 0 because we havent actually added any cars to it- indeed it does
