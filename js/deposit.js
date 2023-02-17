// step 1 - addEventListener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2 - get the deposit amount form the deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    
    // step 3 - get the deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = newDepositAmount;

    // step 4 - add numbers to set the total deposit
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    depositTotalElement.innerText = currentDepositTotal;

    // step 5 - get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;

    // step 6 - calculate current total balance
    const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    balanceTotalElement.innerText = currentBalanceTotal;


    // step 7 - clear the deposit field
    depositField.value = '';
})