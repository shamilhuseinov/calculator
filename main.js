const displayPanel = document.querySelector("#answer");
const AC = document.getElementById('AC')
let currentValue=0;
let lastvalue="nothing";
let operator=null;
function updateDisplay() {
    displayPanel.textContent = currentValue;
    }

function clickToNumber(number){
    if(currentValue===0){
        currentValue=number;
    }else if(operator){
        currentValue=number
    }
    else{
        currentValue=currentValue*10+number;
    }
    updateDisplay();
    AC.textContent="C"
}

function clickToAC(){
    currentValue=0;
    updateDisplay();
    AC.textContent="AC"
    lastvalue="nothing";
    operator=null;
}

function clickToPlusOrMinus(){
    currentValue*=-1;
    updateDisplay();
}

function clickToPercentage(){
    currentValue/=100
    updateDisplay();
}

function calculate(){
    switch(operator){
        case"+":
            currentValue+=lastvalue;
            break;
        case"-":
            currentValue=lastvalue-currentValue;
            break;
        case"*":
            currentValue*=lastvalue;
            break;
        case"/":
            currentValue=lastvalue/currentValue;
            break;
        default:
    }
    updateDisplay()
}

function calculateOperators(value){
    operator=value;
    if(lastvalue="nothing"){
        lastvalue=currentValue;

    }else{
        switch(operator){
            case"+":
                lastvalue+=currentValue;
                break;
            case"-":
                lastvalue-=currentValue;
                break;
            case"*":
                lastvalue*=currentValue;
                break;
            case"/":
                lastvalue/=currentValue;
                break;  
        }
    }
}    

document.getElementById("1").addEventListener('click',()=> clickToNumber(1));
document.getElementById("2").addEventListener('click',()=> clickToNumber(2));
document.getElementById("3").addEventListener('click',()=> clickToNumber(3));
document.getElementById("4").addEventListener('click',()=> clickToNumber(4));
document.getElementById("5").addEventListener('click',()=> clickToNumber(5));
document.getElementById("6").addEventListener('click',()=> clickToNumber(6));
document.getElementById("7").addEventListener('click',()=> clickToNumber(7));
document.getElementById("8").addEventListener('click',()=> clickToNumber(8));
document.getElementById("9").addEventListener('click',()=> clickToNumber(9));
document.getElementById("zero").addEventListener('click',()=> clickToNumber(0));
document.getElementById("AC").addEventListener('click',()=> clickToAC());
document.getElementById("plusOrMinus").addEventListener('click',()=> clickToPlusOrMinus());
document.getElementById("percentage").addEventListener('click',()=> clickToPercentage());
document.getElementById("plus").addEventListener('click',()=> calculateOperators("+"));
document.getElementById("minus").addEventListener('click',()=> calculateOperators("-"));
document.getElementById("multiply").addEventListener('click',()=> calculateOperators("*"));
document.getElementById("divide").addEventListener('click',()=> calculateOperators("/"));
document.getElementById("equal").addEventListener('click',()=> calculate());

