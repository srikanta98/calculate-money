var input = document.getElementById('promo-input');
var food = document.getElementById('food-input');
var rent = document.getElementById('rent-input');
var cloth = document.getElementById('cloth-input');
var total = document.getElementById('total-price');
var balance = document.getElementById('total-balance');
var savie = document.getElementById('save-input');
var saving = document.getElementById('total-amount');
var remaining = document.getElementById('total-balancee');


function calculate(){

    if(isNaN(input.value) || input.value < 0) {
        alert("Please input a positive number in 'promo-field'");
    }else if((isNaN(food.value) || food.value < 0)){
        alert("Please input a positive number in 'food-input'");
    }else if((isNaN(rent.value) || rent.value < 0)){
        alert("Please input a positive number in 'food-input'");
    }else if((isNaN(cloth.value) || cloth.value < 0)){
        alert("Please input a positive number in 'food-input'");
    }else if(input.value<total.innerText){
        alert("you can't expend more money than you have");
    }else{
        total.innerText = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(cloth.value);

        balance.innerText = parseInt(input.value) - parseInt(total.innerText);
    }
    }
   

function save(){
    if(isNaN(savie.value) || savie.value < 0) {
        alert("Please input a positive number in 'promo-field'");
    }else if((isNaN(food.value) || food.value < 0)){
        alert("Please input a positive number in 'food-input'");
    }else if((isNaN(rent.value) || rent.value < 0)){
        alert("Please input a positive number in 'food-input'");
    }else{
        saving.innerText = parseInt(savie.value * balance.innerText) / 100;
        remaining.innerText = parseInt(saving.innerText) + parseInt(balance.innerText)
    }
   
}