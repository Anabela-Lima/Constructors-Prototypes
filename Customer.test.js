const Car = require("./Car.js");
const Dealership = require("./Dealership.js");
const Customer = require("./Customer.js");


// Dealership method test 
// let us group our tests using using "describe" keyword 

describe('Customer', () => {


    // test1 

    test("Can buy new car - enough money", () => {

        // Given [Arrange] - do any any setup 


        // creating car objects
       const Lambo=  new Car("Lambo", 100000, "Diesel");
       const Range = new Car("Range", 60000, "Diesel");
       const Ferrari = new Car("Ferrari", 20000, "Petrol");
       const Audi =  new Car ("Audi", 100, "Diesel");


        // storage variables    
        let dealerName= "Dealer4U";
        let maxCars = 8;  
        let carsInStock= [Lambo, Range , Ferrari, Audi]
        let dealer = new Dealership("Dealer4U", 8, "")


        // customer 
        let Ana = new Customer("Ana", 150000, "");

        // storage variables                // note these are not the properties themselves- its just some variables I created
        let customerWallet = 150000;
        let customerName = "Ana"

        // setting property for Ana customer 
        Ana.dealer = dealer                 // here I am actually setting the property - equating property to one of the storage variables

       
        //declaring cars in carsinstock to be equal to dealer2.carsInStock
        dealer.carsInStock = carsInStock;
       
        // When [Act]- when Ana buys car                        
        Ana.buyCar(Lambo)

        console.log(Ana)

        // Then [Assert]- call Assertion method to assert that actual = expected
        expect(Ana.car).toBe(Lambo);


    });

    // test2

      test("Can buy new car - not enough money", () => {

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
       
        // When [Act]- when Ana buys car                        
        crem.buyCar(Range)

        console.log(crem)

        // Then [Assert]- call Assertion method to assert that actual = expected

        expect(crem.car).toBe(null);        // since crem does not have enough money for purchase, we can expect crem.car to remain null (no purchase)


    });


});    
