function poundsToKilograms() {
    //  INPUT VALUE
    let pounds = parseFloat(document.getElementById("pounds").value);
    //  PROCESSING
    //  converting from pounds to kilograms
    let kilograms = pounds * 0.946353;
    //  OUTPUT
    document.getElementById("output").innerHTML = kilograms.toFixed(2) + "Kilograms";
}