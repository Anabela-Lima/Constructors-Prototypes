// now let us import the Car constructor so we can test it > do this by using require keyword
// where "." denotes import it right here

const Car = require("./Car");
const Dealership = require("./Dealership");


// Dealership method test 
// let us group our tests using using "describe" keyword 

describe('Dealership', () => {


//  test("Dealership - count()", () => {
//     let name = "Test D";
//     let maxNumberOfCars = 10;
//     let cars = [new Car("", 100, ""), new Car("", 100, "")];

//     let dealership = new Dealership(name, maxNumberOfCars);
//     dealership.carsInStock = cars;

//     expect(dealership.count()).toBe(2);
//  })
    

    // test1 

    test("Can count number of cars", () => {

        // Given [Arrange] - do any any setup 

        let dealerName= "Dealer4U";
        let maxCars = 8;  
        let carsInStock= [new Car("Lambo", 100000, "Diesel"), new Car("Range", 60000, "Diesel"), new Car("Ferrari", 20000, "Petrol"), new Car("Audi", 100, "Diesel")]
        let dealer = new Dealership("Dealer4U", 6, 1)
       
       
        //declaring cars in carsinstock to be equal to dealer2.carsInStock
        dealer.carsInStock = carsInStock;

        // When [Act]- when we call our function
        
        const actual = dealer.countCarsInStock()      
        const expected = 4                            

        // Then [Assert]- call Assertion method to assert that actual = expected
        expect(actual).toBe(expected)    
    });

    //  test 2   

    test("Can add car to stock", () => {

        // Given [Arrange] - do any any setup 

        let dealerName= "Dealer4U"
        let maxCars = 9 
        let carsInStock= [new Car("Renault Clio", 20000, "Diesel"), new Car("Toyota", 6000, "Diesel"), new Car("Kia", 20000, "Petrol"), new Car("Ford Fiesta", 2000, "Diesel")];
        let dealer = new Dealership("Dealer4U", 6, 1)
        let carToBeAdded = new Car("Make",3000, "Petrol")

        //assigning cars in cars in stock to be equal to dealer2.carsInStock
        dealer.carsInStock = carsInStock

        // When [Act]- when we call our dealership method
        
        const actual = dealer.addCartoStock(carToBeAdded);   
        const expected = 5

        // Then [Assert]- call Assertion method to assert that actual = expected
        expect(actual).toBe(expected); 

    });
    
    // test 3
    
    test("Can return array with each car's manufacturer", () => {


        // Given [Arrange] - do any any setup 

        let dealerName= "BestDealers"
        let maxCars = 12 
        let carsInStock= [new Car("Fiat", 3000, "Petrol"), new Car("BMW i8", 40000, "Diesel"), new Car("Ferrari", 20000, "Petrol"), new Car("Audi", 100, "Diesel")];

        let dealer =  new Dealership("AnaDealer", 12);
        dealer.carsInStock = carsInStock;
        
        // When [Act]- when we call our dealership method

        const actual =  dealer.carManufacturerNames(); 
        const expected = ["Fiat", "BMW i8", "Ferrari", "Audi"];   

        // Then [Assert]- call Assertion method to assert that actual = expected
        expect(actual).toStrictEqual(expected); 

    });


    //  test 4   

    test("Can find all cars from given manufacturer", () => {

        // Given [Arrange] - do any any setup 

        let dealerName= "BestDealers"
        let maxCars = 12 
        let carsInStock= [new Car("Renault", 3000, "Petrol"), new Car("Volkwagen", 40000, "Diesel"), new Car("Honda", 2000, "Petrol"), new Car("Audi", 1000, "Diesel")];

        let dealer =  new Dealership("A-ZDeals", 12)
        dealer.carsInStock = carsInStock

        // When [Act]- when we call our dealership method
        
        const actual = dealer.carsByManufacturer("Renault").length;      //expect length of this array to be:
        const expected = 1                                               // 1   
    
       // we call the Car constructor function and pass in a manufacturer of "Renault" and store it in a variable "actual", this variable cannot be reassigned but can be modified

       expect(actual).toBe(expected);
       
    })

});
