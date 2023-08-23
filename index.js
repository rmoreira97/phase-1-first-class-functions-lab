// Code your solution in this file

// declare the variable returnFirstTwoDrivers with const and assign anonymous fucntion to it, 
// the function takes in an array containing the names of scubers drivers and return
// a new array containing the first two drivers in the array 


// Return first two drivers
const returnFirstTwoDrivers = function(drivers){ 
    return drivers.slice(0,2) } 


// Return last two drivers

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

// Selecting Drivers

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//Fare multiplier

const createFareMultiplier = function(multiplier){
    return function(fare){
        return multiplier * fare;
    }
}

//Fare Doubler

const fareDoubler = createFareMultiplier(2);

// EXAMPLE OF HOW TO USE THE ABOVE FUNCTION
// faredoubler(10) = 20

//Fare Tripler

const fareTripler = createFareMultiplier(3); 

// Selecting diffeent Drivers 

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {

    return returnFirstTwoDrivers(drivers);
}

// Final 
