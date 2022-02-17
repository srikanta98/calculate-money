
// Getting values by using fuction
function getValue(idName){
    var persedValue = parseInt(document.getElementById(idName).value);
    return persedValue;
}
// elements
function getElement(idName){
    var element = document.getElementById(idName);
    return element;
}

function calculate(){
    // values and elements

var incomeAmount = getValue("promo-input");
var foodCost = getValue('food-input');
var rentCost = getValue('rent-input');
var clothesCost = getValue('cloth-input');

var totalExpenses = getElement('total-price');
var balanceAfterExpenses = getElement('total-balance');
// total cost
var totalCost = foodCost + rentCost + clothesCost;
// error handling
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
        // showing values
        totalExpenses.innerText = totalCost;
        balanceAfterExpenses.innerText =incomeAmount-totalCost;
    }
    
}
// saving part
function save(){
    // variable decraletion
    var totalExpenses = getElement('total-price');
    var balanceAfterExpenses = getElement('total-balance');
    var incomeAmount = getValue("promo-input");
    var savingsPercentage = getValue("save-input");
    var savingAmount = getElement("total-amount");
    var remainingBalance = getElement("total-balancee");
    // savings calculation
     var savings = (savingsPercentage/100)*incomeAmount;
    //  last calculation
     var finalBalance= incomeAmount-(savings+ parseInt(totalExpenses.innerText));
    // error handling
    if(savings>parseInt(balanceAfterExpenses.innerText)){
        alert('you cant save more');
    }else if(savingsPercentage<0 || isNaN(savingsPercentage) ){
        alert("saving % cant be negative or string")
    }else{
        // displaying values
         savingAmount.innerText= savings;
         remainingBalance.innerText=finalBalance
    }
}       


