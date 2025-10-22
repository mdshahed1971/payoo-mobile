document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
  const accountNumber =  document.getElementById('account-number');
  const accountNumberValue = accountNumber.value;
  const pinNumber = document.getElementById('pin-number');
  const pinNumberValue = pinNumber.value;
  const convertedPinNumber = parseInt(pinNumberValue);

  if(accountNumberValue.length===11){
    if(convertedPinNumber===1234){
    window.location.href= 'inside.html'
    }
    else{
        alert('Pin number does not match')
    }
    
}
else{
    alert('Account numbers does not match')
}
})