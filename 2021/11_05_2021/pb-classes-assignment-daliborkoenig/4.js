/*

Assignment 4

+ Create a class called "Animal"

+ Add a constructor
    - Inside the constructor set a property to the class called "mood". Give it the value "angry"

    For example:

    this.mood = "angry";

+ Instantiate the class into a new variable, "cat"

+ What happens if you console.log() cat.mood?

 */
class Animal{
    constructor(){
        this.mood = "angry"
    }
}

const cat = new Animal()
console.log(cat.mood);