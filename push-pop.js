// ********* add an element in array from the last is push ************
var lastBench = ['Joyanta', 'Jewel', 'Shuva', 'Mintu'];
lastBench.push("Mondal");
lastBench.push("Mondal1");
lastBench.push("Mondal2");
console.log(lastBench);

var ageFriends = [10, 20, 30, 50, 100];
ageFriends.push(150);
ageFriends.push(200);
console.log(ageFriends);

// ********remove an element in array from the last is pop********

lastBench.pop();
console.log(lastBench);

var lastAgeF = ageFriends.pop();
console.log(ageFriends);
console.log(lastAgeF);

// *********remove first element from an array Array.shift() ****************
var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

// *********add first element into an array unshift() ****************

array1.unshift(100);
console.log(array1);