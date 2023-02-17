// step 1 - addEventListener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2 - get the deposit amount form the deposit field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    console.log(depositAmount);
})