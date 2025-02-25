document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById('number-input').value;
    const pinNumber = document.getElementById('pin-input').value;
    console.log(typeof pinNumber);

    if (accountNumber.length === 11) {

        if (pinNumber.length === 4) {
            // sending to a new page if those condition is True
            window.location.href="./main.html";

        }
        else {
            alert('Please Input 4 Digit PIN')
        }
    }
    else {
        alert('Please Input a valid 11 Digit Bangladeshi Phone Number');
    }
})