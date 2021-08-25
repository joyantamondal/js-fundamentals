// string array
var bookPackage = ["C Programming", "Java Programming", "C# Programming", "JavaScripts Book", "Go", "R", "Node js Mastering"];
// string array index find
var findIndex = bookPackage.indexOf("R");
console.log(findIndex);
// integer array 
var numbers = [1, 6, 20, 466, 600];
//find index by element 
var numberIndexFind = numbers.indexOf(600);
console.log(numberIndexFind);

// find elements by index then we can write like this
var bookNameFindByIndex = bookPackage[3]; //here we can use any index2/3/4/5...... etc which value we want to show/know
console.log(bookNameFindByIndex);

// index changing 
console.log(numbers); //here showing main number array that we declared
numbers[3]=  404;
numbers[1]= 101;
console.log(numbers); //here showing which elements we changed/ added . New two elemets added changed previouse two elements 