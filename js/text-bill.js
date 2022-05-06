const billTypeText = document.querySelector('.billTypeText')
const callsTotalElem = document.querySelector('.callTotalOne')
const smsTotalElem = document.querySelector('.smsTotalOne')
const totalCostElem = document.querySelector('.totalOne')
const textTotalAddBtn = document.querySelector('.addToBillBtn')

var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){
    //the value entered
    var billTypeEntered = billTypeText.value.trim();
    // increment depending on wheh=ther sms or call
    if (billTypeEntered.toLowerCase() === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered.toLowerCase() === "sms"){
        smsTotal += 0.75;
    }
    
    //updating of the totals.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
        // to make the text red or orange depending on the set critical level

    if (totalCost >= 50){
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);

// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
