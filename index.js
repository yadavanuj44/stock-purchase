const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

submitBtn.addEventListener("click", submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculate(ip, qty, curr);
}

function calculate(initial, quantity, current){
    console.log("in function");
    if(initial > current){
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;
        output.innerHTML = "Loss. you have lost " + loss + " and your loss percent is " + lossPercentage + "%";
    }
    else if(current > initial){
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        output.innerHTML = "Profit. you have earned " + profit + " and your profit percent is " + profitPercentage + "%";
    }
    else{
        output.innerHTML = "No pain no gain, and No gain no pain"
    }
}