// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function deleteFromLast(){
    display.value = display.value.slice(0,-1);
}
function percentage(){
    if(display.value !== ""){
        display.value = parseFloat(display.value)/100;
    }
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}