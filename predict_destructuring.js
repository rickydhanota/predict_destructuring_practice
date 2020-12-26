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

//Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword); //Because password isnt in the object person, this displays as undefined

//Prblem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //Displays 2
const [,,,second] = numbers; //Displays 5
const [,,,,,,,,third] = numbers;//Displays 2
//Predict the output
// console.log(first)
// console.log(second)
// console.log(third);
console.log(first == second);//Checks if the value is True or False
console.log(first == third);
