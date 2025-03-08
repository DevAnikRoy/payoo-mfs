// logout toggle
document.getElementById('log-out').addEventListener('click',function(event){
    event.preventDefault;

    window.location.href = './index.html'
})

// add money toggle
document.getElementById('add-money-box').addEventListener('click', function(event){
    event.preventDefault;

    handleToggle('landing-page-text-section', 'none');
    handleToggle('addMoney-section', 'block');
    handleToggle('cashOut-section', 'none');
    handleToggle('transfer-money-section', 'none');
    handleToggle('get-bonus-section', 'none');
    handleToggle('payBill-section', 'none');
    handleToggle('transaction-section', 'none');
})

// cashOut toggle
document.getElementById('cashout-box').addEventListener('click', function(event){
    event.preventDefault;

    handleToggle('landing-page-text-section', 'none');
    handleToggle('addMoney-section', 'none');
    handleToggle('cashOut-section', 'block');
    handleToggle('transfer-money-section', 'none');
    handleToggle('get-bonus-section', 'none');
    handleToggle('payBill-section', 'none');
    handleToggle('transaction-section', 'none');
})

// transfer money toggle
document.getElementById('transferMoney-box').addEventListener('click',function(event){
    event.preventDefault;

    handleToggle('landing-page-text-section', 'none');
    handleToggle('addMoney-section', 'none');
    handleToggle('cashOut-section', 'none');
    handleToggle('transfer-money-section', 'block');
    handleToggle('get-bonus-section', 'none');
    handleToggle('payBill-section', 'none');
    handleToggle('transaction-section', 'none');
})

// get bonus toggle
document.getElementById('get-bonus-box').addEventListener('click',function(event){
    event.preventDefault;

    handleToggle('landing-page-text-section', 'none');
    handleToggle('addMoney-section', 'none');
    handleToggle('cashOut-section', 'none');
    handleToggle('transfer-money-section', 'none');
    handleToggle('get-bonus-section', 'block');
    handleToggle('payBill-section', 'none');
    handleToggle('transaction-section', 'none');
})

// pay bill toggle
document.getElementById('pay-bill-box').addEventListener('click',function(event){
    event.preventDefault;

    handleToggle('landing-page-text-section', 'none');
    handleToggle('addMoney-section', 'none');
    handleToggle('cashOut-section', 'none');
    handleToggle('transfer-money-section', 'none');
    handleToggle('get-bonus-section', 'none');
    handleToggle('payBill-section', 'block');
    handleToggle('transaction-section', 'none');
})

// transaction toggle
document.getElementById('transaction-box').addEventListener('click',function(event){
    event.preventDefault;

    handleToggle('landing-page-text-section', 'none');
    handleToggle('addMoney-section', 'none');
    handleToggle('cashOut-section', 'none');
    handleToggle('transfer-money-section', 'none');
    handleToggle('get-bonus-section', 'none');
    handleToggle('payBill-section', 'none');
    handleToggle('transaction-section', 'block');
})