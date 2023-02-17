// step 1 - addEventListener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2 - get the deposit amount form the deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    
    // step 3 - get the deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = newDepositAmount;

    const currentDepositTotal = parseInt(previousDepositTotal) + parseInt(newDepositAmount);
    depositTotalElement.innerText = currentDepositTotal;

    // step 7 - clear the deposit field
    depositField.value = '';
})