document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('add-amount');
    const amountValue = amount.value;
    const pin = document.getElementById('add-pin');
    const pinValue = pin.value;
    const convertedPinValue = parseInt(pinValue);
    const convertedAmountValue = parseFloat(amountValue);
    const mainBalance = document.getElementById('main-balance');
    const mainBalanceValue = mainBalance.innerText;
    const convertedMainBalance = parseFloat(mainBalanceValue);
   
    if(convertedPinValue===1234){
    const newAmount = convertedAmountValue + convertedMainBalance;
   mainBalance.innerText = newAmount;
   amount.value = '';
   pin.value = '';
    }
    else{
        alert('Invalid pin number')
        amount.value = '';
        pin.value = '';
    }
})