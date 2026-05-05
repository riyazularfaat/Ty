// Normal method
/*
class Vehicle {
    brand: string;
    model: string;
    mileAge: number;

    constructor(brand: string, model: string, mileAge: number) {
        this.brand = brand;
        this.model = model;
        this.mileAge = mileAge;
    }
    info() { 
        console.log(`${this.brand} gives ${this.mileAge} miles per hour.`)
    }
}*/


// Using parameter propertises

class Vehicle { 

    constructor(public brand: string, public model: string, public mileAge: number) { 
    }

    info() { 
        console.log(`${this.brand} gives ${this.mileAge} miles per hour.`)
    }

}

const mercedice = new Vehicle("Mercede", "Y25", 75)
mercedice.info()
console.log(mercedice)