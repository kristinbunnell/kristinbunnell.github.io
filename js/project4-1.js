function addNumbers(){
// INPUT
let number1 = document.getElementById("number1").value;
let number2 = document.getElementById("number2").value;

// PROCESSING
// convert the input strings to numbers by using parseFloat;
number1 = parseFloat(number1);
number2 = parseFloat(number2);
//add the two numbers together and store in my output variable;
let sum = number1 + number2;

// OUTPUT
document.getElementById("output").innerHTML = "The sum of " + number1 + " and " + number2 + " equals " + sum + "!";
}