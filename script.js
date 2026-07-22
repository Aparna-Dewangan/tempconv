const temInput= document.getElementById("tempInput");
const toFarenheit= document.getElementById("toFahrenheit");
const toCelsius= document.getElementById("toCelsius");
const result= document.getElementById("result");
let temp;
function tempConversion(){
    if (toFarenheit.checked){
        temp= Number(temInput.value);
        temp= temp*9/5+32;
        result.textContent=temp.toFixed(1)+ "°F";
    }
    else if (toCelsius.checked){
        temp= Number(temInput.value);
        temp= (temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+ "°C";
    }
    else{
        result.textContent="Select a Unit";
    }
}