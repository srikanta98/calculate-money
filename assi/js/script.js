function getValue(idName){
    var persedValue = parseInt(document.getElementById(idName).value);
    return persedValue;
}
function getElement(idName){
    var element = document.getElementById(idName);
    return element;
}

// let savei = document.getElementById('save_input');
// let saving = document.getElementById('total_amount');
// let remaining = document.getElementById('total_balancee');



function calculate(){

var incomeAmount = getValue("promo-input");
var foodCost = getValue('food-input');
var rentCost = getValue('rent-input');
var clothesCost = getValue('cloth-input');

var totalExpenses = getElement('total-price');
var balanceAfterExpenses = getElement('total-balance');

var totalCost = foodCost + rentCost + clothesCost;
    if(isNaN(incomeAmount) || incomeAmount < 0) {
        alert("Please input a positive number in 'promo-field'");
    }else if((isNaN(foodCost) || foodCost < 0)){
        alert("Please input a positive number in 'food-input'");
    }else if((isNaN(rentCost) || rentCost < 0)){
        alert("Please input a positive number in 'rent-input'");
    }else if((isNaN(clothesCost) || clothesCost < 0)){
        alert("Please input a positive number in 'clothes-input'");
    }else if(incomeAmount < totalCost){
        alert("you can't expend more money than you have");
    }else{
        totalExpenses.innerText = totalCost;
    

        balanceAfterExpenses.innerText =incomeAmount-totalCost;
    }
    
}

function save(){
    var totalExpenses = getElement('total-price');
    var balanceAfterExpenses = getElement('total-balance');
    var incomeAmount = getValue("promo-input");
    var savingsPercentage = getValue("save-input");
    var savingAmount = getElement("total-amount");
    var remainingBalance = getElement("total-balancee");

     var savings = (savingsPercentage/100)*incomeAmount;
     var finalBalance= incomeAmount-(savings+ parseInt(totalExpenses.innerText));

         


