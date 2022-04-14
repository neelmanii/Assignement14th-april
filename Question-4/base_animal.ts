export abstract class Animal {
    constructor(public name:string, public breed:string) {
        
    }
    abstract getBreed(): string; 
    abstract getName(): string;
}