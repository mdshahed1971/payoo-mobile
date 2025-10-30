document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const amount = getInputValueByIdFloat('add-amount');
    const pin = getInputValueByIdInt('add-pin');
    const mainBalance = getInnerTextValueById('main-balance');

    if(amount<0){
        alert('Insuffient balance to add');
        clearTextValueById('add-amount');
        clearTextValueById('add-pin');
        return;
    }
   
    if(pin===1234){
    const newAmount = amount + mainBalance;
    setInnerTextValueById('main-balance',newAmount);
    clearTextValueById('add-amount');
    clearTextValueById('add-pin');

    const transitionContainer = document.getElementById('Transition-History');
    const banks = document.getElementById('all-bank').value;
    const div = document.createElement('div');
    div.classList.add('bg-indigo-500', 'text-white', 'rounded-md', 'p-5', 'mb-5','mt-5')
    div.innerHTML = `
    <h2>Added ${amount} TAKA:</h2>
    <h2>From ${banks}</h2>
     <h3>Account number is: ${accountNumber}</h3>
    `
   transitionContainer.appendChild(div);


    }
    else{
        alert('Invalid pin number')
        clearTextValueById('add-amount');
        clearTextValueById('add-pin');
    }
})