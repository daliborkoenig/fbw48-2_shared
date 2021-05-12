/*

Assignment 5

+ Create a class called "Animal"

+ Add a constructor
    - Inside the constructor, receive an argument "mood"
    - Add the received argument as a property "mood" into the class Animal

+ Instantiate the class into a new variable, "cat", passing in the value "angry"

+ What happens if you console.log() cat.mood?

 */
class Animal{
    constructor(mood){
        this.mood = mood
    }
}

const cat = new Animal("Angry")
console.log(cat);