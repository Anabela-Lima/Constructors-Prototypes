// Dealership class

const Car = require("./Car.js");    // importing car class
const Customer = require("./Customer.js");    // importing customer class

const Dealership = function (dealerName, maxCars){      // we have a function of type arrow with an implicit return that takes three arguments, it is stored in Car variable, const means  cannot be reassigned but can its properties can be changed
    this.dealerName = dealerName                      // definining the first property using "this" keyword. i.e. stating that manunfacturer argument passed is the property for car
    this.maxCars = maxCars
    this.carsInStock = []
}

// [ Creating Methods ]--------------------------------------------------------------


// instead of defining the methods inside the  function stored in the variable Dealership,
// I will attach the methods to the dealership prototye => any Dealership will then have acess to the methods 



// [Method 1: Count cars in stock ]

Dealership.prototype.countCarsInStock = function () {                // so we have a countCarsInStock method that is accesssible to all Dealerships
        return this.carsInStock.length;                        // and counts number of cars (elements) into the CarInStock array                                      
}           



// [Method 2: Add a car to stock]

Dealership.prototype.addCartoStock  = function (car) {                // so we have an addCartoStock method that is accesssible to all Dealerships
    if(this.carsInStock.length < this.maxCars)                       // if number of cars in stock is less than max cars  
    
    { this.carsInStock.push(car)}                                // add the car to the dealer's stock 
    
    // else { console.log(`Dealer has reached max capacity, ${car} could not be added `)}
} 
// [Method 3]: Returns array of car manufacturers]

Dealership.prototype.carManufacturerNames  = function () {

     let carManufacturerArray= []; 
     let arr = this.carsInStock;
   
    for(item in arr){
       carManufacturerArray.push(arr[item].manufacturer);
    } 
 return carManufacturerArray;

};


// [Method 5]: Find all cars based on a requested search ]


Dealership.prototype.searchBy = function (by, value ){
   
    let result = []

    switch(by){
        case "manufacturer": return this.carsInStock.filter(element => element.manufacturer == value )
         break;
        case "price": return this.carsInStock.filter(element => element.price == value)
         break;
        case "engineType": return this.carsInStock.filter(element => element.engineType == value)
         break;
         
        default:
            result= []
            break;
    }

};



Dealership.prototype.carsByManufacturer = function (manufacturerName)  {
    return this.carsInStock.filter(element => element.manufacturer == manufacturerName );
};


// [ Method 6]: Find total value of cars in stock 
 
Dealership.prototype.totalValue = function () {

    const initialvalue = 0;     // set initial rpice 

    // for each car in stock get the price & store in priceArray variable
    const priceArray = this.carsInStock.map(element => element.price)

    // sum the previous element to current
    return priceArray.reduce((previousValue, currentValue) => previousValue + currentValue, initialvalue);

};

// [ Method 7]: sell car from dealership upon customer purchase 

Dealership.prototype.sell = function (carIwant) {

   index_of_car =  this.carsInStock.findIndex(desiredCar => desiredCar.car === carIwant)
    Updated_stock= this.carsInStock.splice((index_of_car),1)

    this.carsInStock = Updated_stock
    console.log(Updated_stock);
}


// lets export Dealership

module.exports = Dealership


