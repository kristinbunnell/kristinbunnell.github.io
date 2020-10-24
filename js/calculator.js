function calculator() {
    // INPUT
    // user inputs first number
    // user inputs operator
    // user inputs second number
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2= parseFloat(document.getElementById('number2').value);
    let myans = parseFloat(document.getElementById('myanswer').value);
    let operator = (document.getElementById('operator').value);

    // PROCESSING
    // calculate the proplem
    // use switch case for all operators
    let message;
    let answer;
    switch(operator) {
        case '+':
            answer = parseFloat(num1 + num2);
            if (myans == answer){
                message = "You are Correct!"
            } else {
                message = "Sorry, try again."
            }
            break;
        case '-':
            answer = parseFloat(num1 - num2);
            if (myans == answer){
                message = "You are Correct!"
            } else {
                message = "Sorry, try again."
            }
            break;
        case '*':
            answer = parseFloat(num1 * num2);
            if (myans == answer){
                message = "You are Correct!"
            } else {
                message = "Sorry, try again."
            }
            break;
        case '/':
            answer = parseFloat(num1/num2);
            if (myans == answer){
                message = "You are Correct!"
            } else {
                message = "Sorry, try again."
            }
            break;         
    }

    // OUTPUT
    // Check the users answer
    document.getElementById('output').innerHTML = message
}
