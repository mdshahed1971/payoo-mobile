document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
    const withdrawAmount = getInputValueByIdFloat('withdraw-amount');
    const withdrawPin = getInputValueByIdInt('withdraw-pin');
    const mainBalance = getInnerTextValueById('main-balance')
   
    if(withdrawPin===1234){
       const newWithdraw = mainBalance - withdrawAmount;
       setInnerTextValueById('main-balance', newWithdraw);
       clearTextValueById('withdraw-amount');
       clearTextValueById('withdraw-pin');
    }
    else{
        alert('Invalid pin number')
         clearTextValueById('withdraw-amount');
       clearTextValueById('withdraw-pin');
    }

})