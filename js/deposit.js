// step 1 - addEventListener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2 - get the deposit amount form the deposit field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    // step 3 - get the deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
})