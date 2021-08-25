// even numbers 
var numbers =0;
console.log("Even Number List: ");
while(numbers<=20){
    // numbers%2==0 means  if any number mod by 2 and Vag sesh 0  then it is even number
    if(numbers%2==0){
        console.log(numbers);
    }
    numbers++;
}
// odd numbers 
var numbers =0;
console.log("Odd Number List: ");
while(numbers<=20){
        // numbers%2==1 means if any number mod by 2 and Vag sesh 1  then it is odd number
    if(numbers%2==1){
        console.log(numbers);
    }
    numbers++;
}

//odd even together using same loop

var a =0;
console.log("Odd Even Toghter Using Same Loop");
while(a<=10){
    if(a%2==0){
        console.log("Even",a);
    }
    else if(a%2==1){
        console.log("odd",a);
    }
    else {
        console.log("Number is not an integer or valid");
    }
   
    a++; 
  }  
  