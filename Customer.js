const Car = require("./Car");
const Dealership = require("./Dealership");

const {
    carsinstock
} = require ("./Dealership")




// customer class

const Customer = function (name, wallet) {
    this.name= name;
    this.wallet= wallet;
    this.car= null;    
    this.dealer= null;                             // starts off null, when customer makes purchase, it will allow them to buy 

}

// buy car method 

Customer.prototype.buyCar = function (car){   
   
    extra = Math.abs(this.wallet - car.price)
    
        if ( this.wallet >= car.price && this.dealer !=null)   

         { this.dealer.sell(car)
            console.log("Thankyou for your purchase" )
            this.wallet = (this.wallet - car.price)
            console.log("your wallet amount is £" + this.wallet)
            this.car = car;
           
        }    else {console.log("You need an extra £" + extra + " to make that purchase. Transaction declined" )}
    
};



module.exports = Customer;