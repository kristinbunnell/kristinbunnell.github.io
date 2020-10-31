// INPUT
//get day of week
let dayofWeek = new Date();
//ask for input - subtotal
let subtotal = parseFloat(document.getElementById('subtotal').value);
let newsubtotal
let finaltotal
// PROCESSING
function total(){
    //is subtotal greater than $50 and Tuesday or Wednesday?
    //if so, subtract $50
    if (subtotal >= 50 && dayofWeek == 2 || dayofWeek == 3) {
        newsubtotal = (subtotal * 0.9);
    }
    else {
        newsubtotal = (subtotal);
    }
    parseFloat(newsubtotal);
    //add tax at 6% of new sub total
    trueTotal = (newsubtotal * 1.06);
    //calculate final total 
    parseFloat(finaltotal);
// OUTPUT
//display total
document.getElementById('output').innerHTML = "Total = " + finalTotal;
}