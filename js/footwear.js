
function getFootwear(){
    //input combo from weather box
    let x=(document.getElementById("weather").value);
    //processing
    if (x=="hot") {footwear= "Sandals";
}
    if (x=="rain") {footwear= "Galoshes";
}
    if (x=="snow") {footwear= "Boots";
}
    if (x=="unknown") {footwear= "Shoes";
}
    //ouput
    document.getElementById("output").innerHTML = footwear;
}