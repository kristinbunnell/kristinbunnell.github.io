
function getFootwear(){
    // input combo from weather box
    let x=(document.getElementById("weather").value);
    // processing types of shoe for each type of weather
    if (x=="hot") {footwear= "Sandals";
}
    if (x=="rain") {footwear= "Galoshes";
}
    if (x=="snow") {footwear= "Boots";
}
    if (x=="unknown") {footwear= "Shoes";
}
    // ouput determine proper shoe to assign
    document.getElementById("output").innerHTML = footwear;
}