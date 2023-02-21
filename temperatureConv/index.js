
document.getElementById("subBtn").onclick = function(){
    let temp;

    if(document.getElementById("cbutton").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";

    }
    else if (document.getElementById("fbutton").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "please select a unit"
    }
}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9/5 + 32;
}