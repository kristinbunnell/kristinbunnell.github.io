function quartsToLiters() {
    //  INPUT VALUE
    let quarts = parseFloat(document.getElementById("quarts").value);
    //  PROCESSING
    //  converting from quarts to liters
    let liters = quarts * 1.05669;
    //  OUTPUT
    document.getElementById("output").innerHTML = liters.toFixed(2) + "Liters";
}