const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //prints the first car in cars
console.log(otherRandomCar) //prints the second car in cars because the first is skipped 

