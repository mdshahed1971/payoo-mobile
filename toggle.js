document.getElementById('cash-out-button').addEventListener('click', function(){
    const cashOutBox = document.getElementById('cash-out-parent').classList.remove('hidden')
   const addMoneyBox = document.getElementById('add-money-parent').classList.add('hidden')
})

document.getElementById('add-button').addEventListener('click', function(){
    const cashOutBox = document.getElementById('cash-out-parent').classList.add('hidden')
   const addMoneyBox = document.getElementById('add-money-parent').classList.remove('hidden')
})