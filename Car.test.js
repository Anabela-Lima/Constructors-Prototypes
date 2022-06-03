// now let us import the Car class  so we can test it > do this by using require keyword
// where "." denotes import it right here

const Car = require("./Car.js");


// Car constructor test 
// let us group our tests using using "describe" keyword 

describe('Car', () => {

    // test 1- manufacturer

    test(`Can access manufacturer property`, () => {

        // Given [Arrange] - do any any setup 

        // When [Act]- when we call our Car constructor
        
        const actual = Car("Mercedes")      // we call the Car constructor function and pass in a manufacturer of "Mercedes" and store it in a variable "actual", this variable cannot be reassigned but can be modified
        const expected = this.Mercedes         // we expect the constructor function to the function to return this.Mercedes and store it in a variable "expected", this variable cannot be reassigned but can be modified

        // Then [Assert]- call Assertion method to assert that actual = expected
        expect(actual).toBe(expected);    
    })


    // test 2- price 

    test(`Can access price property`, () => {

        // Given [Arrange] - do any any setup 

        // When [Act]- when we call our Car constructor
        
        const actual = Car(35000)      // we call the Car constructor function and pass in a price of 35000 and store it in a variable "actual", this variable cannot be reassigned but can be modified
        const expected = this.price         // we expect the constructor function to the function to return this.price and store it in a variable "expected", this variable cannot be reassigned but can be modified

        // Then [Assert]- call Assertion method to assert that actual = expected
        expect(actual).toBe(expected);    
    })



    // test 3- engineType 

    test(`Can access engineType property`, () => {

        // Given [Arrange] - do any any setup 

        // When [Act]- when we call our Car constructor
        
        const actual = Car("A 220 d")      // we call the Car constructor function and pass in an engineType of "A 220 d" and store it in a variable "actual", this variable cannot be reassigned but can be modified
        const expected = this.engineType         // we expect the constructor function to the function to return this.engineType and store it in a variable "expected", this variable cannot be reassigned but can be modified

        // Then [Assert]- call Assertion method to assert that actual = expected
        expect(actual).toBe(expected);    
    })

});

// all Tests pass : 3/3