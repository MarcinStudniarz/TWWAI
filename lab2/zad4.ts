class Animal {
    constructor(public name: string) {}

    makeSound(): string {
        return "Brak dźwięku";
    }
}


class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): string {
        return "Hau";
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): string {
        return "Miau";
    }
}


const myDog = new Dog("Reksio");
const myCat = new Cat("Filemon");

console.log(`Mój pies ${myDog.name} robi: ${myDog.makeSound()}`);
console.log(`Mój kot ${myCat.name} robi: ${myCat.makeSound()}`);
