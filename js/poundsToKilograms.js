function poundsToKilograms() {
    //  INPUT VALUE
    let pounds = parseFloat(document.getElementById('pounds').value);
    //  PROCESSING
    //  converting from pounds to kilograms
    let kilograms = 0.453592
    //  OUTPUT
    document.getElementById('output').textContent = kilograms.toFixed(1) + "Kilograms";
}