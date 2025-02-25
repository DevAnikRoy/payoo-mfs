// checking right input
document.getElementById('addMoney-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById('number-input').value;
    const pinNumber = document.getElementById('pin-input').value;
    const amount = document.getElementById('amount-input').value;
    const convertedAmount = parseInt(amount);
    const mainAmount = document.getElementById('main-amount').innerText;
    const convertedMainAmount = parseFloat(mainAmount);

    if (accountNumber.length === 11) {
        if (convertedAmount >= 500){
            if (pinNumber.length === 4) {
                // adding amount in the wallet
                const sum = convertedMainAmount + convertedAmount;
                // sending the sum in the wallet
                document.getElementById('main-amount').innerText = sum;
            }
            else {
                alert('Please Input 4 Digit PIN')
            }
        }
        else {
            alert('Please Add Minimum $500')
        }
    }
    else {
        alert('Please Input a valid 11 Digit Bangladeshi Phone Number');
    }
})






