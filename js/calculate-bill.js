
//get a reference to the calculate button

const calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element

const billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString

const billStringElement = document.querySelector(".billString");


//create the function that will be called when the calculate button is pressed

function calculateBtnClicked(){
    // logic goes here
    // get the string entered in the textArea
    var billString = billStringElement.value;

//  * this function should read the string value entered - split it on a comma.
var billItems = billString.split(",")
    // a variable for the total phone bill.
    var billTotal = 0;
//  * loop over all the entries in the the resulting list
for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        
        if (billItem.toLowerCase()=== "call"){
            billTotal += 2.75;
        }
        else if (billItem.toLowerCase()  === "sms"){
            billTotal += 0.75;
        }

        
    }
    //  * once done looping over all the entries - display the total onto the screen in the billTotal element
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
   // billTotalElement.innerHTML = roundedBillTotal;
// back to colour default after the danger and warning
    billTotalElement.classList.remove("warning")
    billTotalElement.classList.remove("danger")

    if (billTotal >= 30.00  ) {

        billTotalElement.classList.add("danger");}

        else if (billTotal >= 20.00 && billTotal < 30.00) {
            billTotalElement.classList.add('warning')
        }

        // else if (billTotal >= 30){

        //     billTotalElement.classList.add('danger')

        // }
        billTotalElement.innerHTML = roundedBillTotal;
}
//link the function to a click event on the calculate button

calculateBtn.addEventListener('click', calculateBtnClicked);




