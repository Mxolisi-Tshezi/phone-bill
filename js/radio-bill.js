
const billItemTypeRadio = document.querySelector('.billItemTypeRadio')
const callTotalTwoElem = document.querySelector('.callTotalTwo')
const smsTotalTwoElem = document.querySelector('.smsTotalTwo')
const totalTwo = document.querySelector('.totalTwo')
const radioBillAddBtn = document.querySelector('.radioBillAddBtn')


 var callsTotal2 = 0;
 var smsTotal2 = 0;


function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value
    if (billItemType === "call"){
        callsTotal2 += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal2 += 0.75;
    }
    
    callTotalTwoElem.innerHTML = callsTotal2.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callsTotal2 + smsTotal2;
    totalTwo.innerHTML = totalCost2.toFixed(2);

    if (totalCost2 >= 50){
        totalTwo.classList.add("danger");
    }
    else if (totalCost2 >= 30){
        totalTwo.classList.add("warning");
    }

    
}

radioBillAddBtn.addEventListener('click', radioBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
