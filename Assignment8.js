/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/
let temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. filter() temperatures above 35
let hotDays = temperatures.filter(temp => temp > 35);
console.log("Temperatures above 35°C:", hotDays);

// 2. map() to convert all temperatures from Celsius → Fahrenheit
let fahrenheitTemps = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Temperatures in Fahrenheit:", fahrenheitTemps);

// 3. reduce() to calculate average temperature
let totalTemp = temperatures.reduce((total, temp) => total + temp, 0);
let averageTemp = totalTemp / temperatures.length;
console.log("Average Temperature:", averageTemp.toFixed(2) + "°C");
// 4. find() first temperature above 40
let firstHotDay = temperatures.find(temp => temp > 40);
console.log("First temperature above 40°C:", firstHotDay + "°C");
// 5. findIndex() of temperature 28
let indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of temperature 28°C:", indexOf28);


