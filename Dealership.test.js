// now let us import the all classes constructor so we can test uut > do this by using require keyword
// where "." denotes import it right here

const Car = require("./Car");
const Dealership = require("./Dealership.js");
const Customer = require("./Customer.js");    


// Dealership method test 
// let us group our tests using using "describe" keyword 

describe('Dealership', () => {


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

    //  test 2A   

    test("Can add car to stock, passes based on maxCars", () => {

        // Given [Arrange] - do any any setup 

        let dealerName= "Dealer4U"
        let maxCars =  6
        let carsInStock= [new Car("Renault Clio", 20000, "Diesel"), new Car("Toyota", 6000, "Diesel"), new Car("Kia", 20000, "Petrol"), new Car("Ford Fiesta", 2000, "Diesel")];
        let dealer = new Dealership("Dealer4U", 6, "")
        let carToBeAdded = new Car("Make",3000, "Petrol")

        //assigning cars in cars in stock to be equal to dealer2.carsInStock
        dealer.carsInStock = carsInStock
      
        

        // When [Act]- when we call our dealership method
        
        // we add a car to stock
        dealer.addCartoStock(carToBeAdded)

        // that the dealer number of cars in stock 

        const actual = dealer.countCarsInStock();
        // is 5
        const expected = 5

        // Then [Assert]- call Assertion method to assert that cars in stock for dealer is 5
        expect(actual).toBe(expected); 

    });


    //  test 2B   

     test("Can add car to stock, fails to add based on maxCars", () => {

        // Given [Arrange] - do any any setup 

        let dealerName= "Dealer4U"
        let maxCars =  5
        let carsInStock= [new Car("Sunde", 20000, "Diesel"), new Car("Preiz", 6000, "Diesel"), new Car("Char", 20000, "Petrol"), new Car("Ford Fiesta", 2000, "Diesel")];
        let dealer = new Dealership("Dealer4U", "")
        let carToBeAdded = new Car("Make",3000, "Petrol")

        //assigning cars in cars in stock to be equal to dealer2.carsInStock
        dealer.carsInStock = carsInStock
      
    
        // When [Act]- when we call our dealership method to add car to stock
        
        dealer.addCartoStock(carToBeAdded); 
        
        // that the dealer's number of cars in stock 
        const actual = dealer.countCarsInStock()  
        // is 4             
        const expected = 4
        
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
       
    });


    
    //  test 5   

      test("Can compute total stock value", () => {

        // Given [Arrange] - do any any setup 

        let dealerName= "We Deal Best Cars"
        let maxCars = 7 
        let carsInStock= [new Car("Corsa", 3000, "Petrol"), new Car("Jeep", 40000, "Diesel"), new Car("Toyota", 2000, "Petrol"), new Car("Nissan", 1000, "Diesel")];

        let dealer =  new Dealership("We Deal Best Cars", 7)
        dealer.carsInStock = carsInStock

        // When [Act]- when we call our dealership method
        
        const actual = dealer.totalValue();      //expect length of this array to be:
        const expected = 46000                                              // 1   
    
       // we call the Car constructor function and pass in a manufacturer of "Renault" and store it in a variable "actual", this variable cannot be reassigned but can be modified

       expect(actual).toBe(expected);
       
    });




    //  test 6 

    test("search by", () => {

        // Given [Arrange] - do any any setup 


        // creating car objects
       const Lambo=  new Car("Lambo", 100000, "Diesel");
       const Range = new Car("Range", 60000, "Diesel");
       const Ferrari = new Car("Ferrari", 20000, "Petrol");
       const Audi =  new Car ("Audi", 100, "Diesel");


        // storage variables

        let dealerName= "A-Zdealers";                           // storing dealer name in a dealerName variable
        let maxCars = 5;                                        // storing max number of cars in a maxCars variable
        let carsInStock= [Lambo, Range , Ferrari, Audi]         // declaring carsInStock to be an array of car objects        
        let dealer = new Dealership("A-Zdealers", 5, "")       // creating a new dealership         


        // customer 
        let crem = new Customer("crem", 35000, "");

        // storage variables
        let customerWallet = 35000;          // storing wallet amount in a variable customerWallet   
        let customerName = "crem"            // storing customer name in a variable "customer name"
        
        // setting property 
        crem.dealer = dealer                // setting dealer for crem

       
        //declaring cars in carsinstock to be equal to dealer2.carsInStock
        dealer.carsInStock = carsInStock;
       
        // When [Act]- when dealer searches                       
        const searching = dealer.searchBy("price", 60000)
        
        console.log(searching)

        // Then [Assert]- call Assertion method to assert that actual = expected

        expect(searching.length).toBe(1);        // since crem does not have enough money for purchase, we can expect crem.car to remain null (no purchase)


    });


    




});
