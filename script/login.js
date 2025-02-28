document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault;

    const mobileNumber = document.getElementById('number-input').value;
    // console.log(typeof mobileNumber);
    const pinNumber = document.getElementById('pin-input').value;
    // console.log(typeof pinNumber);

    if(mobileNumber.length === 11){
        if(pinNumber.length === 4){

            window.location.href = './main.html';

            handleToggle('landing-page-text-section', 'block');
            handleToggle('addMoney-section', 'none');
            handleToggle('cashOut-section', 'none');
            handleToggle('transfer-money-section', 'none');
            handleToggle('get-bonus-section', 'none');
            handleToggle('payBill-section', 'none');
            handleToggle('transaction-section', 'none');
        }
        else{
            alert("Enter 4 Digit Pin");
        }
    }
    else{
        alert('Enter 11 Digit Valid Bangladeshi Number');
    }
})