/***
 * 1. add event handler with the withdraw button
 * 2. get the withdraw amount
 * 3. get previous withdraw total
 * 4. calculate total withdraw amount
 * 5. get the previous balance total
 * 6. calculate new balance total and set 
 * 7. clear input field
 */

// step 1 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    
    

    //step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    //step 7
    withdrawField.value = '';

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank e eto taka nai!');
        return;
    }

    //step 4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    
    //step 6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    

    
    
})