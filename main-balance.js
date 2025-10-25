document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueByIdFloat('add-amount');
    const pin = getInputValueByIdInt('add-pin');
    const mainBalance = getInnerTextValueById('main-balance');

   
    if(pin===1234){
    const newAmount = amount + mainBalance;
    setInnerTextValueById('main-balance',newAmount);
    clearTextValueById('add-amount');
    clearTextValueById('add-pin');
    }
    else{
        alert('Invalid pin number')
        clearTextValueById('add-amount');
        clearTextValueById('add-pin');
    }
})