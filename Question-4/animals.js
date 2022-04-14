import { Animal } from "./base_animal.js";
class Tiger extends Animal {
    constructor(name, breed) {
        super(name, breed);
    }
    getBreed() {
        return this.name;
    }
    getName() {
        return this.breed;
    }
}
class Lion extends Animal {
    constructor(name, breed) {
        super(name, breed);
    }
    getBreed() {
        return this.name;
    }
    getName() {
        return this.breed;
    }
}
class Snake extends Animal {
    constructor(name, breed) {
        super(name, breed);
    }
    getBreed() {
        return this.name;
    }
    getName() {
        return this.breed;
    }
}
class Monkey extends Animal {
    constructor(name, breed) {
        super(name, breed);
    }
    getBreed() {
        return this.name;
    }
    getName() {
        return this.breed;
    }
}
export { Tiger, Lion, Monkey, Snake };
