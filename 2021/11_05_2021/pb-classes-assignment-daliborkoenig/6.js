/*

Assignment 6

+ Copy the answer from Assignment 5

+ Modify your constructor to
    - receive another property, the "type" of animal
    - set the "type" as a property of the class called "type"

+ Modify the input values so you are passing in also the word "cat"
    - This word should map to the "type" property

+ What happens if you console.log() cat.mood & cat.type?

 */
class Animal{
    constructor(mood, type){
        this.mood = mood
        this.type = type
    }
}

const cat = new Animal("Angry", "cat")
console.log(cat);