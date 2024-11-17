// Created array with values: 3, 9, 23, 64, 2, 8, 28,
// 93.
// Subtracted the value of the first element from the
// last element . 93 - 3

let ages = [3, 9, 23, 64, 2, 8, 28, 93] 
console.log("Ages:", ages); 
let minusAge = ages[ages.length -1] - ages[0];
console.log("minusAge:", minusAge); 

// Pushed new age to array , 100 . 
// Subtracted the value of the first element from the
// last element . 100 - 3

ages.push(100)
console.log("Ages after pushing a new value:", ages);
let minusAgePush = ages[ages.length -1] - ages[0];
console.log("minusAge:", minusAgePush); 

// Loop to find average age . 
// Added all ages & divided by number of ages . 
// (Sum of ages / length of array) 330 / 9

let sumOfAges = 0; 

for (i = 0; i < ages.length; i++) { 
    sumOfAges += ages[i]
    console.log("Index:", i, "Sum Of Ages:", sumOfAges);
} 
console.log("Total Sum:", sumOfAges);
let average = sumOfAges / ages.length 
console.log("Average:", average); 

// Created array with values: 'Sam', 'Tommy', 'Tim',
// 'Sally', 'Buck', 'Bob'. 
//  Loop to find average amount of characters or 
// letters in each name .
// Loop to concatenate all names together with spaces .

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0; 

for (let i = 0; i < names.length; i++) {
totalChars += names[i].length 
console.log("Index:", i, "Name:", names[i], "TotalChars:",
    totalChars);
} 
let averageName = totalChars / names.length 
console.log("Average of Names:", averageName); 


let concatNames = ""; 
for (let i = 0; i < names.length; i++) {
concatNames = concatNames.concat(names[i] + " ")
console.log(i, "Names concatenated:", concatNames);
} 

// Accessing the last element of an array 
// Accessing the first element of an array 

console.log("Last Element of Ages Array:",ages[ages.length -1]);
console.log("First Element of Ages Array:", ages[0]);

// Created array to hold total characters of the 
// concatenated names . 
// Loop to calculate sum of elements in array .

let nameLengths = []; 
for (i = 0; i < names.length; i++) {
    nameLengths.push (names[i].length);
    console.log("Name Lengths Array:", nameLengths);
} 


let charTotal = 0; 
for (i = 0; i < nameLengths.length; i++) {
    charTotal += nameLengths[i]
    console.log("Chars Totals:", charTotal);
} 

// Function that takes 2 parameters returns one of 
// the arguments concatenated to itself by the 
// amount of of the 2nd argument . (word, n)

function concatWords(word, n) { 
let concat = word.repeat(n);
console.log(concat);
} 
concatWords("Hello", 3); 

// Function taking 2 parameters to return a full name
// Full name is first & last name seperated by space

function fullName(firstName, lastName) {
let fullName = firstName + " " + lastName; 
console.log(fullName);
} 
fullName("Gabriel", "Stafford"); 

// Created an array of numbers 
// Function to return true if sum of all numbers in
// array are greater than 100 . 
// Function repeated to show result for both arrays .

let numbers1 = [100, 200, 300, 400] 
let numbers2 = [1, 2, 3, 4]

function sumNumbersArray(array) {
let total = 0; 
for (let i =0; i < array.length; i++) {
total += array[i]
console.log("Total:", total);
} 
if (total > 100) { 
    console.log("Total:", total, true); 
    return true;
} else { 
    console.log("Total:", total, false);
    return false;
}
}
sumNumbersArray(numbers2); 

function sumNumbersArray(array) {
    let total = 0; 
    for (let i =0; i < array.length; i++) {
    total += array[i]
    console.log("Total:", total);
    } 
    if (total > 100) { 
        console.log("Total:", total, true); 
        return true;
    } else { 
        console.log("Total:", total, false);
        return false;
    }
    }
    sumNumbersArray(numbers1); 

// Function to return average of all elements in 
// array above (numbers1) 
// Sum of elements (1000) / array length (4)

    function calculateNumbersAverage(array) {
        let total = 0;

        for (i = 0; i < array.length; i++) {
            total += array[i]
            console.log("Calculate Function, Total:", total);
        } 
        let average = total / array.length
        console.log("Average of Numbers:", average);
        return average; 
    } 
    calculateNumbersAverage(numbers1); 

// Funtction returns true if average of elements in 
// array 1 (numbers3) is greater than the average of
// elements in array 2 (numbers4) . 
// sum of elements in array 1 / array 1 length 
// sum of elements in array 2 / array 2 length 
// compare the averages of the 2 arrays to each other

    let numbers3 = [100, 100, 100]; 
    let numbers4 = [100, 100, 99];

    function twoAverages(array1, array2) {
        console.log("Parameters:", array1, array2);
        let total1 = 0;
        let total2 = 0; 
for (const number of array1) {
    total1 += number 
    console.log("Current Number:", number, "Total1:", total1);
} 
for (const number of array2) {
    total2 += number 
    console.log("Current Number:", number, "Total2:", total2);
    } 
let average1 = total1 / array1.length; 
let average2 = total2 / array2.length; 

console.log("Averages:", average1, average2); 

if (average1 > average2) {
    console.log(true); 
    return true
} else if (average1 < average2) { 
    console.log(false);
} else { 
    console.log("Numbers are equal");
}
    }     
    twoAverages(numbers3, numbers4); 

// Function that takes a boolean & a number that will
// return true if requirements are met . 
// If it hot out AND if money is above 10.50 the 
// function is true . 

function willBuyDrink(isHotOutside, moneyInPocket) {
console.log("Parameters:", isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log("Buy a Drink?", buyDrink);
return buyDrink;
} 
willBuyDrink(true, 11); 

// Creating a function to solve a problem of my own
// Created an array of the next week "highs" in my
// town's weather forcast 
// sorted that array in an acedning order 
// found the average high temperature for the next 
// week 


function sortWeather(weatherNumbers) {
   return weatherNumbers.sort((a, b) => a - b);
} 
const weatherNumbers = [72, 55, 57, 58, 59, 65, 67, 68];
const sortedNumbers = sortWeather(weatherNumbers);

console.log("Weather for the next week:", 
    sortedNumbers); 

    function calculateWeatherAverage(sortedNumbers) {
        let total = 0;

        for (i = 0; i < sortedNumbers.length; i++) {
            total += sortedNumbers[i]
            //console.log("Total:", total);
        } 
        let average = total / sortedNumbers.length
        console.log("Average of Weather:", average);
        return average; 
    } 
    calculateWeatherAverage(sortedNumbers); 