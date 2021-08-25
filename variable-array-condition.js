var bottleColor = "Yellow";
var waterQuantity =1;
var isFull = false;

// array
var items = ["paper", "color", "mug", "cup", "bottle"];
console.log(items.indexOf("cup"));
items.push("pen");
items.push("Babu Khyso");
console.log(items);
items.pop();
console.log(items);
// console.log(items.length);

// conditional
if(items.length<=4){
    console.log("You Have Too Many Stuff on Your desk");
}
else if(items.length!=0){
    console.log("Today Launch Time 2.30 because of work pressure");

}
else{
    console.log("Desk is Free");
}