document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValue = withdrawAmount.value;
    const convertedWithdrawAmount = parseFloat(withdrawAmountValue);
    const withdrawPin = document.getElementById('withdraw-pin');
    const withdrawPinValue = withdrawPin.value;
    const convertedWithdrawPin = parseInt(withdrawPinValue);
    const mainBalance = document.getElementById('main-balance');
    const mainBalanceValue = mainBalance.innerText;
    const convertedMainBalance = parseFloat(mainBalanceValue);
   
    if(convertedWithdrawPin===1234){
       const newWithdraw = convertedMainBalance - convertedWithdrawAmount;
       mainBalance.innerText = newWithdraw;
       withdrawAmount.value = '';
       withdrawPin.value = '';
    }
    else{
        alert('Invalid pin number')
         withdrawAmount.value = '';
         withdrawPin.value = '';
    }

})