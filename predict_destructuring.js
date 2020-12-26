//Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //prints the first car in cars
console.log(otherRandomCar) //prints the second car in cars because the first is skipped 

//Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name); 
//This line throws an error because the variable doesnt exist, it is not defined
console.log(otherName); //We save the value of name into otherName
