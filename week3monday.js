/*  Write a function  that takes in an array of numbers as a parameter and uses the .forEach() method to double the 
value of all even numbers in the array. The function should not use any other loops or array methods. */
myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const newArray = [];

const doubleEvens = anArray => {
    anArray.forEach(number => {
        if (number % 2 === 0) {
            newArray.push(number*2)
        } else {
            newArray.push(number)
        }
    });
    console.log(newArray)
}

doubleEvens(myArray);


// Write a function that takes the array below and modifies its order as follows:
// •Remove the first element
// •Add your dream car as the new first element
// •Remove the last element
// •Add your first car as the new last element

let myDreamCars = ["Charger", "Cayenne", "Cyber Truck", "G Wagon", "Civic"]

const modifyArray = someArray => {
    someArray.shift()
    someArray.unshift("gallardo")
    someArray.pop()
    someArray.push("Xterra")
    console.log(someArray)
}

modifyArray(myDreamCars);