// Car class

// Car constructor function

const Car = function (manufacturer, price, engineType){      // we have a function of type arrow with an implicit return that takes three arguments, it is stored in Car variable, const means  cannot be reassigned but can its properties can be changed
    this.manufacturer = manufacturer                   // definining the first property using "this" keyword. i.e. stating that manunfacturer argument passed is the property for car
    this.price = price
    this.engineType = engineType
}

// next we setup jest to ensure we have access to these properties 
// First, lets export the function stored in Car variable 


// next, create a file for testing > "Car.test.js"


module.exports = Car;