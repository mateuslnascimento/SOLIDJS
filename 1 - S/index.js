'use strict';

// bom exemplo 
class Person {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.name} ${this.lastName}`;
    }
}

// mau exemplo
class PersonWrong{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    getfullName() {
        return `${this.name} ${this.lastName}`;
    }

    createAnimal();

}