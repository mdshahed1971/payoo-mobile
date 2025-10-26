document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
    const cashoutAccount = document.getElementById('cashout-account').value;
    const withdrawAmount = getInputValueByIdFloat('withdraw-amount');
    const withdrawPin = getInputValueByIdInt('withdraw-pin');
    const mainBalance = getInnerTextValueById('main-balance')
    
   if(withdrawAmount> mainBalance){
    alert('Insuffient balance to withdraw');
    return;
   }

    if(withdrawPin===1234){
       const newWithdraw = mainBalance - withdrawAmount;
       setInnerTextValueById('main-balance', newWithdraw);
       clearTextValueById('withdraw-amount');
       clearTextValueById('withdraw-pin');

        const transitionContainer = document.getElementById('Transition-History');
        const div = document.createElement('div');
        div.classList.add('bg-indigo-500', 'text-white', 'rounded-md', 'p-5', 'mb-5','mt-5')
        div.innerHTML = `
        <h2>Cashout ${withdrawAmount} TAKA:</h2>
        <h3>Account number is: ${cashoutAccount}</h3>
    `
        transitionContainer.appendChild(div);
    }
    else{
        alert('Invalid pin number')
         clearTextValueById('withdraw-amount');
       clearTextValueById('withdraw-pin');
    }

})